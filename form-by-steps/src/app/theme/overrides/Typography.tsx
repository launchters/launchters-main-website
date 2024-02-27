import { ThemeProps } from "@models/index";

// -----------------------------------------------------------------------

function Typography(theme: ThemeProps) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
export default Typography;
