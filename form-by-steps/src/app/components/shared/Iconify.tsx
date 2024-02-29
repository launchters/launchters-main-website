import { Icon } from "@iconify/react";
import { Box, SxProps } from "@mui/material";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  color: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

type Props = {
  icon: string;
  width: number;
  height: number;
  sx?: SxProps;
  color?: string;
};

// ----------------------------------------------------------------------

function Iconify({ icon, sx, color, width, height }: Props) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ ...sx }}
      color={color}
      width={width}
      height={height}
    />
  );
}
export default Iconify;
