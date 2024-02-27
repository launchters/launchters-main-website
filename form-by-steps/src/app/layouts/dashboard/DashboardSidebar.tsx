import NavSection from "@components/shared/layout/NavSection";
import Scrollbar from "@components/shared/layout/Scrollbar";
import { ThemeProps } from "@models/index";
import AppVersionBadge from "@components/shared/AppVersionBadge";
import Logo from "@components/shared/Logo";
import { Drawer } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import Footer from "./Footer";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }: { theme: ThemeProps }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool.isRequired,
  onCloseSidebar: PropTypes.func.isRequired,
};

type Props = {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
};

// ----------------------------------------------------------------------

function DashboardSidebar({ isOpenSidebar, onCloseSidebar }: Props) {
  const { pathname } = useLocation();
  const theme: ThemeProps = useTheme();
  const isDesktop = useResponsive("up", "lg");

  // ----------

  useEffect(() => {
    if (isOpenSidebar) onCloseSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // ----------

  const contentLayout: ReactElement = (
    <>
      <Scrollbar
        theme={theme}
        sx={{
          height: 1,
          "& .simplebar-content": {
            height: 1,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <AppVersionBadge />
        <Logo />

        <NavSection />
      </Scrollbar>
      <Footer />
    </>
  );

  return (
    <RootStyle theme={theme}>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {contentLayout}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {contentLayout}
        </Drawer>
      )}
    </RootStyle>
  );
}
export default DashboardSidebar;
