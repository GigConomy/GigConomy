import react, { useEffect } from "react";
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
  TableBody,
  Paper,
} from "@mui/material";
import { useMoralis,useWeb3Transfer ,useMoralisCloudFunction} from "react-moralis"; 
import { useState } from "react";
import { ethers } from "ethers";

function RequestTable({ requestData }) {

  const { user ,Moralis} = useMoralis();
  const [userAddress, setUserAddress]= useState('');
  const [ reqFrom, setReqform]= useState('');
  const { data, isLoading } = useMoralisCloudFunction("getAllUser");  


  const handleSendPayment=async(add)=>{ 
    const allUser = JSON.parse(JSON.stringify(data));
    const u = allUser.filter((e)=>e.username === add.from); 
    u.map(async(e)=>{  
      await Moralis.enableWeb3();
      const options = {
          type: "native",
          amount: Moralis.Units.ETH(add.amount, "18"),
          receiver: e.ethAddress,
          contractAddress: "0x0000000000000000000000000000000000001010",
      }
      let result = await Moralis.transfer(options);  
    }) ;  
  } 
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Token</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requestData && requestData.length == 0 && (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                <h5>No payment requests yet!</h5>
              </TableCell>
            </TableRow>
          )}

          {requestData &&
            requestData.map((request) => (
              <TableRow>
                <TableCell>{request.from}</TableCell>
                <TableCell>{request.to}</TableCell>
                <TableCell>{request.token}</TableCell>
                <TableCell>{request.amount}</TableCell>
                <TableCell>{request.message}</TableCell>
                <TableCell>
                  {request.status == 0 ? "Pending" : "Completed"}
                </TableCell>
                <TableCell>
                  {request.to == user.attributes.username ? (
                    <Button
                      //   color="primary"
                      size="large"
                      //   type="submit"
                      variant="contained"
                      onClick={()=>handleSendPayment(request)}
                      style={{ marginTop: "30px" }}
                    >
                      Pay
                    </Button>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RequestTable;
