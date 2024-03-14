import {
  blueGrey,
  green,
  grey,
  orange,
  red,
  yellow,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

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
      default: "white",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 11,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
});

export const colorPalette = rawTheme.palette;

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
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
      fontSize: 30,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 26,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 23,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 18,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 18,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 16,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 16,
    },
    subtitle2: {
      ...rawTheme.typography.subtitle2,
      fontSize: 14,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 12,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 10,
    },
  },
};

export default theme;
