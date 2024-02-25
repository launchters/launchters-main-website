import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import * as React from "react";
import appConfig from "../../../config/app.config";
import ArrowNextSection from "../../components/ArrowNextSection";
import BackgroundImageWithOverlay from "../../components/BackgroundImageWithOverlay";

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
  return (
    <ProductHeroLayoutRoot>
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

        {/* Arrow */}
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
          {/* <Typography sx={{ opacity: 0.6, m: 2 }}>
            BAJA PARA SABER MÁS.
          </Typography> */}

          <ArrowNextSection toId={appConfig.sectionIds.highlights} offset={0} />
        </Stack>

        {/* background and overlay */}
        <BackgroundImageWithOverlay {...{ src: backgroundImage }} />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
