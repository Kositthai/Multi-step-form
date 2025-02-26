import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, Arial, sans-serif',
  },
  palette: {
    customColors: {
      darkText: 'hsl(213, 96%, 18%)',
      lightText: '#aaaab2',
      lightBg: '#edf4fe',
      purplishBlue: 'hsl(243, 100%, 62%)',
      lightGray: 'hsl(229, 24%, 87%)',
      lightBlue: 'hsl(206, 94%, 87%)',
    },
  },
});

export default theme;
