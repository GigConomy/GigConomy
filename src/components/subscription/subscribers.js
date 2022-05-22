// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../utils/formatNumber'; 
import Iconify from '../Iconify';
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
  color: theme.palette.success.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.success.dark, 0)} 0%, ${alpha(
    theme.palette.success.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function Subscribers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="gridicons:multiple-users" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3"  color="#000">{fShortenNumber(20)}</Typography>
      <Typography variant="subtitle2" color="#000" sx={{ opacity: 0.72 }}>
    Subscribers
      </Typography>
    </RootStyle>
  );
}
