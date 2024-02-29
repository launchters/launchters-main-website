import { SxProps } from "@mui/material";
import Iconify from "@components/shared/Iconify";

// ---------------------------------------------------------
type DisplayIconProps = {
  name: string;
  size?: number;
  color?: string;
  sx?: SxProps<{}>;
};
export const displayIcon = ({
  name,
  size = 20,
  color = "default",
  sx,
}: DisplayIconProps) => (
  <Iconify
    icon={name}
    width={size}
    height={size}
    color={color}
    sx={{
      color,
      width: size,
      height: size,
      // overwrite properties if needed
      ...sx,
    }}
  />
);
