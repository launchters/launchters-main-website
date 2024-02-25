import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import YoutubeIcon from "@mui/icons-material/Youtube";

export default function SocialMediaButtons() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Link component="a" href="https://Instagram.com/launchters">
          <InstagramIcon fontSize="large" />
        </Link>
      </Grid>
      <Grid item>
        <Link component="a" href="https://Youtube.com/launchters">
          <YoutubeIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
}
