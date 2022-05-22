import { Card, TableBody } from "@mui/material";
import {
  Button,
  Container,
  Stack,
  Box,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { toast } from "react-toastify";
import Iconify from "src/components/Iconify";
import { Web3Context } from "src/context/Web3Context";
import { factoryAbi, factoryAddress } from "src/contracts/contract";
import CreatePaymentModal from "src/modal/CreatePaymentModal";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Page from "../components/Page";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SendTable from "src/components/payments/SendTable";
import RequestTable from "src/components/payments/RequestTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

function SendRequest() {
  const { Moralis, account, user } = useMoralis();
  const web3Context = React.useContext(Web3Context);
  const { connectWallet, web3Auth, address } = web3Context;

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getPayments",
    { autoFetch: true }
  );
  const [sendData, setSendData] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const [isUpdated, setIsUpdated] = useState([]);
  const [balance, setBalance] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getWalletBalence = () => {
    (async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        `https://twilight-icy-glitter.matic-testnet.quiknode.pro/${process.env.REACT_APP_QUICKNODE_KEY}/`
      );
      const bal = await provider.getBalance(
        user?.attributes.ethAddress,
        "latest"
      );
      console.log(bal, "balance");
      setBalance(parseFloat(ethers.utils.formatEther(bal)).toFixed(2));
    })();
  };

  useEffect(() => {
    // getWalletBalence();
    setData();
  }, [data, isUpdated, user]);

  useEffect(() => {
    fetch();
  }, [isUpdated, user]);

  async function setData() {
    const paymentData = await JSON.parse(JSON.stringify(data));
    const sended =
      paymentData &&
      paymentData.filter(
        (pay) =>
          pay.type == "send" &&
          (pay.from == user?.attributes.username ||
            pay.to == user?.attributes.username)
      );
    const requested =
      paymentData &&
      paymentData.filter(
        (pay) =>
          pay.type == "request" &&
          (pay.from == user?.attributes.username ||
            pay.to == user?.attributes.username)
      );
     
    setSendData(sended);
    setRequestData(requested);
  }

  return (
    <Page title="Payments |  GigConomy">
      <CreatePaymentModal
        open={handleClickOpen}
        close={handleClose}
        op={open}
        acc={address}
        setIsUpdated={setIsUpdated}
        isUpdated={isUpdated}
      />
      <Container pl={0} pr={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" gutterBottom>
            Send/Request Payment
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create Send/Request
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-end"
          mb={2}
        >
          <Button variant="outlined">
            <img
              src="/images/logo1.png"
              width={20}
              height={20}
              alt=""
              style={{ marginRight: "10px" }}
            />{" "}
            {balance} MATIC
          </Button>
        </Stack>

        <Stack>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Send" {...a11yProps(0)} />
            <Tab label="Request" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Card>
              <SendTable sendData={sendData} />
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card>
              <RequestTable requestData={requestData} />
            </Card>
          </TabPanel>
        </Stack>
      </Container>
    </Page>
  );
}

export default SendRequest;
