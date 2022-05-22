import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import * as React from "react";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
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
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { padding, style } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Fab from "@mui/material/Fab";
import { Dropdown, InputGroup, DropdownButton } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import SendPayment from "./SendPayment";
import RequestPayment from "./RequestPayment";

const Input = styled("input")({
  display: "none",
});

// dropdown and payment token

// dropdown and payment token

export default function Payment() {
  const [age, setAge] = React.useState("");

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, val) => {
    setValue(val); 
  };

  const handleChangeform = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ marginBottom: "60px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          //   aria-label="basic tabs example"
        >
          <Tab label="Send" />
          <Tab label="Request" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SendPayment />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <RequestPayment />
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
