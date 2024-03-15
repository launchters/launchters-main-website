import Youtube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import appConfig from "../../config/app.config";

const footerLinksSxProps = appConfig.footer.links.sxProps;

export default function SocialMediaButtons() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Link
          component="a"
          href="https://instagram.com/launchters"
          {...footerLinksSxProps}
        >
          <Instagram fontSize="large" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          component="a"
          href="https://youtube.com/launchters"
          {...footerLinksSxProps}
        >
          <Youtube fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
}
