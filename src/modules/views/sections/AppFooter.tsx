import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Typography from "../../components/Typography";
import SocialMediaButtons from "../../components/SocialMediaButtons";

const footerLinkStyle = {
  fontSize: "0.8rem",
};

function Copyright() {
  return (
    <Stack
      component="footer"
      direction="row"
      justifyItems="baseline"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: 4 }}
    >
      {/* Copyright */}
      <Typography variant="caption">
        &copy; {new Date().getFullYear()}.&nbsp;
        <Link
          to="https://cookingstartups.com/?utm_source=https://launchters.com"
          color="inherit"
          rel="follow"
        >
          Cooking Startups Limited.
        </Link>
        &nbsp;
        {" All Rights reserved."}
      </Typography>

      {/* Attribution disclaimer */}
      <Typography variant="caption" sx={{ px: "0.4em" }}>
        {"Icons made by "}
        <a href="https://www.freepik.com" rel="sponsored" title="Freepik">
          Freepik
        </a>
        {" from "}
        <a href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
          Flaticon.com
        </a>
        {" is licensed by "}
        <a
          href="https://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </Typography>
    </Stack>
  );
}

// const iconStyle = {
//   width: 48,
//   height: 48,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "warning.main",
//   mr: 1,
//   "&:hover": {
//     bgcolor: "warning.dark",
//   },
// };

// const LANGUAGES = [
//   {
//     code: "en-US",
//     name: "English",
//   },
//   {
//     code: "fr-FR",
//     name: "Français",
//   },
// ];

export default function AppFooter() {
  return (
    <Stack
      flexDirection="column"
      component="footer"
      sx={{ display: "flex", bgcolor: "primary.light", p: 2, pt: 8, mb: 0 }}
    >
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="start"
        flexDirection="row"
      >
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h6" textAlign="left" marked="left" gutterBottom>
            Conozcámonos mejor
          </Typography>

          <SocialMediaButtons />
        </Grid>
        {/* 
          LEGAL LINKS
          */}
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h6" textAlign="left" marked="left" gutterBottom>
            Legal
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              listStyle: "none",
              p: 0,
              textAlign: "left",
            }}
          >
            <Box component="li" sx={{ py: 0.5 }}>
              <Link to="/legal/terms" style={footerLinkStyle}>
                Términos del Servicio
              </Link>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link to="/legal/privacy" style={footerLinkStyle}>
                Política de Privacidad y Uso de Cookies
              </Link>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link to="/legal/term-sheets/general-conditions" style={footerLinkStyle}>
                Condiciones Generales de Contratación (CCGG)
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* 
          LANGUAGE
          */}
        {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}
      </Grid>

      <Copyright />
    </Stack>
  );
}
