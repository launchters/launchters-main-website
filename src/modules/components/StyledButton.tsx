import { Typography } from "@mui/material";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import * as React from "react";
import theme from "../../config/theme";

const StyledButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding: theme.spacing(2, 4),
  margin: theme.spacing(0, 1),
  fontSize: theme.typography.pxToRem(9),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "none",
  "&:active, &:focus": {
    boxShadow: "none",
  },
  // ...(size === "small" && {
  //   padding: theme.spacing(1, 3),
  //   fontSize: theme.typography.pxToRem(10),
  // }),
  // ...(size === "large" && {
  //   padding: theme.spacing(2, 5),
  //   fontSize: theme.typography.pxToRem(12),
  // }),
}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function StyledButton<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) {
  return (
    <StyledButtonRoot
      {...props}
      {...{
        // TODO: This can be improved.
        variant: props.variant ?? "contained",
        color: props.color ?? "primary",
      }}
    >
      <Typography
        variant="h2"
        component="span"
        sx={{
          // color: props.color === "secondary" ? "blue" : "whitesmoke",
          // color: props.color === "secondary" ? "blue" : "whitesmoke",

          color:
            props.variant === "outlined"
              ? theme.palette.primary.main
              : "whitesmoke",

          // color:
          // props.variant === "contained" && props.color === "secondary"
          //   ? "whitesmoke"
          //   : "red", // TODO: This can be improved too.
          fontSize: { xs: "1.2rem", md: "2em" },
        }}
      >
        {props.children}
      </Typography>
    </StyledButtonRoot>
  );
}

export default StyledButton;
