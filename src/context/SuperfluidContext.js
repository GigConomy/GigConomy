import React, { useState, createContext, useEffect, useCallback } from "react";

import { useMoralis } from "react-moralis";
import { Framework, createSkipPaging } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

import BigNumber from "bignumber.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { gql } from "graphql-request";
import { networks } from "../redux/networks";
import { sfSubgraph, sfApi } from "../redux/store";
import { toast } from "react-toastify";
import {Daix} from "../contracts/Daix";
 

export const SuperfluidWeb3Context = createContext(undefined);

export const url = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`;
export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const USDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";


const searchByAddressDocument = gql`
  query Search($addressId: ID, $addressBytes: Bytes) {
    tokensByAddress: tokens(where: { id: $addressId, isSuperToken: true }) {
      id
      symbol
      name
      isListed
    }
    tokensByUnderlyingAddress: tokens(
      where: { isSuperToken: true, underlyingAddress: $addressBytes }
    ) {
      id
      symbol
      name
      isListed
    }
    accounts(where: { id: $addressId }) {
      id
    }
  }
`;

export const SuperfluidWeb3ContextProvider = (props) => {
  const [isLoadingcon, setIsLoaing] = useState(false);
  const { user,Moralis } = useMoralis();
  const navigate = useNavigate();
  const [totalStreams, setTotalStreams] = useState(0);
  const [flow, setFlow] = useState();
  const [subAddress,setSubAddress]= useState("");
  const [subTotal , setSubTotal ] = useState(0);
  const [subflow, setSubFlow] = useState();


const getSubAddress=(add)=>{
  setSubAddress(add);
}

 async function getUSDCXBalance(
  provider ,
  subAddress, 
) {
  const signer = provider.getSigner(subAddress);
  const contract = new ethers.Contract(USDCx, Daix, signer);
  let result = await contract.balanceOf(subAddress);
  return ethers.utils.formatEther(result);
}

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();

  // const queryData = networks.map((network) =>
  //   sfSubgraph.useCustomQuery({
  //     chainId: network.chainId,
  //     document: searchByAddressDocument,
  //     variables: {
  //       addressId: user?.attributes?.ethAddress?.toLowerCase(),
  //       addressBytes: user?.attributes?.ethAddress?.toLowerCase(),
  //     },
  //   })
  // );

  // const subQueryData = networks.map((network) =>
  //   sfSubgraph.useCustomQuery({
  //     chainId: network.chainId,
  //     document: searchByAddressDocument,
  //     variables: {
  //       addressId: subAddress.toLowerCase(),
  //       addressBytes: subAddress.toLowerCase(),
  //     },
  //   })
  // );
  // const subFetchStream = sfSubgraph.usePrefetch("streams");
  // subFetchStream({
  //   chainId: networks[0].chainId,
  //   filter: {
  //     sender: queryData[0].currentData?.accounts[0]?.id,
  //   },
  // }); 

  // const prefetchStreamsQuery = sfSubgraph.usePrefetch("streams");
  // prefetchStreamsQuery({
  //   chainId: networks[0].chainId,
  //   filter: {
  //     receiver: queryData[0].currentData?.accounts[0]?.id,
  //   },
  // });

  // const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
  //   chainId: networks[0].chainId,
  //   filter: {
  //     receiver: queryData[0].currentData?.accounts[0]?.id,
  //   },
  // });

  // const outgoingStreamsQuery = sfSubgraph.useStreamsQuery({
  //   chainId: networks[0].chainId,
  //   filter: { 
  //     sender: subAddress,
  //   },
  // });

  // const incomingStreamsQuery = sfSubgraph.useStreamsQuery({
  //   chainId: networks[0].chainId,
  //   filter: { 
  //     receiver: user?.attributes?.ethAddress,
  //   },
  // });

  async function outgoingFlows() {
    // const chainId = await window.ethereum.request({ method: "eth_chainId" });
    // const sf = await Framework.create({
    //   chainId: Number(chainId),
    //   provider: provider,
    // });
    // const flows = await sf.cfaV1.getAccountFlowInfo({
    //   superToken: USDCx,
    //   account: subAddress,
    //   providerOrSigner: signer,
    // }); 

    // setSubFlow(
    //   outgoingStreamsQuery.data?.data[
    //     outgoingStreamsQuery.data?.data.length - 1
    //   ]
    // );

    function calculateStream(flowRate) {
      const stream = new BigNumber(flowRate * (86400 * 30)).shiftedBy(-18);
      return stream.toFixed(2);
    }
    function toPositive(n) {
      if (n < 0) {
        n = n * -1;
      }
      return n;
    }
    // setSubTotal(toPositive(calculateStream(flows.flowRate)));
  }

  async function createNewFlow(recipient, flowRate, details, displayRate) {
    setIsLoaing(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const SubPackage = Moralis.Object.extend("Subscriber");
    const subPackage = new SubPackage();
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    try {
      const sf = await Framework.create({
        chainId: Number(chainId),
        provider: provider,
      });
      const createFlowOperation = sf.cfaV1.createFlow({
        flowRate: flowRate,
        receiver: recipient,
        superToken: USDCx,
        // userData?: string
      });

      const result = await createFlowOperation.exec(signer);

      let dd;
      if (displayRate.toFixed(2) == details.onemonthPrice) {
        dd = "1 Month";
      } else if (displayRate.toFixed(2) == details.threemonthPrice) {
        dd = "3 Months";
      } else if (displayRate.toFixed(2) == details.sixmonthPrice) {
        dd = "6 Months";
      } else if (displayRate.toFixed(2) == details.twelvemonthPrice) {
        dd = "12 Months";
      } else {
      }
      subPackage.set("subscriptionDuration", dd);
      subPackage.set("subscriptionId", details.objectId);
      subPackage.set("creator", details.username);
      subPackage.set("subscriber", user.attributes.username);
      subPackage.set("subscriberAddress", user.attributes.ethAddress);
      subPackage.set("subscriberAvatar", user.attributes.Avatar);
      subPackage.set("subscriberAllData", user);
      await subPackage.save(); 
      setIsLoaing(false);
      alert(`Congrats - you've just created a money stream!
      View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}`);
      toast.success("Successfully Subscribe!");
      navigate("/dashboard/app");
    } catch (error) {
      toast.error("Something want wrong!");
      setIsLoaing(false);  
      console.error(error);
    }
  }

  async function listOutFlows() { 
    // const chainId = await window.ethereum.request({ method: "eth_chainId" });
    // const sf = await Framework.create({
    //   chainId: Number(chainId),
    //   provider: provider,
    // });
    // const flows = await sf.cfaV1.getAccountFlowInfo({
    //   superToken: USDCx,
    //   account: user?.attributes?.ethAddress,
    //   providerOrSigner: signer,
    // }); 

    // setFlow(
    //   incomingStreamsQuery.data?.data[
    //     incomingStreamsQuery.data?.data.length - 1
    //   ]
    // );

    function calculateStream(flowRate) {
      const stream = new BigNumber(flowRate * (86400 * 30)).shiftedBy(-18);
      return stream.toFixed(2);
    }
    function toPositive(n) {
      if (n < 0) {
        n = n * -1;
      }
      return n;
    }
    // setTotalStreams(toPositive(calculateStream(flows.flowRate)));
  }

  return (
    <SuperfluidWeb3Context.Provider
      value={{
        getSubAddress,
        outgoingFlows,
        getUSDCXBalance,
        subTotal,
        subflow,
        createNewFlow,
        isLoadingcon,
        listOutFlows,
        totalStreams,
        flow, 
      }}
      {...props}
    >
      {props.children}
    </SuperfluidWeb3Context.Provider>
  );
};
