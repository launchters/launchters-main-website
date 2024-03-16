import { ButtonOwnProps, Typography } from "@mui/material";
import ButtonCustom from "../ButtonCustom";

type Props = {
  sx?: ButtonOwnProps["sx"];
};
export default function CtaForDevsOnly({ sx }: Props) {
  return (<></>||
    <ButtonCustom
      size="small"
      component="a"
      href={"/#/lm/profit-calc-gp-001"}
      variant="contained"
      color={"secondary" as ButtonOwnProps["color"]}
      sx={{ my: 2, py: 1.25, ...sx }}
    >
      <Typography
        variant="h2"
        component="span"
        sx={{ fontSize: { xs: "1.2rem", md: "2em" } }}
      >
        Ver WIP
      </Typography>
    </ButtonCustom>
  );
}
