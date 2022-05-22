// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
// component
import Iconify from "../../../components/Iconify";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useEffect, useState } from "react";
import { AgreementAddress } from "../../../contracts/config";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.main,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.main,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppTotalAgreement() {
  const { Moralis, user } = useMoralis();
  const [agree, setAgree] = useState();
  const { data, error, isLoading } = useMoralisCloudFunction("getAgreements");
  useEffect(async () => {
    const aData = JSON.parse(JSON.stringify(data));

    const filterUsr =
      (await aData) &&
      aData.filter(
        (e) =>
          e.buyer === user?.attributes.ethAddress ||
          e.seller === user?.attributes.ethAddress
      );

    if (filterUsr != null) setAgree(filterUsr.length);
  });

  useEffect(async () => {
    const data = await Moralis.Plugins.covalent?.getLogEventsByContractAddress({
      chainId: 80001,
      contractAddress: AgreementAddress,
    });
  }, []);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="icon-park-outline:agreement" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3" color="#000">
        {fShortenNumber(agree)}
      </Typography>
      <Typography variant="subtitle2" color="#000" sx={{ opacity: 0.72 }}>
        Escrow Agreement
      </Typography>
    </RootStyle>
  );
}
