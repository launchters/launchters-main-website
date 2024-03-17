import { ButtonOwnProps } from "@mui/material";
import StyledButton from "../StyledButton";

export default function CtaForDevsOnly({ ...props }: ButtonOwnProps) {
  return (
    <StyledButton
      {...props}
      component="a"
      href={"/#/lm/profit-calc-gp-001"}
      color="secondary"
    >
      Ver WIP
    </StyledButton>
  );
}
