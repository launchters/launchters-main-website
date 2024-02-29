import Label from "@components/shared/Label";
import { ColorType, LabelVariant } from "@models/index";

// --------------------------------------------------

export const getLabel = (
  wording: string,
  color: ColorType = "info",
  variant: LabelVariant = "ghost"
) => (
  <Label variant={variant} color={color}>
    <span style={{ textTransform: "uppercase" }}>{wording}</span>
  </Label>
);
