import React, {
  useState,
  createContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { useMoralis } from "react-moralis";
import { Framework, createSkipPaging } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

import BigNumber from "bignumber.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { gql } from "graphql-request";
import { sfSubgraph, sfApi } from "src/redux/store";
import { toast } from "react-toastify";
import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  TableCell,
  TableRow,
} from "@mui/material";
import moment from "moment";
import { networks } from "src/redux/networks";

import { GetSenderStream } from "../../context/GetSenderStreamContex";
import { SuperfluidWeb3Context } from "src/context/SuperfluidContext";
import { flowDetails } from "src/superfluid";
import AnimatedBalance from "src/superfluid/AnimateBalance";

export const url = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`;
export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
const USDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

const ANIMATION_MINIMUM_STEP_TIME = 80;

function GetSubscriberStream(props) {
  const [isLoadingcon, setIsLoaing] = useState(false);
  const { user } = useMoralis();
  const navigate = useNavigate();

  const supweb3Context = React.useContext(SuperfluidWeb3Context);
  const {  getSubAddress,getUSDCXBalance } = supweb3Context; 

  useEffect(async () => {
    getSubAddress(props.data.subscriberAddress); 
  }, [props]);


  const [balance, setBalance] = useState(0);
  const [netFlow, setNetFlow] = useState(0);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const FETCH_BALANCE_INTERVAL = 25000;

  const updateBalance = () => {
    getUSDCXBalance(provider, props.data.subscriberAddress).then((value) => {
      setBalance(parseFloat(value));
    });
  };

  const updateNetFlow = async () => {
    const result = await flowDetails(props.data.subscriberAddress);
    setNetFlow(parseFloat(ethers.utils.formatEther(result.cfa.netFlow)));
  };
  useEffect(() => {
    const id = setInterval(() => {
      updateBalance();
    }, FETCH_BALANCE_INTERVAL);
    updateBalance();
    updateNetFlow();
    return () => clearInterval(id);
  },[provider]); 

  
  

  if(balance !== undefined){
    return (
      <TableRow>
        <TableCell>
          <List sx={{ pt: 0 }}>
            <ListItem
              button
              //   onClick={() => handleListItemClick()}
            >
              <Avatar
                alt={props.data?.subscriber}
                src={props.data?.subscriberAllData?.Avatar?.url}
              />
              <ListItemText primary={props.data?.subscriber?.slice(0, 10)} />
            </ListItem>
          </List>
        </TableCell>
  
        <TableCell>{props.data?.subscriberAddress?.slice(0, 10)}</TableCell>
        <TableCell><AnimatedBalance value={balance} rate={netFlow}/></TableCell>
  
        <TableCell>
          {moment(props.data.createdAt).format("MMMM Do YYYY")}
        </TableCell>
        <TableCell>{props.data.subscriptionDuration}</TableCell>
      </TableRow>
    );
  } else{
    return (
      <TableRow>
        <TableCell>
          <CircularProgress/>
        </TableCell>
      </TableRow>
    );
  }
}

export default GetSubscriberStream;
