import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  CircularProgress,
  Divider,
  Avatar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Label from "../../Label";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import UserListModal from "../UserListModal";
import { SuperfluidWeb3Context } from "../../../context/SuperfluidContext";
import { flowDetails } from "src/superfluid"; 
import { ethers } from "ethers";
import AnimatedBalance from "src/superfluid/AnimateBalance";



function TableSubBody(props) {
  const navigate = useNavigate();
  const {user} = useMoralis();
  const supweb3Context = React.useContext(SuperfluidWeb3Context);  
  const {  getUSDCXBalance } = supweb3Context;
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [subscribtions, setsubscribtions] = useState([]);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getSubscribers",
    { autoFetch: true }
  ); 

  async function setData() {
    setLoading(true);
    const subscribtionsdata = await JSON.parse(JSON.stringify(data));  
    const s =
      data &&
      subscribtionsdata.filter(
        (sub) => sub?.subscriptionId ==  props.subs.objectId
      );
    data && setsubscribtions(s);
    setLoading(false);
  }

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


  useEffect(()=>{
    setData(); 
  },[data,isLoading]);

  useEffect(()=>{
    fetch();
  },[]) 
 
  return (
    <TableBody>
     
      <ToastContainer />
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{alignItems:'center',display:'flex',borderBottom:'0px'}}>
        <Avatar alt={props.subs.title} src={props.subs?.image?.url}  />
        <span className="ml-2">  {props.subs.title}</span>
        </TableCell>
        <TableCell> 10</TableCell>
        <TableCell> <AnimatedBalance value={balance} rate={netFlow}/> </TableCell>
        <TableCell>
          <Label variant="ghost" color="success">
            Active
          </Label>
        </TableCell>
        <TableCell>
          <TableCell  style={{alignItems:'center',display:'flex',borderBottom:'0px'}}>
            <Stack direction="row" sx={{ padding: "0" }}>
              <IconButton aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
              <IconButton aria-label="delete">
                <EditIcon color="primary" />
              </IconButton>
            </Stack>
          </TableCell>
        </TableCell>
        <TableCell>
          <Button
            size="large"
            variant="contained"
            to={`/subscribtion/${props.subs.objectId}`}
            onClick={() => {
              navigate(`/subscribtion/${props.subs.objectId}`, {
                state: props.subs,
              });
            }}
          >
            View
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Stack>
                <Typography variant="h4" gutterBottom component="h2">
                  Product & Service
                </Typography>{" "}
                <Typography variant="h6" gutterBottom component="h2">
                   {props.subs.productorservice}
                </Typography> 
                <Typography
                  variant="h4"
                  gutterBottom
                  component="h2"
                  color="primary"
                >
                  Subscription Packages
                </Typography>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="flex-start"
              >
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>1 Month</TableCell>
                      <TableCell>3 Months</TableCell>
                      <TableCell>6 Months</TableCell>
                      <TableCell>12 Months</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>{props.subs.onemonthPrice} <span className="text-primary">USDCx</span></TableCell>
                      <TableCell>{props.subs.threemonthPrice} <span className="text-primary">USDCx</span></TableCell>
                      <TableCell>{props.subs.sixmonthPrice} <span className="text-primary">USDCx</span></TableCell>
                      <TableCell>{props.subs.twelvemonthPrice} <span className="text-primary">USDCx</span></TableCell> 
                    </TableRow>
                  </TableBody>
                </Table>
              </Stack>
              <UserListModal  list={subscribtions} /> 
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default TableSubBody;
