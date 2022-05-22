import React, { useState, createContext, useEffect, useCallback } from "react";

import { useMoralis } from "react-moralis";

import { ethers } from "ethers";
import transakSDK from "@transak/transak-sdk";

export const TransakWeb3Context = createContext("");

export const TransakWeb3ContextWeb3ContextProvider = (props) => {
  const [isLoadingcon, setIsLoaing] = useState(false);
  const [transak, setTransak] = useState();
  const { account } = useMoralis();

  async function openTransak() {
    let transak = new transakSDK({
      apiKey: process.env.REACT_APP_TRANSAK_API_KEY, // Your API Key
      environment: "STAGING", // STAGING/PRODUCTION
      hostURL: window.location.origin,
      widgetHeight: "480px",
      widgetWidth: "500px",
      // Examples of some of the customization parameters you can pass
      defaultCryptoCurrency: "ETH", // Example 'ETH'
      walletAddress: account, // Your customer's wallet address
      themeColor: "#6b46c1", // App theme color
      fiatCurrency: "USD", // If you want to limit fiat selection eg 'USD'
      email: "", // Your customer's email address
      redirectURL: "",
    }); 
    setTransak(transak);
    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
    });
  }

  return (
    <TransakWeb3Context.Provider
      value={{
        openTransak,
      }}
      {...props}
    >
      {props.children}
    </TransakWeb3Context.Provider>
  );
};
