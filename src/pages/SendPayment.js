import React, { useEffect } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Dropdown, InputGroup, DropdownButton } from "react-bootstrap";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { useMoralis } from "react-moralis";
import { useFormik } from "formik";
import { Biconomy } from "@biconomy/mexa";
import web3 from "web3";
import { biconomyAddress } from "../contracts/config";
import { toast } from "react-toastify";

// const Input = styled("input")({
//   display: "none",
// });

export default function SendPayment(props) {
  const { Moralis } = useMoralis();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [fileUrl, setFileUrl] = React.useState("");

  const handleChange = (event, val) => {
    setValue(val); 
  };

  const handleChangeform = (event) => {
    setAge(event.target.value);
  };

  async function onChange(e) {
    const data = e.target.files[0];
    try {
      const file = new Moralis.File("file.json", data);
      const url = await file.saveIPFS();
      setFileUrl(url._ipfs);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const formik = useFormik({
    initialValues: {
      to: "",
      token: "",
      amount: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = {
        to: values.to,
        token: values.token,
        amount: values.amount,
        message: values.message,
        file: fileUrl,
      };
      props.onSubmit(formData);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        // marginTop: "100px",
      }}
    >
      <Stack spacing={3}>
        <TextField
          fullWidth
          label="To : @username"
          name="to"
          id="to"
          type="text"
          {...formik.getFieldProps("to")}
          //   onChange={titleHandler}
          // value={title}
          //   {...formik.getFieldProps("title")}
          //   error={Boolean(formik.touched.title && formik.errors.title)}
          //   helperText={formik.touched.title && formik.errors.title}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Token</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="token"
              label="Token"
              {...formik.getFieldProps("token")}
            >
              <MenuItem value="MATIC">MATIC</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="XRP">XRP</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          fullWidth
          label="Ammount"
          name="amount"
          id="amount"
          {...formik.getFieldProps("amount")}
          //   onChange={titleHandler}
          // value={title}
          //   {...formik.getFieldProps("title")}
          //   error={Boolean(formik.touched.title && formik.errors.title)}
          //   helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          name="message"
          aria-label="empty textarea"
          id="message"
          type="text"
          label="Message"
          {...formik.getFieldProps("message")}
        />

        <div className="d-create-file">
          <label
            htmlFor="files"
            id="get_file"
            name="Asset"
            className="btn-main"
            style={{ backgroundColor: "#6b46c1", fontSize: "16px" }}
          >
            Attatch Document
          </label>
          <input
            id="files"
            onChange={onChange}
            style={{ display: "none" }}
            type="file"
          />
        </div>

        {/* ----------------------------------------------- */}
      </Stack>
      <DialogActions>
        <Grid container justifyContent="center">
          <Button
            size="large"
            type="submit"
            variant="contained"
            style={{ marginTop: "30px" }}
            disabled={props.loading}
          >
            {props.loading ? "Sending..." : "Send"}
          </Button>
        </Grid>
      </DialogActions>
    </form>
  );
}
