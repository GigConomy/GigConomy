import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import {
  Stack,
  TextField,
  FormControl,
  Box,
  InputLabel,
  CircularProgress,
  DialogTitle,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { SuperfluidWeb3Context } from "../../context/SuperfluidContext";
import GetSubscriberStream from "./GetSubscriberStream";

function UserListModal(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const supweb3Context = React.useContext(SuperfluidWeb3Context); 

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUserList = () => {
    // console.log("open");
  };

  useEffect(() => {
   
  }, [props.list]);
 
  return (
    <Stack sx={{ "& button": { my: 2 } }}>
      <div className="action-button-container">
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth="lg"
        >
          <DialogTitle>
            Subscriber List
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "error",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent style={{ overflowX: "hidden" }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>

                  <TableCell>Wallet</TableCell>
                  <TableCell>Streams</TableCell>
                  <TableCell>Subsription Date</TableCell>
                  <TableCell>Package</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.list && props.list.length == 0 && (
                  <TableRow>
                    <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                      <h5>No subscribers available!</h5>
                    </TableCell>
                  </TableRow>
                )}
                {props.list &&
                  props.list.map((sub) => {
                    return (
                      <GetSubscriberStream data={sub} key={sub.objectId}/>
                    );
                  })}
              </TableBody>
            </Table>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="outlined"
              className="btn btn-danger text-center"
            >
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
        <LoadingButton
          size="large"
          onClick={handleOpen}
          variant="contained"
          loadingIndicator={<CircularProgress color="primary" size={24} />}
        >
          Subscribers List
        </LoadingButton>
      </div>
    </Stack>
  );
}

export default UserListModal;
