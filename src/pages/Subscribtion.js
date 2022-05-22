import { Card, CircularProgress, Grid, Tab, TableBody, Tabs } from "@mui/material";
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

import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Iconify from "src/components/Iconify";
import { Web3Context } from "src/context/Web3Context";
import CreateSubscribtionModal from "src/modal/CreateSubscribtionModal";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Page from "../components/Page";
import { SuperfluidWeb3Context } from "../context/SuperfluidContext";
import IncommingStream from "src/components/subscription/incomingStream";
import Subscribers from "src/components/subscription/subscribers";
import OutgoingStream from "src/components/subscription/outgoinStream";
import OutgoingTab from "../components/subscription/tabs/outgoingTab";
import IncomingTab from "../components/subscription/tabs/incomingTab";
import TableSubView from "src/components/subscription/table/TableView";


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

function Subscription() {
  const { Moralis, account, user } = useMoralis();
  const navigate = useNavigate();
  const web3Context = React.useContext(Web3Context);
  const { connectWallet, web3Auth, address } = web3Context;
  const supweb3Context = React.useContext(SuperfluidWeb3Context);
  const { listOutFlows, totalStreams } = supweb3Context;

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getSubscribtions",
    {
      autoFetch: true,
    }
  );

  const [isUpdated, setIsUpdated] = useState([]);
  const [subscribtions, setsubscribtions] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setData();
  }, [data, isUpdated, user]);

  useEffect(() => {
    listOutFlows();
  });

  async function setData() {
    setLoading(true);
    const subscribtionsdata = await JSON.parse(JSON.stringify(data));
    const s =
      data &&
      subscribtionsdata.filter(
        (sub) => sub?.username == user?.attributes.username
      );
    data && setsubscribtions(s);
    setLoading(false);
  }

  
  useEffect(() => {
    fetch();
  }, [isUpdated, user]);

  return (
    <Page title="Subscriptions |  GigConomy">
      <CreateSubscribtionModal
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
            Subscriptions
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create Subscibtion
          </Button>
        </Stack>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-end"
          mb={2}
        >
          <Button variant="outlined">${totalStreams} Total Streams</Button>
        </Stack>

         
        <Grid container spacing={3} sx={{marginBottom:'20px'}}>
          <Grid item xs={12} sm={6} md={4}>
            <IncommingStream/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Subscribers/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OutgoingStream/>
          </Grid>
        </Grid>


        <Grid item lg={12} md={12} xs={12}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Incoming Streams" {...a11yProps(1)} />
            <Tab label="Outgoing Streams" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TableSubView/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OutgoingTab/>
        </TabPanel>
      </Grid> 
      </Container>
    </Page>
  );
}

export default Subscription;
