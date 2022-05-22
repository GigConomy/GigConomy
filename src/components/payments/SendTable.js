import react from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useMoralis } from "react-moralis";

function SendTable({ sendData }) {
  const { user } = useMoralis();
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
          </TableRow>
        </TableHead>
        <TableBody>
          {sendData && sendData.length == 0 && (
            <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                <h5>No send requests yet!</h5>
              </TableCell>
            </TableRow>
          )}
          {sendData &&
            sendData.map((send) => (
              <TableRow>
                <TableCell>{send.from}</TableCell>
                <TableCell>{send.to}</TableCell>
                <TableCell>{send.token}</TableCell>
                <TableCell>{send.amount}</TableCell>
                <TableCell>{send.message}</TableCell>
                <TableCell>
                  {send.status == 0
                    ? "Pending"
                    : send.status == 1 && send.from == user.attributes.useename
                    ? "Completed"
                    : "Received"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SendTable;
