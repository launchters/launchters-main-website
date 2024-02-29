import { Outlet } from "react-router-dom";
import Footer from "./dashboard/Footer";

// ----------------------------------------------------------------------

function NoLogoLayout() {
  // const theme: ThemeProps = useTheme();

  return (
    <>
      <Outlet />
      <Footer showDisclaimer />
    </>
  );
}

export default NoLogoLayout;
