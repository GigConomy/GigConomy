const Agreement = artifacts.require("AgreementContract");
const Ag = artifacts.require("Agreement");

module.exports = function (deployer) {
  deployer.deploy(Agreement); 
  deployer.deploy(Ag);
};
