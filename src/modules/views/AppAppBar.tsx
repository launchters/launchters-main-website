import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

// const rightLink = {
//   fontSize: 16,
//   color: "common.white",
//   ml: 3,
// };

function AppAppBar() {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }} />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="https://instagram.com/launchters"
          sx={{ fontSize: 24 }}
          rel="nofollow"
        >
          {"Alex Launchters"}
        </Link>
        {/* <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box> */}
        <Box sx={{ flex: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default AppAppBar;
