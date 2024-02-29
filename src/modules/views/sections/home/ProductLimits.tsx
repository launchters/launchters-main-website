import KeyIcon from "@mui/icons-material/Key";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import BackgroundImageWithOverlay from "../../../components/BackgroundImageWithOverlay";
import Typography from "../../../components/Typography";

function ProductLimits() {
  return (
    <Stack
      direction="column"
      sx={{
        alignItems: "center",
        p: 0,
        m: 0,
        overflow: "hidden",
        display: "flex-column",
        position: "relative",
      }}
      id="product-limits"
      component="section"
    >
      <BackgroundImageWithOverlay
        opacity={0.328}
        src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=1280&q=80"
      />
      <Box sx={{ p: 4, maxWidth: 1024, zIndex: 2, my: 10 }}>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          // m="0 auto"
          // textAlign="center"
          // justifyContent="center"
          // alignContent="center"
          // justifyItems="center"
          // alignItems="center"
        >
          <KeyIcon
            fontSize="large"
            sx={{
              color: "whitesmoke",
              m: "0 auto",
              mr: { xs: "auto", md: 2 },
            }}
          />
          <Typography
            variant="h2"
            className="text-shadow-light--gold"
            sx={{
              my: 0,
              color: "whitesmoke",
              m: "0 auto",
              ml: { xs: "auto", md: 2 },
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            LIMITADO A UNOS POCOS ELEGIDOS.
          </Typography>
        </Stack>
        <Typography
          variant="h6"
          sx={{ mb: 4, fontSize: "1.2rem", color: "whitesmoke" }}
        >
          Resultados excepcionales no pueden ser para todo el mundo...
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: "1.2rem",
            color: "whitesmoke",
            opacity: 0.7,
          }}
        >
          Para lograr un rendimiento excepcional, necesito dar lo mejor de mi y
          trabajar 1-a-1 con los perfiles seleccionados. Por eso, he decidido
          limitar el número de personas con las que acepto trabajar bajo este
          modelo. Seleccionándolos yo personalmente si cumplen ciertos criterios
          y demuestran estar enormemente comprometidos con el plan.
        </Typography>
        {/* <ArrowNextSection toId={appConfig.sectionIds.categories}  offset={-40} /> */}
      </Box>
    </Stack>
  );
}

export default ProductLimits;
