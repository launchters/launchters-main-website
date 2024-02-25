import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import ArrowNextSection from "../components/ArrowNextSection";
import ImageWithOverlay from "../components/ImageWithOverlay";
import Typography from "../components/Typography";

const onHoverOverlayOpacity = 0.33;
const launchtersChartPath = "/progreso-programas-gp.jpg";

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  width: "100%",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  minHeight: "240px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
    cursor: "pointer",
  },
  "&:hover .imageBackdrop": {
    opacity: onHoverOverlayOpacity,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  // "&:hover .imageTitle": {
  //     border: "4px solid currentColor",
  // },
  "&:hover .imageDescription, &:hover .imageSubtitle, &:hover .comingSoonTag": {
    display: "block",
    zIndex: 2,
    color: "whitesmoke",
  },
  "& .imageDescription, & .imageSubtitle, & .comingSoonTag": {
    display: "none",
  },
  "& .imageCellBox .comingSoonTag": {
    position: "relative",
    textAlign: "center",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    color: "goldenrod",
    fontStyle: "italic",
    zIndex: 3,
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const imageCells = [
  {
    key: "start-bootcamp-program",
    url: "https://images.pexels.com/photos/12585940/pexels-photo-12585940.jpeg?auto=format&fit=crop&w=1240&q=80",
    // url: "https://images.unsplash.com/photo-1497005367839-6e852de72767?auto=format&fit=crop&w=1240&q=80", // https://images.unsplash.com/photo-1483794344563-d27a8d18014e
    // url: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1240&q=80",
    title: `1. "START" bootcamp`,
    subtitle: "Pasarás de 0 a 3.000 € al mes (MRR) como coach en 15 días.",
    description: "Haz de tu pasión, tu nueva profesión.",
    cols: 3,
    comingSoon: true,
  },
  {
    key: "growth-partner-program",
    // url: "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=1240&q=80",
    // url: "https://plus.unsplash.com/premium_photo-1661635988518-bbf686a69d39?auto=format&fit=crop&w=1240&q=80",
    url: "https://images.pexels.com/photos/2748757/pexels-photo-2748757.jpeg?auto=format&fit=crop&w=1240&q=80",
    title: "2. Growth Partner",
    subtitle: "Pasarás de 3k a 15k al mes en 1 año. Sin inversión",
    description:
      "Convirtiéndome en tu socio de crecimiento, multiplicaremos x5 tus ingresos de coaching sin inversión inicial en solo 1 año... Haciendo tu modelo de negocio más escalable y aplicando embudos de venta optimizados y lanzamientos.",
    cols: 6,
    comingSoon: false,
  },
  {
    key: "scale-program",
    // url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1240",
    url: "https://plus.unsplash.com/premium_photo-1682310178386-1d20be620733?auto=format&fit=crop&w=1240&q=80",
    title: "3. Scale",
    subtitle: "desde 15K/mes al Valhalla.",
    description:
      "Aumenta tu tráfico cualificado progresivamente, de manera eficiente y controlada. Llevándote a puntos que ni creías capaz de alcanzar.",
    cols: 3,
    comingSoon: true,
  },
];

export default function ProductCategories() {
  return (
    <Stack flexDirection="column" sx={{ mb: 4 }}>
      <ArrowNextSection toId="product-categories" offset={-40} />
      <Box component="section" id="product-categories" sx={{ mt: 4 }}>
        {/* ----- SECTION TITLE -----  */}
        <Typography variant="h4" marked="center" align="center" component="h2">
          Mis programas únicos en España
        </Typography>
        {/* ----- SECTION SUBTITLE -----  */}
        <Typography
          variant="body1"
          marked="center"
          align="center"
          component="h2"
          sx={{ m: 2 }}
        >
          {"Impulso a "}
          <strong>
            <mark>coaches y mentores SELECCIONADOS por mí</mark>
          </strong>
          {" a escalar sus negocios e imagen de marca personal"}
          <br />
          {
            " desde 0 a +31.000€/mes de ingresos a través de diferentes programas."
          }
        </Typography>

        {/* 
      ----- DISCLAIMER -----
      */}
        <Box sx={{ mt: 0, mb: 0, pb: 0 }}>
          <Typography
            variant="subtitle1"
            component="p"
            className="results-disclaimer"
            sx={{
              color: "#ccc",
              opacity: 0.5,
              mt: 0.2,
              fontStyle: "italic",
              fontSize: "0.85rem",
              textAlign: "right",
            }}
          >
            Resultados no garantizados, varían individualmente. Resultados
            pasados no garantizan resultados futuros. Cifras orientativas no
            vinculantes.
          </Typography>
        </Box>
        {/* 
      ----- IMAGE'S GRID -----
      */}
        <Grid container className="imageCellBox">
          {imageCells.map((cell) => (
            <Grid item xs={12} md={cell.cols} key={cell.key}>
              <ImageIconButton key={cell.title}>
                <ImageWithOverlay
                  imgUrl={cell.url}
                  isDisabled={!!cell.comingSoon}
                />
                <Stack flexDirection="column" sx={{ m: 0, p: 2 }}>
                  <Typography
                    component="h3"
                    variant="h4"
                    color="inherit"
                    className="imageTitle text-shadow"
                  >
                    {cell.title}
                    {/* <div className="imageMarked" /> */}
                  </Typography>
                  {cell.subtitle && (
                    <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className="imageSubtitle"
                    >
                      {cell.subtitle}
                    </Typography>
                  )}
                  {cell.description && (
                    <Typography
                      component="h6"
                      variant="body1"
                      color="inherit"
                      className="imageDescription"
                    >
                      {cell.description}
                      {/* <div className="imageMarked" /> */}
                    </Typography>
                  )}

                  {cell.comingSoon && (
                    <Typography
                      component="span"
                      variant="caption"
                      className="comingSoonTag"
                    >
                      (Próximamente)
                    </Typography>
                  )}
                </Stack>
              </ImageIconButton>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="overline" sx={{ color: "#777" }}>
              Pasa el ratón por encima de las imágenes para saber más detalles.
            </Typography>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2} sx={{ mt: 0, mb: 0, pb: 0 }}>
          <Grid item xs={12}>
            <img
              style={{ margin: 2, maxWidth: "100%" }}
              width={1200}
              src={launchtersChartPath}
              alt="Profit Scale Chart with Launchters' programs."
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
