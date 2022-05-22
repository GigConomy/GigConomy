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

const Input = styled("input")({
  display: "none",
});
function CreateAgreementModal(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [creator, setCreator] = React.useState("buyer");
  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stackPercent, setStackPercent] = useState("");
  const [sellerPercent, setSellerPercent] = useState("");
  const titleHandler = (e) => setTitle(e.target.value);

  const handleChange = (event) => {
    setCreator(event.target.value);
  };

  const buyerHandler = (e) => {
    setBuyer(e.target.value);
  };
  const sellerHandler = (e) => {
    setSeller(e.target.value);
  };
  const submitAgreement = (e) => {
    e.preventDefault(); 
    if (creator == "buyer") {
      setBuyer(props.acc);
    } else {
      setSeller(props.acc);
    }
    const data = { buyer, seller, price, stackPercent, sellerPercent };
    props.submitForm(data); 
    setTitle("");
    setDescription("");
    setBuyer("");
    setSeller("");
    setPrice("");
    setStackPercent("");
    setSellerPercent("");
    // Mine;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      buyerAddress: "",
      sellerAddress: "",
      price: "",
      stakePercentBuyer: "",
      stakePercentSeller: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required this field!"),
      description: Yup.string().required("Required this field!"),
      price: Yup.number()
        .required("Required this field!")
        .min(0, "Price should be Grater 0."),
      stakePercentBuyer: Yup.number()
        .typeError("you must specify a number")
        .min(0, "Min value 0.")
        .max(100, "Max value 100.")
        .required("Please enter  % between 0 to 100"),
      stakePercentSeller: Yup.number()
        .max(100, "Max value 100")
        .min(0, "Min value 0.")
        .required("Please enter   % between 0 to 100"),
    }),
    onSubmit: async (values) => {
      const formData = {
        title: values.title,
        description: values.description,
        buyerAddress: creator == "buyer" ? props.acc : buyer,
        sellerAddress: creator == "seller" ? props.acc : seller,
        price: values.price.toString(),
        stakePercentBuyer: values.stakePercentBuyer.toString(),
        stakePercentSeller: values.stakePercentSeller.toString(),
      };
      props.submitForm(formData);
    },
  });

  return (
    <div>
      <Dialog open={props.op} onClose={props.close} fullWidth>
        <DialogContent style={{ overflowX: "hidden" }}>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              // width: "50vw",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              // marginTop: "100px",
            }}
          >
            <Stack spacing={3}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  I am a
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={creator}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="buyer"
                    control={<Radio />}
                    label="Buyer"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label="Seller"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                label="Title"
                name="title"
                id="title"
                type="title"
                // required
                // onChange={titleHandler}
                // value={title}
                {...formik.getFieldProps("title")}
                error={Boolean(formik.touched.title && formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
              <TextField
                fullWidth
                name="description"
                id="description"
                type="text"
                label="Description"
                // required
                // onChange={descriptionHandler}
                // value={description}
                {...formik.getFieldProps("description")}
                error={Boolean(
                  formik.touched.description && formik.errors.description
                )}
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              {creator === "buyer" ? (
                <TextField
                  fullWidth
                  name="sellerAddress"
                  id="sellerAddress"
                  type="text"
                  label="SellerAddress"
                  required
                  onChange={sellerHandler}
                  value={seller}
                />
              ) : (
                <TextField
                  fullWidth
                  name="buyerAddress"
                  id="buyerAddress"
                  type="text"
                  label="BuyerAddress"
                  required
                  onChange={buyerHandler}
                  value={buyer}
                />
              )}
              <TextField
                fullWidth
                name="price"
                id="price"
                type="number"
                label="Price (in MATIC)"
                //   required
                // onChange={priceHandler}
                // value={price}
                {...formik.getFieldProps("price")}
                error={Boolean(formik.touched.price && formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
              <TextField
                fullWidth
                name="stakePercentBuyer"
                id="stakePercentBuyer"
                type="number"
                label="Stake Percentage Buyer %"
                //   required
                // onChange={percentHandler}
                // value={stackPercent}
                {...formik.getFieldProps("stakePercentBuyer")}
                error={Boolean(
                  formik.touched.stakePercentBuyer &&
                    formik.errors.stakePercentBuyer
                )}
                helperText={
                  formik.touched.stakePercentBuyer &&
                  formik.errors.stakePercentBuyer
                }
              />
              <TextField
                fullWidth
                name="stakePercentSeller"
                id="stakePercentSeller"
                type="number"
                label="Stake Percentage Seller %"
                //   required
                // onChange={sellerPercentHandler}
                // value={sellerPercent}
                {...formik.getFieldProps("stakePercentSeller")}
                error={Boolean(
                  formik.touched.stakePercentSeller &&
                    formik.errors.stakePercentSeller
                )}
                helperText={
                  formik.touched.stakePercentSeller &&
                  formik.errors.stakePercentSeller
                }
              />
              {/* ----------------------------------------------- */}
            </Stack>
            <DialogActions> 
              {/* <p style={{ color: "red" }}>Error</p> */}
              <LoadingButton
                type="submit"
                variant="contained"
                loading={formik.isSubmitting}
                disabled={props.loading}
              >
                {props.loading == true
                  ? "Creating Agreement..."
                  : "Create Agreement"}
              </LoadingButton>
              <Button onClick={props.close} variant="contained">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default CreateAgreementModal;
