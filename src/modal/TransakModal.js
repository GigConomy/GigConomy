import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Stack,
  TextField,
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Container,
  Box,
  TextareaAutosize,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import {
  useMoralis,
  useMoralisCloudFunction,
  useMoralisFile,
} from "react-moralis";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
// import { Web3Storage } from "web3.storage";
import { ethers } from "ethers";
import Web3 from "web3";
import axios from "axios";

import { TransakWeb3Context } from "../context/Transak";
import { Hyphen, RESPONSE_CODES, SIGNATURE_TYPES } from "@biconomy/hyphen";

const Input = styled("input")({
  display: "none",
});
function Transak(props) {
  const { Moralis, user } = useMoralis();
  const web3 = new Web3();

  const TransakWeb3context = React.useContext(TransakWeb3Context);
  const { openTransak } = TransakWeb3context;

  return (
    <div>
      <Dialog open={props.op} onClose={props.close} fullWidth>
        <DialogTitle style={{ margin: "auto" }}>
          <h2>Transak</h2>
        </DialogTitle>
        <DialogContent style={{ overflowX: "hidden" }}>
          <div>
            <Box style={{ marginBottom: "20px" }}>
              <Button onClick={() => openTransak()}>Transak</Button>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Transak;
