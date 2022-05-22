**Coinbase Wallet:** Integrated Coinbase connects non custodial wallet for users.

## Coinbase Wallet Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

```
 walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "GigConomy", // Required
      infuraId: process.env.REACT_APP_INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },

```

