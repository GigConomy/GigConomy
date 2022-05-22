import React, { useState } from "react";
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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import SendPayment from "../pages/SendPayment";
import RequestPayment from "../pages/RequestPayment";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

const Input = styled("input")({
  display: "none",
});
function CreatePaymentModal(props) {
  const { Moralis, user } = useMoralis();
  const [type, setType] = useState("send");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const Payment = Moralis.Object.extend("Payments");
  const payment = new Payment();

  const sendRequestPayment = async (formData) => {
    try {
      setLoading(true);
      payment.set("from", user.attributes.username);
      payment.set("to", formData.to);
      payment.set("token", formData.token);
      payment.set("amount", formData.amount);
      payment.set("message", formData.message);
      payment.set("file", type == "send" ? formData.file : "");
      payment.set("type", type);
      payment.set("status", 0);
      await payment.save();
      setLoading(false);
      toast.success(`Successfully ${type}ed!`);
      props.setIsUpdated(!props.isUpdated);
      props.close();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={props.op} onClose={props.close} fullWidth>
        <DialogContent style={{ overflowX: "hidden", minHeight: "700px" }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={type}
              onChange={handleChange}
            >
              <FormControlLabel
                value="send"
                control={<Radio />}
                label="Send Payment"
              />
              <FormControlLabel
                value="request"
                control={<Radio />}
                label="Request Payment"
              />
            </RadioGroup>
          </FormControl>
          {type == "send" ? (
            <SendPayment onSubmit={sendRequestPayment} loading={loading} />
          ) : (
            <RequestPayment onSubmit={sendRequestPayment} loading={loading} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default CreatePaymentModal;
