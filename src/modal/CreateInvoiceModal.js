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
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
// import { Web3Storage } from "web3.storage";
import {
  chainLinkPriceFeed,
  RandomNumberGeneratorContract,
} from "../contracts/contract";
import chainlinkABI from "../abi/chinlinkPrice.json";
import { ethers } from "ethers";
import chainlinkVRFABI from "../abi/chainlinkVRF.json";

const Input = styled("input")({
  display: "none",
});
function CreateInvoiceModal(props) {
  const { Moralis, user } = useMoralis();
  const [type, setType] = useState("send");
  const [loading, setLoading] = useState(false);
  const [selectedToken, setToken] = useState("");
  const [usdValue, setUsdValue] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const handleChange = (event) => {
    setType(event.target.value);
  };

  window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const priceFeed = new ethers.Contract(
    chainLinkPriceFeed,
    chainlinkABI,
    signer
  );
  const randomNumberCon = new ethers.Contract(
    RandomNumberGeneratorContract,
    chainlinkVRFABI.abi,
    signer
  );

  // async function caller() {
  //   await randomNumberCon.getRandomNumber(1000);
  //   const randNo = await randomNumberCon.getRandom();
  //   console.log(randNo);
  //   console.log(parseInt(randNo._hex, 16));
  //   setRandomNumber(parseInt(randNo._hex, 16));
  // }

  useEffect(() => {
    getPrice();
  }, [selectedToken]);

  async function getPrice() { 
    if (selectedToken == "MATIC") {
      let [price, decimals] = await priceFeed.getLatestPriceForMatic();
      price = Number(price / Math.pow(10, decimals)).toFixed(2);
      setUsdValue(price);
    } else {
      let [price, decimals] = await priceFeed.getLatestPriceForEth();
      price = Number(price / Math.pow(10, decimals)).toFixed(2);
      setUsdValue(price);
    }
  }

  const Invoice = Moralis.Object.extend("invoice");
  const invoice = new Invoice();

  const formik = useFormik({
    initialValues: {
      invoiceNum: "",
      cdate: "",
      ddate: "",
      description: "",
      quantity: "",
      price: "",
      token: "",
      network: "",
      name: "",
      address: "",
      taxName: "",
      taxPercentage: "",
      note: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        await randomNumberCon.getRandomNumber(1000);
        const randNo = await randomNumberCon.getRandom();
        setLoading(true);
        const formData = {
          invoiceNumber: parseInt(randNo._hex, 16),
          created: values.cdate,
          dueDate: values.ddate,
          description: values.description,
          quantity: values.quantity,
          price: values.price,
          token: selectedToken,
          network: values.network,
          name: values.name,
          address: values.address,
          taxName: values.taxName,
          taxPercentage: values.taxPercentage,
          note: values.note,
        };
        const files = makeFileObjects(formData);
        await storage(files, formData);
        props.setIsUpdated(!props.isUpdated);
        resetForm();
        setLoading(false);
        props.close();
        toast.success("Successfuly send Invoice!");
      } catch (error) {
        setLoading(false);
        console.log(error);
        alert("Something went wrong!");
      }
    },
  });

  function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the

    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return process.env.REACT_APP_WEB3_STORAGE_API_KEY;
  }

  function makeStorageClient() {
    // return new Web3Storage({ token: getAccessToken() });
  }

  function makeFileObjects(data) {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!

    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    const files = [new File([blob], "Invoice_Details.json")];
    return files;
  } 

  async function storage(files, formData) {
    // const client = makeStorageClient();
    // const cid = await client.put(files);
    invoice.set("invoiceNumber", formData.invoiceNumber);
    invoice.set("created", formData.created);
    invoice.set("dueDate", formData.dueDate);
    invoice.set("description", formData.description);
    invoice.set("quantity", formData.quantity);
    invoice.set("price", formData.price);
    invoice.set("token", formData.token);
    invoice.set("network", formData.network);
    invoice.set("name", formData.name);
    invoice.set("address", formData.address);
    invoice.set("taxName", formData.taxName);
    invoice.set("taxPercentage", formData.taxPercentage);
    invoice.set("note", formData.note);
    // invoice.set(
    //   "storageURI",
    //   `https://${cid}.ipfs.dweb.link/Invoice_Details.json`
    // );
    invoice.set("username", user?.attributes.username);
    invoice.set("ethAddress", user?.attributes.ethAddress);
    invoice.set(
      "avatar",
      user?.attributes?.Avatar?.url ? user?.attributes?.Avatar?.url : ""
    );
    await invoice.save();
  }

  return (
    <div>
      <Dialog open={props.op} onClose={props.close} fullWidth>
        <DialogContent style={{ overflowX: "hidden" }}>
          <div>
            <Box style={{ marginBottom: "20px" }}></Box>
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
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <label style={{ color: "grey" }}>Created Date :</label>

                    <TextField
                      fullWidth
                      label=" "
                      name="cdate"
                      id="cdate"
                      type="date"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("cdate")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label style={{ color: "grey" }}>Due Date :</label>

                    <TextField
                      fullWidth
                      label=" "
                      name="ddate"
                      id="ddate"
                      type="date"
                      required
                      {...formik.getFieldProps("ddate")}
                    />
                  </Grid>
                </Grid>
                <label style={{ marginBottom: "-1vw", color: "grey" }}>
                  Product/Service Details :
                </label>
                <TextareaAutosize
                  fullWidth
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Description"
                  name="description"
                  id="description"
                  type="text"
                  required
                  style={{
                    // width: "100%",
                    width: "100%",
                    marginTop: "20px",
                    padding: "10px 10px 0px 10px",
                    borderColor: "#e0e0e0",
                  }}
                  {...formik.getFieldProps("description")}
                />

                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Quantity"
                      name="quantity"
                      id="quantity"
                      type="number"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("quantity")}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Price"
                      name="price"
                      id="price"
                      type="number"
                      required
                      {...formik.getFieldProps("price")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <FormControl
                      fullWidth
                      style={{
                        paddingRight: "2vw",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Token
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="token"
                        label="Token"
                        {...formik.getFieldProps("token")}
                        value={selectedToken}
                        onChange={(e) => {
                          setToken(e.target.value);
                        }}
                      >
                        <MenuItem value="ETH">ETH</MenuItem>
                        <MenuItem value="MATIC">MATIC</MenuItem>
                        <MenuItem value="USDT">USDT</MenuItem>
                        <MenuItem value="USDC">USDC</MenuItem>
                      </Select>
                    </FormControl>
                    {(selectedToken == "MATIC" || selectedToken == "ETH") && (
                      <FormHelperText
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        1 {selectedToken} = {usdValue} USD
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Network
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="network"
                        label="Network"
                        {...formik.getFieldProps("network")}
                      >
                        <MenuItem value="ethereum">Ethereum</MenuItem>
                        <MenuItem value="polygon">Polygon</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <label style={{ marginBottom: "-1vw", color: "grey" }}>
                  Customer Details :
                </label>
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      id="name"
                      type="text"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("name")}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      id="address"
                      type="text"
                      required
                      {...formik.getFieldProps("address")}
                    />
                  </Grid>
                </Grid>
                <label style={{ marginBottom: "-1vw", color: "grey" }}>
                  Tax Details :
                </label>
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Tax Name"
                      name="taxName"
                      id="taxName"
                      type="text"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("taxName")}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="Tax Pescentage"
                      name="taxPercentage"
                      id="taxPercentage"
                      type="number"
                      required
                      {...formik.getFieldProps("taxPercentage")}
                    />
                  </Grid>
                </Grid>
              </Stack>
              <TextareaAutosize
                fullWidth
                aria-label="empty textarea"
                placeholder="Note"
                minRows={3}
                style={{
                  // width: "100%",
                  width: "100%",
                  marginTop: "20px",
                  padding: "10px 10px 0px 10px",
                  borderColor: "#e0e0e0",
                }}
                {...formik.getFieldProps("note")}
              />
              <DialogActions>
                <Grid container justifyContent="center">
                  <Button
                    //   color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={loading}
                  >
                    {loading ? "Creating Invoice..." : "Create Invoice"}
                  </Button>
                </Grid>
              </DialogActions>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default CreateInvoiceModal;
