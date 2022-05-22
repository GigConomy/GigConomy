
**WalletConnect:** We have used Wallet Connect for easy communication between wallet and dapp.

## WalletConnect Implementation:

https://github.com/GigConomy/GigConomy/blob/master/src/providerOptions.js

```
walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_INFURA_KEY, // required
    },
  },
```

