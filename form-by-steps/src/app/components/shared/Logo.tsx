import AppConfig from "@/app/App.config";
import { Box, Typography } from "@mui/material";

// ----------------------------------------------------------------------

function Logo() {
  return (
    <Box sx={{ px: 2.5, pt: 5, pb: 1, display: "inline-flex" }}>
      <Typography gutterBottom align="center" variant="h4">
        {/* LOGO */}
        {AppConfig.appTitle}
      </Typography>
    </Box>
  );
}
export default Logo;
