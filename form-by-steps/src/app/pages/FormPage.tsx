import Page from "@components/shared/layout/Page";
import { Container, Typography } from "@mui/material";

// ----------------------------------------------------------------------

interface Props {
  title: string;
  form: JSX.Element;
}

function FormPage({ title, form }: Props) {
  return (
    <Page title={title}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
          {title}
        </Typography>
        {form}
      </Container>
    </Page>
  );
}

export default FormPage;
