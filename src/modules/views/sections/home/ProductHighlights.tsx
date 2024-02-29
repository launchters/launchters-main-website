import { Grid, Stack, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
// import { Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import appConfig from "../../../../config/app.config";
import ArrowNextSection from "../../../components/ArrowNextSection";
import Typography from "../../../components/Typography";

// const item: SxProps<Theme> = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   px: 5,
// };

type BenefitListItem = {
  key: string;
  icon: string;
  title: ReactNode;
  text: ReactNode;
};
type Props = {
  version: "highlights" | "list" | "main-benefits";
};

// ----
const benefitListItems: BenefitListItem[] = [
  // {
  //   key: "offer-promise",
  //   icon: `💲`,
  //   title: `Estrategias probadas que han generado U.S. $7.800 Millones`,
  //   text: `para diversos clientes en el extranjero. Empezarás a ver resultados a corto plazo, siendo sostenible al largo plazo.`,
  // },
  {
    key: "offer-objection",
    icon: `🆓`,
    title: `Sin inversión (0€) y con sólo 3-7 horas/semana.`,
    text: `Ya que seré tu Socio de Crecimiento, cobrando un % de las ganancias que genere para ti. Sin riesgos económicos ni secuestrar tu tiempo. `,
  },
  {
    key: "secondary-benefit-2",
    icon: `🚀`,
    title: `Gana más trabajando menos.`,
    text: `Transforma tu negocio haciéndolo más rentable, escalable y eficiente.`,
  },
  {
    key: "secondary-benefit-1",
    icon: `🤩`,
    title: "Mejorando tu marca personal",
    text: `Convertirás seguidores en fans, desbloqueando nuevas oportunidades.`,
  },
];

// ----
const itemTitleStyle = { my: 2, fontSize: "1.2rem", fontWeight: 600 };
const itemDescriptionStyle = {
  my: 2,
  fontSize: "1rem",
  fontWeight: 400,
  textTransform: "unset",
};
const componentStyles: SxProps = {
  listStyle: "none",
  m: 0,
  px: 0,
  py: 4,
  justifyContent: "space-between",
};
const listItemStyle: SxProps = {
  fontSize: "1.1rem",
  fontWeight: 500,
  textTransform: "unset",
};
const titleTypographyProps = {
  variant: "h2",
  component: "h2",
  sx: { fontSize: "1.2rem", fontWeight: 600 },
};

export default function ProductHighlights({ version }: Props) {
  const id = appConfig.sectionIds.highlights;

  const arrowNext = (
    <ArrowNextSection toId={appConfig.sectionIds.limits} offset={-40} />
  );

  switch (version) {
    case "highlights":
      return (
        <Stack
          flexDirection="column"
          {...{ id }}
          sx={{
            display: "flex",
            position: "relative",
            overflow: "hidden",
            bgcolor: "secondary.light",
            py: 6,
          }}
        >
          <Box component="section">
            <Box
              component="img"
              src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
              alt="curvy lines"
              sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
            />
            <Grid container spacing={4} justifyContent="space-evenly" px={2}>
              {benefitListItems.map((item) => {
                return (
                  <Grid item xs={12} md={3} key={item.key}>
                    <Box>
                      <Box sx={{ height: 55, fontSize: "3rem" }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h3" sx={itemTitleStyle}>
                        {item.title}
                      </Typography>
                      <Typography variant="h4" sx={itemDescriptionStyle}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/* {arrowNext} */}
        </Stack>
      );
    case "main-benefits":
      return (
        <Box component="section" {...{ id }}>
          <Grid
            container
            flexDirection="row"
            flexWrap="wrap"
            sx={{ mt: 0, pt: 0 }}
          >
            <Grid item xs={12}>
              <Grid
                container
                flexDirection="row"
                component="ul"
                alignContent="center"
                textAlign="center"
                spacing={2}
                sx={{ ...componentStyles, width: "100%", pt: 0 }}
              >
                {benefitListItems.map((item) => (
                  <Grid item xs={3} component="li">
                    <Grid container flexDirection="column" spacing={2}>
                      {/* LIST ITEM */}
                      <Grid item>
                        <Typography sx={{ fontSize: "3rem" }}>
                          {item.icon}
                        </Typography>
                      </Grid>
                      <Grid item component="li">
                        <Typography
                          {...{ titleTypographyProps }}
                          sx={listItemStyle}
                        >
                          {item.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="p"
                sx={{ fontSize: "1rem", mt: 2, mb: 4, display: "inline-block" }}
              >
                <strong>🤝 Seré tu socio de Crecimiento:</strong>Gana más
                trabajando menos. Mejora tu calidad de vida y tus finanzas,
                logrando llegar más lejos juntos.
              </Typography>
            </Grid>
          </Grid>
          {arrowNext}
        </Box>
      );
    case "list":
      return (
        <Box component="section" {...{ id }}>
          <Grid
            container
            flexDirection="column"
            spacing={2}
            component="ul"
            sx={{ ...componentStyles, margin: "0 auto", maxWidth: "800px" }}
          >
            <Grid item component="li" sx={{ py: 0.5 }}>
              <Typography variant="h2" component="h2" sx={listItemStyle}>
                💲🚀 Aumentarás {appConfig.fullOfferSummary}
                &nbsp;
                <u>con estrategias probadas</u>.
              </Typography>
            </Grid>
            <Grid item component="li" sx={{ py: 0.5 }}>
              <Typography>
                🆓 <u>SIN INVERSIÓN</u> ni gastos anticipados.
              </Typography>
            </Grid>
            <Grid item component="li" sx={{ py: 0.5 }}>
              <Typography>
                📶 Hare que tu modelo de negocio sea{" "}
                <u>más escalable y rentable</u>.
              </Typography>
            </Grid>
            <Grid item component="li" sx={{ py: 0.5 }}>
              <Typography>
                🤩 <u>Mejora tu marca personal</u> e imagen durante el proceso.
              </Typography>
            </Grid>
            <Grid item component="li" sx={{ py: 0.5 }}>
              <Typography>
                🤝 Me convierto en tu socio de Crecimiento.{" "}
                <u>Logrando mucho más juntos</u> que separados. Podrás{" "}
                <u>trabajar menos pero ganando más</u>. Mejorando tu calidad de
                vida.
              </Typography>
            </Grid>
          </Grid>
          {arrowNext}
        </Box>
      );
    default:
      return <div>Error: Invalid.</div>;
  }
}
