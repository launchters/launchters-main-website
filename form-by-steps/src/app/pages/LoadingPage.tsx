import { CircularProgress, Container, Typography } from "@mui/material";
import Page from "@components/shared/layout/Page";

// -------------------

const LoadingPage = () => {
  const pageTitle = "Cargando...";
  return (
    <Page title={pageTitle}>
      <Container style={{ textAlign: "center", justifyItems: "center" }}>
        <Typography variant="h3" paragraph>
          {pageTitle}
        </Typography>

        <CircularProgress />
      </Container>
    </Page>
  );
};

export default LoadingPage;
