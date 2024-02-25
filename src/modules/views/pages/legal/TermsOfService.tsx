import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Markdown from "../../../components/Markdown";
import Typography from "../../../components/Typography";
import AppAppBar from "../../sections/AppAppBar";
import AppFooter from "../../sections/AppFooter";
import termsOfServiceDetails from "./config/terms.md";

function TermsOfService() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{termsOfServiceDetails}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default TermsOfService;
