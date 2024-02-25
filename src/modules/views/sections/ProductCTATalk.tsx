import { ArrowDownward } from "@mui/icons-material";
import Container from "@mui/material/Container";
import CtaButton from "../../components/CtaButton";

function ProductCTATalk() {
  return (
    <Container
      id="product-cta-talk"
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 6,
      }}
    >
      {/* 
        <Typography variant="h6" component="p">
           ¿Quiéres informárte más? Publico contenido de valor gratuito y también sobre mis programas en: 
         </Typography>
         <Typography variant="h6" component="p">
           ¿Estás listo?
         </Typography>  */}

      <ArrowDownward sx={{ mb: 4 }} />
      <CtaButton />
    </Container>
  );
}

export default ProductCTATalk;
