import { Box } from "@mui/material";
import { alpha, styled, SxProps } from "@mui/material/styles";
import { ReactNode } from "react";
import SimpleBarReact from "simplebar-react";
import { ThemeProps } from "@models/index";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
}));

const SimpleBarStyle = styled(SimpleBarReact)(
  ({ theme }: { theme: ThemeProps }) => ({
    maxHeight: "100%",
    "& .simplebar-scrollbar": {
      "&:before": {
        backgroundColor: alpha(theme.palette.grey[600], 0.48),
      },
      "&.simplebar-visible:before": {
        opacity: 1,
      },
    },
    "& .simplebar-track.simplebar-vertical": {
      width: 10,
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
      height: 6,
    },
    "& .simplebar-mask": {
      zIndex: "inherit",
    },
  })
);

// ----------------------------------------------------------------------

type ScrollbarProps = {
  theme: ThemeProps;
  children: ReactNode;
  sx?: SxProps<{}>;
};

function Scrollbar({ children, sx, theme, ...other }: ScrollbarProps) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle theme={theme}>
      <SimpleBarStyle
        theme={theme}
        timeout={500}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
export default Scrollbar;
