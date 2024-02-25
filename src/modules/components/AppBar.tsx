import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import appConfig from "../../config/app.config";

function AppBar(props: AppBarProps) {
  return (
    <MuiAppBar elevation={4} position={appConfig.appBarPosition} {...props} />
  );
}

export default AppBar;
