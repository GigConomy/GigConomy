import { Outlet } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
// components
import LendingFooter from "src/LendingPage/LendingFooter";

import LendingHeader from "src/LendingPage/LendingHeader";

// ----------------------------------------------------------------------

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function LendingPageLayout() {
  return (
    <>
      <LendingHeader />
      <HeaderStyle>{/* <Logo /> */}</HeaderStyle>
      <Outlet />
      <LendingFooter style={{}} />
    </>
  );
}
