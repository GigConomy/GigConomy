import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { SocialIcon } from "react-social-icons";
import moment from "moment";
import Button from "@mui/material/Button";
import "../ProductDetail/ProductDetail.css";
import { useMoralisCloudFunction } from "react-moralis";
import { useMoralis } from "react-moralis";
import { SuperfluidWeb3Context } from "../context/SuperfluidContext";
import { ethers } from "ethers";
import { getBalanceOfUSDx } from "src/superfluid/transferFluid";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Label from "src/components/Label";
import { Image } from "@mui/icons-material";

export default function SubscribtionDetails() {
  const params = useParams();
  const [detailsData, setDetailData] = useState();
  const { state } = useLocation();
  const { user, Moralis } = useMoralis();
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getSubscribtions",
    { autoFetch: true }
  );
  const web3Context = React.useContext(SuperfluidWeb3Context);
  const { createNewFlow, isLoadingcon } = web3Context;
  const supweb3Context = React.useContext(SuperfluidWeb3Context);
  const { listOutFlows, totalStreams } = supweb3Context;

  useEffect(() => {
    listOutFlows();
  });

  const [flowRate, setFlowRate] = useState("");

  const [bal, setBal] = useState("");
  const [subs, setSubs] = useState();
  const [displayRate, setDisplayRate] = useState();

  const days = 30;

  function calFlowRate(amt) {
    if (typeof Number(amt) !== "number" || isNaN(Number(amt)) === true) {
      throw new Error("calculate a flowRate based on a number");
    } else if (typeof Number(amt) === "number") {
      const monthlyAmount = ethers.utils.parseEther(amt.toString());
      const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / days);
      return calculatedFlowRate;
    }
  }

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  const handleSubscription = (e) => {
    const frate = calFlowRate(e.target.value);
    const displayRate = calculateFlowRate(frate);
    setDisplayRate(displayRate);
    setFlowRate(frate);
  };

  const updateBalance = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    getBalanceOfUSDx(signer, user?.attributes?.ethAddress).then((value) => {
      setBal(parseFloat(value));
    });
  };

  useEffect(() => {
    fetch();
    updateBalance();
  }, [user]);

  useEffect(() => {
    setData();
  }, [data]);

  async function setData() {
    const subscribtionsdata = await JSON.parse(JSON.stringify(data));
    const s =
      data && subscribtionsdata.filter((sub) => sub.objectId == params?.id);
    s && setDetailData(s[0]);
  }

  const url = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`;
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

  async function createSuperfluid(recipient) {
  }

  const SubPackage = Moralis.Object.extend("Subscriber");
  const subPackage = new SubPackage();

  const handleSubscribe = async (detailsData) => {
    if (user) {
      try {
        await createNewFlow(
          detailsData?.ethAddress,
          flowRate,
          detailsData,
          displayRate
        );
      } catch (error) {
        toast.error("Stream is Already exiest! or not enough USDCx");
      }
    } else {
      toast.info("Please connect wallet !");
      return;
    }
  };
 
  return (
    <>
      <div className="book-details">
        <div className="container"> 
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-paddind margin-bottom">
                <div className="img-bx">
                  <div className="main-img">
                    <img src={detailsData?.image?.url} alt="Imageeee" />
                  </div>
                  <ul className="slide-img mt-4">
                  <Button
                      style={{ fontSize: "24px" }}
                      className="px-4"
                      variant="outlined"
                      component={RouterLink}
                      to={`/${detailsData?.username}`}
                    >
                      Contact
                    </Button>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12 p-3" style={{background:'#fff'}}> 
                  <h3 style={{borderBottom:'2px solid #6b46c1',marginBottom:'10px', padding:'10px'}}>{detailsData?.title}</h3>
                   <div className="d-flex pt-4" style={{justifyContent:'space-around'}}>
                   <Card sx={{ width: 200, background: "aliceblue" }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          1 Month
                        </Typography>
                        <Typography
                          variant="h4"
                          color="primary"
                          className="p-0"
                        >
                          {detailsData?.onemonthPrice} USDCx
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ width: 200, background: "aliceblue" }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          3 Months
                        </Typography>
                        <Typography
                          variant="h4"
                          color="primary"
                          className="p-0"
                        >
                          {detailsData?.threemonthPrice} USDCx
                        </Typography>
                      </CardContent>
                    </Card>
                   </div>

                   <div className="d-flex pt-4" style={{justifyContent:'space-around'}}>
                   <Card sx={{ width: 200, background: "aliceblue" }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          6 Months
                        </Typography>
                        <Typography
                          variant="h4"
                          color="primary"
                          className="p-0"
                        >
                          {detailsData?.sixmonthPrice} USDCx
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card sx={{ width: 200, background: "aliceblue" }}>
                      <CardContent>
                        <Typography variant="h5" component="div">
                          12 Months
                        </Typography>
                        <Typography
                          variant="h4"
                          color="primary"
                          className="p-0"
                        >
                          {detailsData?.twelvemonthPrice} USDCx
                        </Typography>
                      </CardContent>
                    </Card>
                   </div> 
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 no-paddind hidden-xs">
                <div className="text-center user-card">
                  <div className="img-bx">
                    <img
                      src={detailsData?.avatar ? detailsData?.avatar 
                          : "http://images.studentdesk.in/img/icons/large/defaultuser.png"
                      }
                      alt={detailsData?.username}
                      className="img-responsive"
                    />
                  </div>
                  <h4 className="">{detailsData?.username}</h4>
                  <h5> Balance : {bal} USDCx</h5>
                  <Box sx={{ minWidth: 120, margin: "10px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Subscription
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subs}
                        label="Subscription"
                        onChange={handleSubscription}
                      >
                        <MenuItem value={detailsData?.onemonthPrice}>
                          1 Month
                        </MenuItem>
                        <MenuItem value={detailsData?.threemonthPrice}>
                          3 Months
                        </MenuItem>
                        <MenuItem value={detailsData?.sixmonthPrice}>
                          6 Months
                        </MenuItem>
                        <MenuItem value={detailsData?.twelvemonthPrice}>
                          12 Months
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <p className="m-0">
                    {" "}
                    FlowRate USDCx {displayRate ? displayRate.toFixed(2) : 0}
                  </p>
                  <div className="btn-bx">
                    <Button
                      style={{ fontSize: "24px" }}
                      className="px-4"
                      variant="outlined"
                      onClick={() => handleSubscribe(detailsData)}
                    >
                      {isLoadingcon ? "Processing..." : "Subscribe"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </div> 
      </div>
    </>
  );
}
