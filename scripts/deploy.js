const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const AgreementContract = await hre.ethers.getContractFactory("AgreementContract");
  const agree = await AgreementContract.deploy();

  await agree.deployed();
  console.log("Contract address is: ", agree.address); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});