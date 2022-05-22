import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import UAuthSPA from "@uauth/js";

require("dotenv").config({ path: "./.env" });

// These options are used to construct the UAuthSPA instance.
export const uauthOptions = {
  clientID: "79a8a15a-dddc-4d39-8483-9db5536cc839",
  redirectUri: "http://localhost:3000",

  // Must include both the openid and wallet scopes.
  scope: "openid wallet",
};


export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "GigConomy", // Required
      infuraId: process.env.REACT_APP_INFURA_KEY, // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.REACT_APP_INFURA_KEY, // required
    },
  },
  // Unstopable Domain
  "custom-uauth": {
    display: UAuthWeb3Modal.display,
    connector: UAuthWeb3Modal.connector,
    package: UAuthSPA,
    options: uauthOptions,
  },
};
