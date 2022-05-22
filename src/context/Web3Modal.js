import React, { useState, createContext, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useMoralis } from "react-moralis";
import { providerOptions } from "../providerOptions";
import { useNavigate } from "react-router-dom";

export const Web3ModalContext = createContext(undefined);

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

export const Web3ModalContextProvider = (props) => {
  const navigate = useNavigate();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const { authenticate, user, isAuthenticated, enableWeb3 } = useMoralis();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      await authenticate();
      await enableWeb3({ provider: provider });
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
      if (accounts) navigate("/dashboard/app");
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  return (
    <Web3ModalContext.Provider
      value={{
        connectWallet,
        disconnect,
        account,
      }}
      {...props}
    >
      {props.children}
    </Web3ModalContext.Provider>
  );
};
