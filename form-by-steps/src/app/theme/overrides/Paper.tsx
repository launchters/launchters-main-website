import { ThemeProps } from "@models/index";

// ----------------------------------------------------------------------

function Paper(theme: ThemeProps) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
export default Paper;
