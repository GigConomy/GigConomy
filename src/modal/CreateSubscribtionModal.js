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

const Input = styled("input")({
  display: "none",
});
function CreateSubscribtionModal(props) {
  const { Moralis, user } = useMoralis();
  const { saveFile } = useMoralisFile();
  const [type, setType] = useState("send");
  const [loading, setLoading] = useState(false);
  const [isUploading, setUploading] = useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const [fileUrl, setFileUrl] = useState();

  const Subscribtions = Moralis.Object.extend("subscribtions");
  const subscribtion = new Subscribtions();

  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getProducts",
    { autoFetch: true }
  );

  useEffect(() => {
    setProducts();
  }, [data, props.op]);

  useEffect(() => {
    fetch();
  }, [props.op]);

  async function setProducts() {
    const product = await JSON.parse(JSON.stringify(data));
    const products =
      product &&
      product !== null &&
      product.filter((prod) => user.attributes.username == prod.user?.username);
    setUserProducts(products);
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      productorservice: "",
      token: "",
      network: "",
      onemonthPrice: "",
      threemonthPrice: "",
      sixmonthPrice: "",
      twelvemonthPrice: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const formData = {
          title: values.title,
          productorservice: values.productorservice,
          image: fileUrl,
          token: values.token,
          network: values.network,
          onemonthPrice: values.onemonthPrice,
          threemonthPrice: values.threemonthPrice,
          sixmonthPrice: values.sixmonthPrice,
          twelvemonthPrice: values.twelvemonthPrice,
        };
        const files = makeFileObjects(formData);
        await storage(files, formData);
        props.setIsUpdated(!props.isUpdated);
        resetForm();
        setLoading(false);
        props.close();
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

    const files = [new File([blob], "subscribtion_Details.json")];
    return files;
  }

  async function onChange(e) {
    setUploading(true);
    const file = e.target.files[0];
    try {
      const fileIpfs = await saveFile("trustified", file, { saveIPFS: true });
      const moralisFile = new Moralis.File("trustified_subscribtion", file);

      setFileUrl(fileIpfs);
      toast.success("Image uploaded Successfully!!");
      setUploading(false);
    } catch (error) {
      setUploading(false);
      toast.error("Error uploading file!!");
      console.log("Error uploading file: ", error);
    }
  }

  async function storage(files, formData) {
    // const client = makeStorageClient();
    // const cid = await client.put(files);

    subscribtion.set("title", formData.title);
    subscribtion.set("productorservice", formData.productorservice);
    subscribtion.set("image", formData.image);
    subscribtion.set("token", formData.token);
    subscribtion.set("network", formData.network);
    subscribtion.set("onemonthPrice", formData.onemonthPrice);
    subscribtion.set("threemonthPrice", formData.threemonthPrice);
    subscribtion.set("sixmonthPrice", formData.sixmonthPrice);
    subscribtion.set("twelvemonthPrice", formData.twelvemonthPrice);
    // subscribtion.set(
    //   "storageURI",
    //   `https://${cid}.ipfs.dweb.link/subscribtion_Details.json`
    // );
    subscribtion.set("username", user?.attributes?.username);
    subscribtion.set("ethAddress", user?.attributes?.ethAddress);
    subscribtion.set(
      "avatar",
      user?.attributes?.Avatar?.url ? user?.attributes?.Avatar?.url : ""
    );
    await subscribtion.save();
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
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  id="title"
                  type="text"
                  required
                  {...formik.getFieldProps("title")}
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Product/Service
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="productorservice"
                    label="Product/Service"
                    {...formik.getFieldProps("productorservice")}
                  >
                    {userProducts &&
                      userProducts.map((product) => {
                        return (
                          <MenuItem value={product.title}>
                            {product.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
                <div className="d-create-file">
                  <label
                    htmlFor="files"
                    id="get_file"
                    name="Asset"
                    className="btn-main"
                    style={{ backgroundColor: "#f64910", fontSize: "16px" }}
                  >
                    {isUploading ? "Uploading..." : "  Upload Image"}
                  </label>
                  <input
                    id="files"
                    onChange={onChange}
                    style={{ display: "none" }}
                    type="file"
                  />
                </div>

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
                      >
                        <MenuItem value="ETH">ETH</MenuItem>
                        <MenuItem value="MATIC">MATIC</MenuItem>
                        <MenuItem value="USDT">USDT</MenuItem>
                        <MenuItem value="USDC">USDC</MenuItem>
                      </Select>
                    </FormControl>
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

                <label
                  style={{
                    marginBottom: "-1vw",
                    color: "grey",
                    marginTop: "10px",
                  }}
                >
                  Duration :
                </label>
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="1 Month Price"
                      name="onemonthPrice"
                      id="onemonthPrice"
                      type="number"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("onemonthPrice")}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="3 Month Price"
                      name="threemonthPrice"
                      id="threemonthPrice"
                      type="number"
                      required
                      {...formik.getFieldProps("threemonthPrice")}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={24}>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="6 Month Price"
                      name="sixmonthPrice"
                      id="sixmonthPrice"
                      type="number"
                      required
                      style={{
                        paddingRight: "2vw",
                      }}
                      {...formik.getFieldProps("sixmonthPrice")}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <TextField
                      fullWidth
                      label="12 Month Price"
                      name="twelvemonthPrice"
                      id="twelvemonthPrice"
                      type="number"
                      required
                      {...formik.getFieldProps("twelvemonthPrice")}
                    />
                  </Grid>
                </Grid>
              </Stack>

              <DialogActions>
                <Grid container justifyContent="center">
                  <Button
                    //   color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create"}
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
export default CreateSubscribtionModal;
