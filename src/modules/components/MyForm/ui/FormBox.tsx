import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backdropFilter: "blur(10px)",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 15px 30px rgba(4, 75, 217, 0.3)`,
  width: "50%",
  margin: "0 auto",
}));

export default FormBox;
