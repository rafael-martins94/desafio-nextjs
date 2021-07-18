import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#CC0000',
    },    
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    
  },
});

export default theme;