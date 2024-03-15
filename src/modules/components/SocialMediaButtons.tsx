/// <reference types="@mui/icons-material" />
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/Youtube";
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
          <InstagramIcon fontSize="large" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          component="a"
          href="https://youtube.com/launchters"
          {...footerLinksSxProps}
        >
          <YoutubeIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
}
