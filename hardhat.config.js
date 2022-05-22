require("dotenv").config({ path: "./.env" });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },

  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
