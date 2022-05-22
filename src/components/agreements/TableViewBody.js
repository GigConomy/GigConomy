import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ethers } from "ethers";
import { POLYGON } from "../../network/Network";
import { AgreementAbi } from "../../contracts/config";
import Label from "../Label";
import TableRowView from "./TableRowView";
import { ToastContainer, toast } from "react-toastify";
import { NotificationContext } from "../../context/Notification";

function TableViewBody(props) {
  const [contractState, setContractState] = useState(null);
  const [mineStatus, setMineStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [canloading, setCanLoading] = React.useState(false);

  const notificationContext = React.useContext(NotificationContext);
  const { sendNotifications } = notificationContext;

  const isBuyer = contractState
    ? props.currentAccount.toLowerCase() === contractState.buyer.toLowerCase()
    : null;
  const isLocked = contractState
    ? contractState.buyerStake && contractState.sellerStake
    : null;
  const noCancel = contractState
    ? !contractState.buyerCancel && !contractState.sellerCancel
    : null;

  const getStatus = () => {
    if (contractState.active && isLocked) return "Active";
    else if (contractState.active && !isLocked) return "Unlocked";
    else if (contractState.cancelled) return "Cancelled";
    return "Completed";
  };

  const isStaked = () => {
    if (isBuyer && contractState.buyerStake) return true;
    if (!isBuyer && contractState.sellerStake) return true;
    return false;
  };

  const isCancelled = () => {
    if (isBuyer && contractState.buyerCancel) return true;
    if (!isBuyer && contractState.sellerCancel) return true;
    return false;
  };

  const btnConfirm = contractState && isBuyer && isLocked && noCancel;
  const btnStake = contractState && !isLocked && !isStaked();
  const btnRevokeStake = contractState && !isLocked && isStaked();
  const btnCancel = contractState && isLocked && !isCancelled();
  const btnRevokeCancel = contractState && isLocked && isCancelled();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const agreementContract = new ethers.Contract(
    props.contractAddress,
    AgreementAbi,
    signer
  );

  const stake = async () => {
    setLoading(true);
    let txn;
    try {
      let per;
      let stake = Number(contractState.price);
      if (isBuyer) {
        per = Number(contractState.statePercent);
      } else {
        per = Number(contractState.sellerPercent);
      }
      stake = (stake * per) / 100;
      const formattedPrice = ethers.utils.parseEther(String(stake));
      txn = await agreementContract.stake({ value: formattedPrice });
      await txn.wait();
      const data = {
        to: props.currentAccount,
        message: `You stacked ${stake} MATIC Successfully!`,
      };
      await sendNotifications(data);
      toast.success("Successfully stake amount!", { position: "bottom-right" });

      setLoading(false);
    } catch (err) {
      toast.error(err.data.message, { position: "bottom-right" });
      setLoading(false);
    }
  };

  const withdrawStake = async () => {
    setLoading(true);
    let txn;
    try {
      txn = await agreementContract.revokeStake();
      await txn.wait();
      const data = {
        to: props.currentAccount,
        message: `Withdraw your stake amount!`,
      };
      await sendNotifications(data);
      toast.success("Successfully withdraw your stake amount!", {
        position: "bottom-right",
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.data.message, { position: "bottom-right" });
      console.log(err);
    }
  };

  const cancel = async () => {
    setCanLoading(true);
    let txn;

    try {
      txn = await agreementContract.cancel();
      await txn.wait();
      toast.success("Successfully cancel your agreement", {
        position: "bottom-right",
      });
      setCanLoading(false);
    } catch (err) {
      setCanLoading(false);
      toast.error(err.data.message, { position: "bottom-right" });
    }
  };

  const revokeCancel = async () => {
    setLoading(true);
    let txn;

    try {
      txn = await agreementContract.revokeCancellation();
      await txn.wait();
      toast.success("successfully revoke your stake!", {
        position: "bottom-right",
      });
      setLoading(false);
    } catch (err) {
      toast.error(err.data.message, { position: "bottom-right" });
      setLoading(false);
      console.log(err);
    }
  };

  const confirm = async () => {
    setLoading(true);
    let txn;

    try {
      txn = await agreementContract.confirm();
      await txn.wait();
      toast.success(" Successfully confirm your contract", {
        position: "bottom-right",
      });
      setLoading(false);
    } catch (err) {
      toast.error(err.data.message, { position: "bottom-right" });
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const agreementContract = new ethers.Contract(
      props.contractAddress,
      AgreementAbi,
      signer
    );

    const cleanAgreement = (agreementDetails) => {
      let cleanAgreement = {
        active: agreementDetails.active,
        cancelled: agreementDetails.cancelled,
        buyer: agreementDetails.buyer,
        seller: agreementDetails.seller,
        buyerCancel: agreementDetails.buyerCancel,
        sellerCancel: agreementDetails.sellerCancel,
        buyerStake: agreementDetails.buyerStake,
        sellerStake: agreementDetails.sellerStake,
        address: agreementDetails.agreAddress,
        statePercent: agreementDetails.statePercent,
        sellerPercent: agreementDetails.sellerPercent,
        price: ethers.utils.formatEther(agreementDetails.salePrice),
        title: agreementDetails.title,
        description: agreementDetails.description,
      };
      return cleanAgreement;
    };

    const getLatestData = async () => {
      let agreementDetails = await agreementContract.getStatus();
      setContractState(cleanAgreement(agreementDetails));
    };

    getLatestData();

    agreementContract.on("AgreementStateChanged", (buyer, seller, state) => {
      setContractState(cleanAgreement(state));
    });
  }, [props.contractAddress]);

  if (contractState != null) {
    return (
      <TableBody>
        <ToastContainer />
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {contractState.title.slice(0, 20)}
          </TableCell>
          <TableCell>{contractState.buyer.slice(0, 10)}</TableCell>
          <TableCell>{contractState.seller.slice(0, 10)}</TableCell>
          <TableCell>
            <Label
              variant="ghost"
              color={
                (getStatus() === "Cancelled" && "error") ||
                (getStatus() === "Active" && "success") ||
                (getStatus() === "Unlocked" && "warning") ||
                (getStatus() === "Completed" && "info")
              }
            >
              {getStatus()}
            </Label>
          </TableCell>
          <TableCell>
            <a
              href={`${POLYGON.blockExplorerUrls[0]}/address/${contractState.address}`}
              target="_blank"
              rel="noreferrer"
            >
              <OpenInNewIcon />
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Stack>
                  <Typography variant="h4" gutterBottom component="h2">
                    Agreement Details
                  </Typography>{" "}
                  <Typography variant="h6" gutterBottom component="h2">
                    {contractState.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom component="h2">
                    {contractState.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="h2">
                    Total Amount: {contractState.price} MATIC
                  </Typography>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
                  justifyContent="flex-start"
                >
                  <TableRowView
                    title="Buyer"
                    address={contractState.buyer}
                    percent={contractState.statePercent}
                    amount={contractState.price}
                    staked={contractState.buyerStake}
                    currentAdd={props.currentAccount}
                  />
                  <TableRowView
                    title="Seller"
                    address={contractState.seller}
                    percent={contractState.sellerPercent}
                    amount={contractState.price}
                    staked={contractState.sellerStake}
                    currentAdd={props.currentAccount}
                  />
                </Stack>

                <Stack sx={{ "& button": { my: 2 } }}>
                  {contractState.active && (
                    <div className="action-button-container">
                      {btnStake && (
                        <LoadingButton
                          size="large"
                          loading={loading}
                          variant="contained"
                          loadingIndicator={
                            <CircularProgress color="primary" size={24} />
                          }
                          onClick={stake}
                        >
                          Stake
                        </LoadingButton>
                      )}
                      {btnRevokeStake && (
                        <LoadingButton
                          size="large"
                          loading={loading}
                          variant="contained"
                          loadingIndicator={
                            <CircularProgress color="primary" size={24} />
                          }
                          onClick={withdrawStake}
                        >
                          Withdraw Stake
                        </LoadingButton>
                      )}
                      {btnCancel && (
                        <LoadingButton
                          size="large"
                          style={{ margin: "0 10px" }}
                          loading={canloading}
                          variant="contained"
                          loadingIndicator={
                            <CircularProgress color="primary" size={24} />
                          }
                          onClick={cancel}
                        >
                          Cancel
                        </LoadingButton>
                      )}
                      {btnRevokeCancel && (
                        <LoadingButton
                          size="large"
                          loading={loading}
                          variant="contained"
                          loadingIndicator={
                            <CircularProgress color="primary" size={24} />
                          }
                          onClick={revokeCancel}
                        >
                          Revoke Cancel
                        </LoadingButton>
                      )}
                      {btnConfirm && (
                        <LoadingButton
                          size="large"
                          style={{ margin: "10px" }}
                          loading={loading}
                          variant="contained"
                          loadingIndicator={
                            <CircularProgress color="primary" size={24} />
                          }
                          onClick={confirm}
                        >
                          Finish
                        </LoadingButton>
                      )}
                    </div>
                  )}
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  } else {
    return "";
  }
}

export default TableViewBody;
