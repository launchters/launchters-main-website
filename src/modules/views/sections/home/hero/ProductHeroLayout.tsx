import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import appConfig from "../../../../../config/app.config";
import ArrowNextSection from "../../../../components/ArrowNextSection";
import BackgroundImageWithOverlay from "../../../../components/BackgroundImageWithOverlay";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "53vh",
    minHeight: 400,
    maxHeight: 1300,
  },
}));

type Props = React.HTMLAttributes<HTMLDivElement> & {
  backgroundImage: string;
};

export default function ProductHeroLayout({
  backgroundImage,
  children,
}: Props) {
  const heroCtaLayout = (
    <Stack
      flexDirection="column"
      sx={{
        mt: 0,
        pt: 0,
        position: "absolute",
        bottom: "1rem",
        zIndex: 2,
        textAlign: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <ArrowNextSection toId={appConfig.sectionIds.highlights} offset={0} />
    </Stack>
  );

  return (
    <ProductHeroLayoutRoot>
      <Grid
        container
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: { xs: "92vh", md: "unset" },
            overflow: "hidden",
          }}
        >
          <Stack
            flexDirection="row"
            component="section"
            sx={{
              zIndex: 2,
              display: "flex-column",
            }}
          >
            {children}
          </Stack>

          {heroCtaLayout}

          {/* background and overlay */}
          <BackgroundImageWithOverlay {...{ src: backgroundImage }} />
        </Container>
      </Grid>
    </ProductHeroLayoutRoot>
  );
}
