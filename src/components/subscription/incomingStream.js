import React, { useEffect, useMemo, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../utils/formatNumber";
import Iconify from "../Iconify";

import { SuperfluidWeb3Context } from "../../context/SuperfluidContext";
import { BigNumberish, ethers } from "ethers";
import { Box } from "@mui/material";
import _ from "lodash";
import AnimatedBalance from "src/superfluid/AnimateBalance";
import { flowDetails } from "src/superfluid";
import { useMoralis } from "react-moralis";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 2),
  color: theme.palette.info.main, 
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.info.dark,
    0
  )} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;
const ANIMATION_MINIMUM_STEP_TIME = 80;

export default function IncommingStream() {
  const supweb3Context = React.useContext(SuperfluidWeb3Context);
  const {user}= useMoralis();
  // const { listOutFlows, totalStreams, flow, getUSDCXBalance } = supweb3Context; 

    const {  getUSDCXBalance } = supweb3Context;

  const [balance, setBalance] = useState(0);
  const [netFlow, setNetFlow] = useState(0);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const FETCH_BALANCE_INTERVAL = 25000;

  const updateBalance = () => {
    getUSDCXBalance(provider, user?.attributes?.ethAddress).then((value) => {
      setBalance(parseFloat(value));
    });
  };

  const updateNetFlow = async () => {
    const result = await flowDetails(user?.attributes?.ethAddress);
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

  return (
    <RootStyle> 
      <IconWrapperStyle>
        <Iconify icon="ant-design:transaction-outlined" width={24} height={24} />
      </IconWrapperStyle> 
      <Typography variant="h3" color="#000">
        <AnimatedBalance value={balance} rate={netFlow}/> 
      </Typography> 
      <Typography variant="body" color="#000" sx={{fontWeight:'bold' }}>
        Superfluid Streams
      </Typography> 
    </RootStyle>
  );
}
