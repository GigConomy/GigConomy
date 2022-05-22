import PropTypes from "prop-types";
// material
import { Grid, Box } from "@mui/material";
import ShopProductCard from "./ProductCard";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, currentUser, ...other }) {
  const { Moralis, user } = useMoralis();
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    // const userPro =
    //   products &&
    //   products.filter(
    //     (product) => user.attributes.username == product.user?.username
    //   );

    setUserProducts(products);
  }, [products]);

  return (
    <Grid container spacing={3} {...other}>
      {userProducts && userProducts.length == 0 && (
        <Box sx={{ marginTop: "15px" }}>
          <h5>No Product/service created Yet!</h5>
        </Box>
      )}
      {userProducts &&
        userProducts.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} md={3}>
              <ShopProductCard product={product} user={currentUser} />
            </Grid>
          );
        })}
    </Grid>
  );
}
