import { useFormik } from "formik";
import { useEffect, useState } from "react";
// material
import { Container, Stack, Typography, Button } from "@mui/material";
// import { Tab, Tabs, AppBar, withStyles } from "@material-ui/core";
import Iconify from "../components/Iconify";
import TabsComponent from "./TabsProduct";
// components
import Page from "../components/Page";
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar,
} from "../sections/@dashboard/products";
//
import PRODUCTS from "../_mocks_/products";
import CreateProductModal from "../modal/CreateProductModal";
import { useMoralisCloudFunction } from "react-moralis";
import { useMoralis } from "react-moralis";
// ----------------------------------------------------------------------
export default function EcommerceShop() {
  const { user } = useMoralis();
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  // const { data, isLoading } = useMoralisCloudFunction("getProducts");
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getProducts",
    { autoFetch: true }
  );

  const [prod, setProd] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUser] = useState();

  useEffect(() => {
    setProducts();
  }, [data, isUpdate]);

  useEffect(() => {
    fetch();
  }, [isUpdate]);

  async function setProducts() {
    const product = await JSON.parse(JSON.stringify(data));
    setProd(product);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openFilter, setOpenFilter] = useState(false);
  const formik = useFormik({
    initialValues: {
      gender: "",
      category: "",
      colors: "",
      priceRange: "",
      rating: "",
    },
    onSubmit: () => {
      setOpenFilter(false);
    },
  });
  const { resetForm, handleSubmit } = formik;
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };
  return (
    <Page title="Products | GigConomy">
      <CreateProductModal
        open={handleClickOpen}
        close={handleClose}
        op={open}
        update={setIsUpdate}
        state={isUpdate}
        setLoading={setLoading}
        currentUser={user}
      />
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
            <Button
              variant="contained"
              onClick={handleClickOpen}
              to="#"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Create Products
            </Button>
          </Stack>
        </Stack>
        {/* <h1>Disha</h1> */}
        <TabsComponent
          product={prod && prod}
          loading={loading}
          currentUser={user}
        />
        {/* <TabsProduct /> */}
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
