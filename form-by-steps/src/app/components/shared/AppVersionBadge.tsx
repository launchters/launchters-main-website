import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import PropTypes from "prop-types";
import AppConfig from "@/app/App.config";

// ----------------------------------------------------------------------

AppVersionBadge.propTypes = {
  sx: PropTypes.object,
};

type Props = {
  sx?: SxProps<{}>;
};

// ----------------------------------------------------------------------

function AppVersionBadge({ sx = {} }: Props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "relative",
        height: "0",
        overflow: "visible",
        ...sx,
      }}>
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          top: "0.33rem",
          right: "0.61rem",
          fontSize: "0.75rem",
        }}>
        {`v.${AppConfig.appVersion}`}
      </Typography>
    </Box>
  );
}
export default AppVersionBadge;
