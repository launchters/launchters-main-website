import { ThemeProps } from "@models/index";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }: { theme: ThemeProps }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(4),
  marginBottom: 0,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

function DashboardLayout() {
  const theme: ThemeProps = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  // const screenSize = useResize();

  return (
    <RootStyle theme={theme}>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle theme={theme}>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
export default DashboardLayout;
