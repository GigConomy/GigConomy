import { Card } from "@mui/material";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import TableView from "src/components/agreements/TableView";
import Iconify from "src/components/Iconify";
import { Web3Context } from "src/context/Web3Context";
import { AgreementContractAbi, AgreementAddress } from "src/contracts/config";
import CreateAgreementModal from "src/modal/CreateAgreementModal";
import { BlogPostsSort } from "src/sections/@dashboard/blog";
import Page from "../components/Page";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";

function Agreement() {
  const { Moralis, account, user } = useMoralis();
  const web3Context = React.useContext(Web3Context);
  const { connectWallet, web3Auth, address } = web3Context;

  const [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [contract, setContract] = React.useState();
  const [isUpdate, setIsUpdate] = React.useState(false);

 

  useEffect(() => {
    callBiconomy();
  }, [isUpdate]);

  async function callBiconomy() {
    const maticProvider =
      `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_KEY}`;

    await window.ethereum
      .enable()
      .then(() => {
        try {
          const web3 = new Web3(window.ethereum);  
          let options = {
            walletProvider: window.ethereum,
            apiKey: process.env.REACT_APP_BICONOMY_KEY,
            strictMode: true, 
            debug: true,
          };
          const biconomy = new Biconomy(window.ethereum, options);
          const getWeb3 = new Web3(biconomy);
          biconomy
            .onEvent(biconomy.READY, () => { 
              console.log(getWeb3, "getWeb3");
            })
            .onEvent(biconomy.ERROR, (error, message) => {
              console.error(error, "err");
            });

          let contract = new getWeb3.eth.Contract(
            AgreementContractAbi,
            AgreementAddress
          ); 
          setContract(contract);
        } catch (error) {
          console.log(error), "catch errr";
        }
      })
      .catch((error) => {
        console.log(error, "connection");
      });
  }
  // This web3 instance is used to read normally and write to contract via meta transactions.
  // web3 = new Web3(biconomy);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const createAgreement = async (data) => { 
    setLoading(true);
    const formattedPrice = ethers.utils.parseEther(data.price);
   
    try { 
      let tx = await contract.methods
        .agreementCreate(
          data.buyerAddress,
          data.sellerAddress,
          formattedPrice,
          data.stakePercentBuyer.toString(),
          data.stakePercentSeller.toString(),
          data.title,
          data.description
        )
        .send({ from: user?.attributes.ethAddress }); 
        console.log(tx,"transaction");
      handleClose(); 
      setLoading(false);
      toast.success("Successfully contract created!!");
      setIsUpdate(!isUpdate);
    } catch (err) { 
      toast.error("Something want wrong!!",err); 
      setLoading(false);
    }

    // console.log(data, "data from create");
    // console.log(data.stakePercentBuyer.toString(), "stake");

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();

    // const agreementContract = new ethers.Contract(
    //   AgreementAddress,
    //   AgreementContractAbi,
    //   signer
    // );

    // let txn;

    // try {
    //   const formattedPrice = ethers.utils.parseEther(data.price.toString());
    //   txn = await agreementContract.agreementCreate(
    //     data.buyerAddress,
    //     data.sellerAddress,
    //     formattedPrice,
    //     data.stakePercentBuyer.toString(),
    //     data.stakePercentSeller.toString(),
    //     data.title,
    //     data.description
    //   );
    //   await txn.wait();

    //   console.log(txn, "transaction");
    //   toast.success("success");
    //   setLoading(false);
    //   handleClose();
    // } catch (err) {
    //   setLoading(false);
    //   console.log(err);
    //   toast.error("error");
    // }
  };

  return (
    <Page title="Agreement |  GigConomy">
      <CreateAgreementModal
        submitForm={createAgreement}
        open={handleClickOpen}
        close={handleClose}
        op={open}
        acc={address}
        loading={loading}
      />
      <Container pl={0} pr={0}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" gutterBottom>
            Agreements
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create Agreement
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="end">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="progress">In Progress</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack>
          <Card>
            {/* <AgreementView currentAccount={address} /> */}
            <TableView currentAccount={address} />
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}

export default Agreement;
