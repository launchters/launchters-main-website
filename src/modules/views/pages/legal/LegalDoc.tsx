import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Markdown from "../../../components/Markdown";
import Typography from "../../../components/Typography";
import { $TSFix } from "../../../models/ts-fix.d";
import AppAppBar from "../../sections/AppAppBar";
import AppFooter from "../../sections/AppFooter";

type Props = {
  // doc: MarkdownProps;
  doc: $TSFix;
  title: string;
};
function LegalDoc({ doc, title }: Props) {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            {title}
          </Typography>
          <Markdown>{doc}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default LegalDoc;
