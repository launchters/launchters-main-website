import KeyIcon from "@mui/icons-material/Key";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function ProductLimits() {
  return (
    <Stack
      direction="column"
      sx={{ alignItems: "center", p: 0, m: 0 }}
      id="product-limits"
    >
      <Box
        component="section"
        sx={{
          p: 0,
          m: 0,
          display: "flex",
          overflow: "hidden",
          bgcolor: "secondary.light",
          background:
            "salmon url('https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=1280&q=80') no-repeat 100% 15%",
        }}
      >
        <Container
          sx={{
            mt: 5,
            mb: 15,
            display: "flex-column",
            position: "relative",
          }}
        >
          <KeyIcon fontSize="large" />
          <Typography
            variant="h2"
            className="text-shadow-light"
            sx={{ my: 0, fontSize: "1.8rem", color: "whitesmoke" }}
          >
            LIMITADO A UNOS POCOS ELEGIDOS.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontSize: "1.2rem" }}>
            Resultados excepcionales no pueden ser para todo el mundo...
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: "1.2rem" }}>
            Para lograr un rendimiento excepcional, necesito dar lo mejor de mi
            y trabajar 1-a-1 con los perfiles seleccionados. Por eso, he
            decidido limitar el número de personas con las que acepto trabajar
            bajo este modelo. Seleccionándolos yo personalmente si cumplen
            ciertos criterios y demuestran estar enormemente comprometidos con
            el plan.
          </Typography>
        </Container>
      </Box>
      {/* <ArrowNextSection toId={appConfig.sectionIds.categories} /> */}
    </Stack>
  );
}

export default ProductLimits;
