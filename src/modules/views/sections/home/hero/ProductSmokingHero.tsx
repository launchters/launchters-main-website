import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import StyledButton from "../../../../components/StyledButton";
import Typography from "../../../../components/Typography";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <StyledButton
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </StyledButton>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography>
      <Box
        component="img"
        src="https://mui.com/static/themes/onepirate/productBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
