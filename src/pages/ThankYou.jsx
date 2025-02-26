import React from 'react';
import iconThankYou from '../assets/images/icon-thank-you.svg';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function ThankYou() {
  const theme = useTheme();
  const { darkText, lightText } = theme.palette.customColors;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <img src={iconThankYou} alt="icon-thank-you" />

      <Typography
        variant="h1"
        sx={{
          fontSize: '24px',
          fontWeight: 'bolder',
          color: darkText,
          textAlign: 'center',
        }}
      >
        Thank you!
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: '16px', color: lightText, textAlign: 'center' }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </Typography>
    </Box>
  );
}

export default ThankYou;
