import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "../components/Typography";

const ctaTargetUrl = "https://gozenforms.com/YihRDrd7JjJm1DPKb1v4";

// const ctaButtonStyles = {
//   minWidth: 200,
//   border: "2px solid currentColor",
//   "&:hover": {
//     borderColor: "green",
//     color: "green",
//   },
// };

export default function CtaButton() {
  return (
    <Stack flexDirection="column">
      <Button
        color="secondary"
        variant="contained"
        size="small"
        component="a"
        href={ctaTargetUrl}
        target="_blank"
      >
        <Stack flexDirection="row" spacing={2}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1.2rem", md: "2em" } }}
          >
            Calcular cuánto puedo ganar
          </Typography>
        </Stack>
      </Button>
      <Typography
        variant="caption"
        sx={{ my: 0.5, textTransform: "uppercase" }}
      >
        con Alex Launchters como mi Socio de Crecimiento (Growth Partner)
      </Typography>
    </Stack>
  );
}
