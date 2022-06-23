import { createTheme } from '@mui/material/styles';
import { primaryColor } from './colors';


export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,

    },
    secondary: {
      main:'#122870',
      light:'#122870',
      green:'#122870'
    },
    neutral: {
      main: '#2d',
      gray: '#636b6f',


    },
    white: {
      main: "#ffffff"
    },
   
  },
  typography: {

    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme