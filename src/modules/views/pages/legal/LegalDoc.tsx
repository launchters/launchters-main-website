import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Markdown, { MarkdownProps } from "../../../components/Markdown";
import Typography from "../../../components/Typography";
import AppAppBar from "../../sections/AppAppBar";
import AppFooter from "../../sections/AppFooter";

type Props = {
  doc: MarkdownProps;
};
function Privacy({ doc }: Props) {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{doc}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default Privacy;
