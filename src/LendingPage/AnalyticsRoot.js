// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
 
// component
import Iconify from '../components/Iconify';
import { useMoralis, useMoralisCloudFunction } from 'react-moralis';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.darker,
    backgroundColor: theme.palette.secondary.lighter
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
    color: theme.palette.secondary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.secondary.dark, 0)} 0%, ${alpha(
      theme.palette.secondary.dark,
      0.24
    )} 100%)`
  }));
// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AnalyticsRoot() { 
  return (
    <RootStyle>
              <IconWrapperStyle>
                <Iconify
                  icon="carbon:analytics"
                  width={24}
                  height={24}
                />
              </IconWrapperStyle>
              <Typography variant="h3" color="#000">
                Analytics
              </Typography>
            </RootStyle>
  );
}
