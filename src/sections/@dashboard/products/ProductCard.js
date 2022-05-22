import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Card, Link, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../utils/formatNumber";
//
import Label from "../../../components/Label";
import ColorPreview from "../../../components/ColorPreview";
import ProductDetail from "./ProductDetail";

// ----------------------------------------------------------------------

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product, user }) {
  const {
    createdAt,
    description,
    price,
    type,
    status,
    videourl,
    image,
    title,
  } = product;


  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "product" && "error") || "info"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}
        {image && <ProductImgStyle alt={type} src={image.url} />}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          to={`/${
            user?.username == undefined
              ? user?.attributes.username
              : user?.username
          }/${title}`}
          state={{ productDetails: product }}
          params={{ product }}
          color="inherit"
          underline="hover"
          component={RouterLink}
        >
          <Typography variant="subtitle2" noWrap>
            {description}
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              {price && fCurrency(price)}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
