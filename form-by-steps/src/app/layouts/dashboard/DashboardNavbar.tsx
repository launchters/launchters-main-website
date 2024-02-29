import { AppBar, IconButton, Toolbar } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProps } from "@models/index";
import { displayIcon } from "@utils/displayIcon";

// -----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }: { theme: ThemeProps }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }: { theme: ThemeProps }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

type Props = {
  onOpenSidebar: () => void;
};

// ----------------------------------------------------------------------

function DashboardNavbar({ onOpenSidebar }: Props) {
  const theme: ThemeProps = useTheme();

  return (
    <RootStyle theme={theme}>
      <ToolbarStyle theme={theme}>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
        >
          {displayIcon({ name: "eva:menu-2-fill", size: 20 })}
        </IconButton>
      </ToolbarStyle>
    </RootStyle>
  );
}
export default DashboardNavbar;
