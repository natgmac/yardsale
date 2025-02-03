// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600', // Your brand's primary color
    },
    secondary: {
      main: '#444444', // Secondary color for accents
    },
    background: {
      default: '#f9f9f9', // Background color for the app
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    // Customize Material UI components if needed
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Avoid uppercase letters if not desired
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
