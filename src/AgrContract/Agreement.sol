// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Agreement {
    using SafeMath for uint256;

    address payable private _buyer;
    address payable private _seller;
    uint256 private _salePrice;
    uint256 private _statePercent;
    uint256 private _sellerPercent;
    string private _title;
    string private _description;
    mapping(address => uint256) private _stakeAmount;

    mapping(address => bool) private _stakeStatus;
    mapping(address => bool) private _cancelStatus;
    bool private _isActive;
    bool private _isCancelled;

    address public agreementAddress;

    struct ContractStatus {
        address buyer;
        address seller;
        uint256 salePrice;
        uint256 statePercent;
        uint256 sellerPercent;
        string title;
        string description;
        bool buyerStake;
        bool sellerStake;
        bool buyerCancel;
        bool sellerCancel;
        bool active;
        bool cancelled;
        address agreAddress;
    }

    event AgreementStateChanged(
        address indexed buyer,
        address indexed seller,
        ContractStatus state
    );

    constructor(
        address payable _buyerAddress,
        address payable _sellerAddress,
        uint256 _price,
        uint256 _percent,
        uint256 _sPer,
        string memory _titleA,
        string memory _descriptionA
    ) {
        require(
            _buyerAddress != _sellerAddress,
            "Buyer Address and seller Address can't be the same"
        );

        _buyer = _buyerAddress;
        _seller = _sellerAddress;
        _salePrice = _price;
        _statePercent = _percent;
        _sellerPercent = _sPer;
        _title = _titleA;
        _description = _descriptionA;

        _stakeAmount[_buyer] = _salePrice.mul(_statePercent).div(100);
        _stakeAmount[_seller] = _salePrice.mul(_sellerPercent).div(100);
        _isActive = true;
        agreementAddress = address(this);
    }

    modifier onlyAgreementParties() {
        require(
            msg.sender == _buyer || msg.sender == _seller,
            "Only allow agreement parties!"
        );

        _;
    }

    modifier onlyAgreementBuyer() {
        require(msg.sender == _buyer, "Only allow agreement buyer");
        _;
    }

    modifier onlyAgreementActive() {
        require(_isActive, "Agreement is not active");

        _;
    }

    modifier agreementLocked(bool _status) {
        bool agreementLockStatus = _stakeStatus[_buyer] &&
            _stakeStatus[_seller];
        require(
            agreementLockStatus == _status,
            "Agreement status does not permit this action."
        );
        _;
    }

    function stake()
        public
        payable
        onlyAgreementParties
        onlyAgreementActive
        agreementLocked(false)
    {
        require(!_stakeStatus[msg.sender], "Already stake the amount.");
        require(
            msg.value == _stakeAmount[msg.sender],
            "Incorrect staking amount sent."
        );
        _stakeStatus[msg.sender] = true;
        emit AgreementStateChanged(_buyer, _seller, getStatus());
    }

    function revokeStake()
        public
        payable
        onlyAgreementParties
        onlyAgreementActive
        agreementLocked(false)
    {
        uint256 balance = address(this).balance;
        require(_stakeStatus[msg.sender], "No staked yet!.");
        require(
            balance >= _stakeAmount[msg.sender],
            "Not enough Matic left to withdraw."
        );
        (bool success, ) = (msg.sender).call{value: _stakeAmount[msg.sender]}(
            ""
        );
        require(success, "Transfer failed.");
        _stakeStatus[msg.sender] = false;
        emit AgreementStateChanged(_buyer, _seller, getStatus());
    }

    function cancel()
        public
        payable
        onlyAgreementParties
        onlyAgreementActive
        agreementLocked(true)
    {
        require(
            !_cancelStatus[msg.sender],
            " Already issued a cancellation request."
        );
        _cancelStatus[msg.sender] = true;
        if (_cancelStatus[_buyer] && _cancelStatus[_seller]) {
            require(address(this).balance >= _salePrice - _stakeAmount, "Not enough Matic.");

            (bool buyerRefunded, ) = (_buyer).call{value: _stakeAmount[_buyer]}(
                ""
            );
            (bool sellerRefunded, ) = (_seller).call{
                value: _stakeAmount[_seller]
            }("");
            require(buyerRefunded && sellerRefunded, "Transfer has failed");
            address payable[2] memory arrays = [_buyer, _seller];

            for (uint256 i = 0; i < arrays.length; i++) {
                _cancelStatus[arrays[i]] = false;
                _stakeStatus[arrays[i]] = false;
            }

            _isActive = false;
            _isCancelled = true;
        }

        emit AgreementStateChanged(_buyer, _seller, getStatus());
    }

    function revokeCancellation()
        public
        onlyAgreementParties
        onlyAgreementActive
        agreementLocked(true)
    {
        require(
            _cancelStatus[msg.sender],
            "Doesn't have a cancel request to revoke"
        );
        _cancelStatus[msg.sender] = false;
        emit AgreementStateChanged(_buyer, _seller, getStatus());
    }

    function confirm()
        public
        payable
        onlyAgreementBuyer
        onlyAgreementActive
        agreementLocked(true)
    {
        require(
            !_cancelStatus[_buyer] && !_cancelStatus[_seller],
            "Cannot confirm as at least one  requested cancel!"
        );
        require(address(this).balance >= _salePrice, "Not enough Matic");
        (bool buyerRefunded, ) = (_buyer).call{value: _stakeAmount[_seller]}(
            ""
        );
        (bool sellerRefunded, ) = (_seller).call{value: _stakeAmount[_buyer]}(
            ""
        );
        require(buyerRefunded && sellerRefunded, "Transfer has failed");
        _stakeStatus[_buyer] = false;
        _stakeStatus[_seller] = false;
        _isActive = false;

        emit AgreementStateChanged(_buyer, _seller, getStatus());
    }

    function getStatus() public view returns (ContractStatus memory) {
        return
            ContractStatus(
                _buyer,
                _seller,
                _salePrice,
                _statePercent,
                _sellerPercent,
                _title,
                _description,
                _stakeStatus[_buyer],
                _stakeStatus[_seller],
                _cancelStatus[_buyer],
                _cancelStatus[_seller],
                _isActive,
                _isCancelled,
                agreementAddress
            );
    }
}
