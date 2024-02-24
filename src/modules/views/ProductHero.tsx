import { Container, TypographyOwnProps } from "@mui/material";
import appConfig from "../../config";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://plus.unsplash.com/premium_photo-1664300162579-6a4f1084dd63?auto=format&fit=crop&w=1400";

const titleProps: TypographyOwnProps = {
  color: "inherit",
  align: "center",
  variant: "h1",
  sx: {
    fontSize: "2.618rem",
    textAlign: "left",
  },
};
const subtitleProps: TypographyOwnProps = {
  ...titleProps,
  variant: "h2",
  my: 1,
  fontWeight: 600,
  letterSpacing: "0.1em",
  sx: {
    ...titleProps.sx,
    fontSize: "1.2rem",
    opacity: 0.5,
    fontWeight: 100,
    textAlign: "left",
    textTransform: "unset",
  },
};
// const trustProps: TypographyOwnProps = {
//   ...subtitleProps,
//   variant: "h3",
//   mt: 0,
//   mb: 0,
//   fontWeight: 400,
//   sx: { ...subtitleProps.sx, textDecoration: "italic" },
// };

export default function ProductHero() {
  return (
    <ProductHeroLayout {...{ backgroundImage }}>
      <Container
        sx={{
          zIndex: 1,
          display: "flex-column",
        }}
      >
        <Typography {...titleProps}>
          <mark>Escala {appConfig.offerLong.qty}</mark>
          <span className="text-shadow">
            {` tus ${appConfig.offerLong.keyword} `}
          </span>
          <span className="text-shadow">
            {`en ${appConfig.offerLong.time} `}
          </span>
        </Typography>
        <Typography {...titleProps} className="text-shadow block page-subtitle">
          <span className="small"> como Coach.</span>
        </Typography>
        <Typography {...subtitleProps} className="block">
          Eligiendo al Growth Partner (Socio de Crecimiento) adecuado
        </Typography>
        <Typography {...subtitleProps} className="block">
          que aplique <strong>estrategias testadas</strong>
        </Typography>
        {/* <Typography {...trustProps} mb={4}>
          <strong>U.S. $7.800 Millones</strong> generados con{" "}
          <strong>estrategias testadas</strong>.
        </Typography> */}
        {/* <Typography
          {...subtitleProps}
          align="center"
          justifyContent="center"
          justifyItems="center"
          justifySelf="center"
          alignContent="center"
          alignItems="center"
          alignSelf="center"
        >
          Eligiendo al&nbsp;
          <strong className="relative">
            <u>Socio de Crecimiento</u>
            <span className="growthPartnerTag">(Growth Partner)</span>
          </strong>
          &nbsp;adecuado.
        </Typography> */}
        {/* 
        <Typography
          variant="body1"
          color="inherit"
          align="center"
          sx={{
            mt: 6,
            letterSpacing: "0.2em",
            fontWeight: 400,
            fontSize: "1.25rem",
          }}
          className="text-shadow"
        >
          Aplicando estrategias probadas que
          <br />
          han generado más de US <u>$7.800 Millones</u> en el extranjero.
        </Typography> */}
        {/* <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ minWidth: 200, mt: 15 }}
          >
          ¿Cómo elegir al Growth Partner adecuado?
        </Button> */}
      </Container>
    </ProductHeroLayout>
  );
}
