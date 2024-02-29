import Page from "@components/shared/layout/Page";
import { ThemeProps } from "@models/index";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import { getStaticResourceUrl } from "../utils/getStaticResourceUrl";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }: { theme: ThemeProps }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

type Props = {
  title: string;
  subtitle: ReactElement | string;
  staticImgPath?: string;
  hidePrimaryButton?: boolean;
  secondaryLink?: string;
  secondaryLabel?: string;
};

function PageBasic({
  title,
  subtitle,
  staticImgPath,
  secondaryLink,
  secondaryLabel,
  hidePrimaryButton = false,
}: Props) {
  const theme: ThemeProps = useTheme();

  const imageSrc = staticImgPath ? getStaticResourceUrl(staticImgPath) : null;

  // ------------

  return (
    <Page title={title}>
      <Container>
        <ContentStyle
          theme={theme}
          sx={{ textAlign: "center", alignItems: "center", mt: 0 }}
        >
          {title && (
            <Typography variant="h3" paragraph>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography sx={{ color: "text.secondary" }}>{subtitle}</Typography>
          )}
          {imageSrc && imageSrc.length > 3 && (
            <Box
              component="img"
              src={imageSrc}
              sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            />
          )}

          {/* BUTTONS */}
          <Grid container spacing={2} justifyContent="center">
            {!hidePrimaryButton && (
              <Grid item>
                <Button
                  style={{ textTransform: "none" }}
                  to="/"
                  size="large"
                  variant="contained"
                  component={RouterLink}
                >
                  Volver
                </Button>
              </Grid>
            )}
            {secondaryLink && secondaryLabel && (
              <Grid item>
                <Button
                  style={{ textTransform: "none" }}
                  to={secondaryLink}
                  size="large"
                  variant="outlined"
                  component={RouterLink}
                >
                  {secondaryLabel}
                </Button>
              </Grid>
            )}
          </Grid>
        </ContentStyle>
      </Container>
    </Page>
  );
}
export default PageBasic;
