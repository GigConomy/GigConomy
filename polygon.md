**⭓ Polygon:** We have used Polygon Mumbai Testnet for deploying smart contracts of
**1) Escrow Agreement**

## Polygon Implementation:

https://github.com/GigConomy/GigConomy/blob/master/hardhat.config.js

```
module.exports = {`
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
```

