import { ThemeProps } from "@models/index";

// -----------------------------------------------------------------------

function Tooltip(theme: ThemeProps) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
export default Tooltip;
