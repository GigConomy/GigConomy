// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';
import { useMoralis, useMoralisCloudFunction } from 'react-moralis';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.main
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AppItemOrders() {
  const {Moralis,user}=useMoralis();
  const [agree,setAgree]= useState(); 
  const { data, error, isLoading } = useMoralisCloudFunction("getAgreements"); 

  const Customer = Moralis.Object.extend("Agreementss");
  const query = new Moralis.Query(Customer);



  useEffect(async()=>{  
    const aData = JSON.parse(JSON.stringify(data)); 
    const buyer = (await aData) && aData.filter((e) => e.buyer === user.attributes.ethAddress);   
    if(buyer != null){
      setAgree(buyer.length); 
    }
   
  },[]);
  
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="gridicons:multiple-users" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3"  color="#000">{fShortenNumber(agree)}</Typography>
      <Typography variant="subtitle2"  color="#000" sx={{ opacity: 0.72 }}>
       Number of Customers
      </Typography>
    </RootStyle>
  );
}
