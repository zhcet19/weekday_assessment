import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e72e4', // This is an example color
    },
    secondary: {
      main: '#f4f5f7',
    },
    background: {
      default: '#f4f5f7',
    },
    text: {
      primary: '#32325d',
      secondary: '#8898aa',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 0.5rem 1.2rem rgba(4, 9, 20, 0.03)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
