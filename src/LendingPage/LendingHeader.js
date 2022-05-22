import React, { useEffect } from "react";
import Logo from "../components/Logo";
import Button from "@mui/material/Button";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Web3ModalContext } from "../context/Web3Modal";
import worldID from "@worldcoin/id";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function LendingHeader() {
  const navigate = useNavigate();
  const web3ModalContext = React.useContext(Web3ModalContext);
  const { connectWallet, account } = web3ModalContext;
  const { authenticate, user, isAuthenticated } = useMoralis();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {}, [user]);

  const cryptoPayment = () => {
    if (isAuthenticated && user) {
      navigate("/dashboard/send-request");
    } else {
      toast.info("PleaseConnect the wallet!");
    }
  };

  const agreement = () => {
    if (isAuthenticated && user) {
      navigate("/dashboard/Agreement");
    } else {
      toast.info("PleaseConnect the wallet!");
    }
  };

  async function getVerified() {
    try {
      const result = await worldID.enable();
      console.log("World ID verified succesfully:", result); // <- Pass this result to your wallet transaction
    } catch (failure) {
      console.warn("World ID verification failed:", failure);
      // Re-activate here so your end user can try again
    }
  }

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Button
              onClick={cryptoPayment}
              variant="outlined"
              style={{ margin: "0 5px" }}
            >
              Crypto Payment
            </Button>
            <Button
              onClick={agreement}
              variant="outlined"
              style={{ margin: "0 5px" }}
            >
              Escrow Agreement
            </Button> */}

            {user == null ? (
              <>
                <Button
                  variant="contained"
                  onClick={async () => {
                    try {
                      await connectWallet();
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Connect
                </Button>
                &nbsp;
                <Button
                  variant="contained"
                  onClick={async () => {
                    try {
                      await getVerified();
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Get Verified
                </Button>
              </>
            ) : (
              <Button variant="outlined">
                {user &&
                  user.attributes.username &&
                  user.attributes.username.slice(0, 10)}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
