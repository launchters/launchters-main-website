import {
  blueGrey,
  green,
  grey,
  orange,
  red,
  yellow,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const fontFamily = "'Roboto', Arial, sans-serif";

const rawTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      light: blueGrey[100],
      dark: blueGrey[900],
    },
    // ! accent
    secondary: {
      main: yellow[700],
      light: yellow[50],
      dark: yellow[900],
    },
    warning: {
      main: yellow[100],
      dark: orange[300],
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    background: {
      default: "white", // Si lo cambiamos, debemos revisar el componente que carga Calendly para que sea blanco
    },
  },
  typography: {
    fontFamily,
    fontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightBold,
  fontFamily,
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      placeholder: grey[100],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 32,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 30,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 26,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 24,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 21,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 21,
    },
    subtitle2: {
      ...rawTheme.typography.subtitle2,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 18,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
  shape: {
    ...rawTheme.shape,
    borderRadius: 10,
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
      },
    },
  },
};

export default theme;
