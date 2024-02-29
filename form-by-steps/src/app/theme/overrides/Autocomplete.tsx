import { ThemeProps } from "@models/index";

// -----------------------------------------------------------------------

function Autocomplete(theme: ThemeProps) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
export default Autocomplete;
