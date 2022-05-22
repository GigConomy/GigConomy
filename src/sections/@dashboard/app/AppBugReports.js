import React, { useEffect, useMemo, useState } from "react";
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
//
import Iconify from "../../../components/Iconify";
import { SuperfluidWeb3Context } from "../../../context/SuperfluidContext";
import { BigNumberish, ethers } from "ethers";
import { Box } from "@mui/material";
import _ from "lodash";
import { useMoralis } from "react-moralis";
import { flowDetails } from "src/superfluid";
import AnimatedBalance from "src/superfluid/AnimateBalance";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.main,
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
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.error.dark,
    0
  )} 0%, ${alpha(theme.palette.error.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

const ANIMATION_MINIMUM_STEP_TIME = 80;

const FETCH_BALANCE_INTERVAL = 25000;   

export default function AppBugReports() {
  const {user} = useMoralis();
  const supweb3Context = React.useContext(SuperfluidWeb3Context);
  const { listOutFlows, totalStreams, flow, getUSDCXBalance } = supweb3Context; 


  const [balance, setBalance] = useState(0);
  const [netFlow, setNetFlow] = useState(0);
  const [childrenLoading, setChildrenLoading] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

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
    // listOutFlows();

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
        <Iconify icon="ic:twotone-unsubscribe" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3" color="#000">
        <AnimatedBalance value={balance} rate={netFlow}/> 
      </Typography>
      <Typography variant="subtitle2" color="#000" sx={{ opacity: 0.72 }}>
        Total Streams
      </Typography>
    </RootStyle>
  );
}
