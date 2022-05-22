import React, { useState, createContext, useEffect, useCallback } from "react";
import { POLYGON } from '../network/Network';

import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import {  AgreementAddress, AgreementContractAbi, } from "src/contracts/config";

export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {
    const [address, setAddress] = useState('');
    const [accounts, setAccount] = useState(''); 
    const { Moralis, authenticate, account, isAuthenticated } = useMoralis();

    const web3Auth = async () => {
        authenticate({
            provider: 'web3Auth',
            chainId: Moralis.Chains.POLYGON_MUMBAI,
            clientId: process.env.REACT_APP_AUTH_KEY,
            appLogo: '/images/trustifiednetwork-logo.png',
            loginMethodsOrder: ["google", "facebook", "twitter", "reddit", "github", "linkedin", "email_passwordless"]
        });
    }


    useEffect(() => {
        if (isAuthenticated) {
            setAccount(account);
        }
        checkIfWalletIsConnected(); 
    }, [isAuthenticated, account])


    const checkIfWalletIsConnected = useCallback(async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!")
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account: ", account);

            // Switch network if it's not the correct chain
            try {
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: POLYGON.chainId }],
                });
                setAddress(accounts[0]);
            } catch (err) {
                console.log(err);
            }

        } else {
            console.log("No authorized account found");
        }
    }, [address]);





    const connectWallet = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Please install the Metamask Extension!");
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address: ", accounts[0]);

            await ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: POLYGON.chainId }],
            });

            setAddress(accounts[0]);

        } catch (err) {
            console.log(err);
            if (err.code === 4902) {
                try {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    await ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [POLYGON],
                    });
                    setAddress(accounts[0]);
                } catch (err) {
                    alert(err.message);
                }
            }
        }
    }





    return (
        <Web3Context.Provider
            value={{
                connectWallet,
                web3Auth,
                address,
                accounts, 
            }}
            {...props}
        >
            {props.children}
        </Web3Context.Provider>
    );
}
