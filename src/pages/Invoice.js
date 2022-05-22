import { Card, TableBody } from "@mui/material";
import {
  Button,
  Container,
  Stack,
  Box,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Iconify from "src/components/Iconify";
import { Web3Context } from "src/context/Web3Context";
import { factoryAbi, factoryAddress } from "src/contracts/contract";
import CreateInvoiceModal from "src/modal/CreateInvoiceModal";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Page from "../components/Page";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

function Invoices() {
  const { Moralis, account, user } = useMoralis();
  const navigate = useNavigate();
  const web3Context = React.useContext(Web3Context);
  const { connectWallet, web3Auth, address } = web3Context;

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getInvoices",
    {
      autoFetch: true,
    }
  );

  const [isUpdated, setIsUpdated] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setData();
  }, [data, isUpdated, user]);

  async function setData() {
    setLoading(true);
    const invoicedata = await JSON.parse(JSON.stringify(data));
    const d =
      data &&
      invoicedata.filter((inv) => inv.name == user?.attributes.username);
    console.log(data);
    data && setInvoices(d);
    setLoading(false);
  }

  useEffect(() => {
    fetch();
  }, [isUpdated, user]);

  return (
    <Page title="Agreement |  GigConomy">
      <CreateInvoiceModal
        open={handleClickOpen}
        close={handleClose}
        op={open}
        acc={address}
        setIsUpdated={setIsUpdated}
        isUpdated={isUpdated}
      />
      <Container pl={0} pr={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" gutterBottom>
            Invoices
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create Invoice
          </Button>
        </Stack>
        <Stack>
          <Card>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice Number</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Token</TableCell>
                    <TableCell>Note</TableCell>

                    <TableCell>Explore</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoices && invoices.length == 0 && (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ textAlign: "center" }}>
                        <h5>No invoices created yet!</h5>
                      </TableCell>
                    </TableRow>
                  )}
                  {console.log(invoices, "invoices")}
                  {invoices &&
                    invoices.map((invoice) => (
                      <TableRow>
                        <TableCell>{invoice.invoiceNumber}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>{invoice.name}</TableCell>
                        <TableCell>{invoice.price}</TableCell>
                        <TableCell>{invoice.token}</TableCell>
                        <TableCell>{invoice.note}</TableCell>
                        <TableCell>
                          <Button
                            //   color="primary"
                            size="large"
                            //   type="submit"
                            variant="contained"
                            to={`/invoice/${invoice.objectId}`}
                            onClick={() => {
                              navigate(`/invoice/${invoice.objectId}`, {
                                state: invoice,
                              });
                            }}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}

export default Invoices;
