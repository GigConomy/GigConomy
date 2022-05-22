  
import React, { useCallback, useEffect, useState } from "react";
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
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import { ethers } from "ethers";
import CircularProgress from "@mui/material/CircularProgress";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 

function OutgoingTab() {
  const { Moralis, user } = useMoralis();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getSubscribtions",
    {
      autoFetch: true,
    }
  );

  const [isUpdated, setIsUpdated] = useState([]);
  const [subscribtions, setsubscribtions] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData();
  }, [data, isUpdated, user]);

   
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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
                <TableCell ># </TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Subscriptions</TableCell>
                <TableCell>Outgoing Streams</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Explore</TableCell>
          </TableRow>
        </TableHead>
        {/* {isLoading && (
          <TableRow>
            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
              <CircularProgress />
            </TableCell>
          </TableRow>
        )} */}
        {/* {subscribtions && subscribtions.length == 0 && ( */}
          <TableRow>
            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
            <h5>No subscribtions created yet!</h5>
            </TableCell>
          </TableRow>
        {/* )} */}

        {/* <TableBody> */}
        {/* {subscribtions &&
          subscribtions.map((list) => {
            return (
              <TableSubBody
                key={list.objectId}
                subs={list} 
              />
            );
          })} */}

        {/* </TableBody> */}
      </Table>
    </TableContainer>
  )
}

export default OutgoingTab