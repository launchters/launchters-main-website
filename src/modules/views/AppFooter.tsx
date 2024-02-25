import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Typography from "../components/Typography";
import SocialMediaButtons from "./SocialMediaButtons";

const footerLinkStyle = {
  fontSize: "0.8rem",
};

function Copyright() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyItems="baseline"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        sx={{ pt: 4, mt: 4 }}
      >
        {/* Copyright */}
        <Typography variant="caption">
          &copy; {new Date().getFullYear()}.&nbsp;
          <Link
            color="inherit"
            href="https://cookingstartups.com/?utm_source=https://launchters.com"
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
          <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
            Freepik
          </Link>
          {" from "}
          <Link
            href="https://www.flaticon.com"
            rel="sponsored"
            title="Flaticon"
          >
            Flaticon.com
          </Link>
          {" is licensed by "}
          <Link
            href="https://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </Link>
        </Typography>
      </Stack>
    </React.Fragment>
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
    <Stack flexDirection="column">
      <Box
        flexDirection="column"
        component="footer"
        sx={{ display: "flex", bgcolor: "secondary.light", p: 2, mt: 4, mb: 0 }}
      >
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="start"
          flexDirection="row"
        >
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              textAlign="left"
              marked="left"
              gutterBottom
            >
              Conozcámonos mejor
            </Typography>

            <SocialMediaButtons />
          </Grid>
          {/* 
          LEGAL LINKS
          */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              textAlign="left"
              marked="left"
              gutterBottom
            >
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
                <Link href="./legal/terms/" sx={footerLinkStyle}>
                  Términos del Servicio
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="./legal/privacy/" sx={footerLinkStyle}>
                  Política de Privacidad y Uso de Cookies
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link
                  href="./legal/term-sheets/general/"
                  sx={footerLinkStyle}
                >
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
      </Box>
    </Stack>
  );
}
