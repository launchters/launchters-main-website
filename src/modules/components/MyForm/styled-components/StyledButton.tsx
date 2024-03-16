import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const textColor = "#2B2B2B";
const backgroundColor = "#03A9F4";
const hoverColor = "#ECECEC";
const hoverBackgroundColor = "#026FA2";
const boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.3)";

const StyledButton = styled(Button)({
  color: textColor,
  backgroundColor: backgroundColor,
  margin: "0 5px",
  boxShadow: boxShadow,

  "&:hover": {
    color: hoverColor,
    backgroundColor: hoverBackgroundColor,
    boxShadow: boxShadow,
  },
});

export default StyledButton;
