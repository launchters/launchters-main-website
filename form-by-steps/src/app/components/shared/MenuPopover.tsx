import { Popover } from "@mui/material";
import { alpha, styled, SxProps, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { $TSFixMeLater, ThemeProps } from "@models/index";

// ----------------------------------------------------------------------

const ArrowStyle = styled("span")(({ theme }: { theme: ThemeProps }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

// ----------------------------------------------------------------------

MenuPopover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any.isRequired, // TODO $TSFixMe
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  onClose: PropTypes.func,
};

type Props = {
  open: boolean;
  anchorEl: $TSFixMeLater;
  children: $TSFixMeLater;
  sx: SxProps;
  onClose: () => void;
};

// ----------------------------------------------------------------------

function MenuPopover({ children, sx, open, anchorEl, onClose }: Props) {
  const theme: ThemeProps = useTheme();

  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          overflow: "inherit",
          ...sx,
        },
      }}
      {...{
        open,
        anchorEl,
        onClose,
      }}
    >
      <>
        <ArrowStyle className="arrow" theme={theme} />
        {children}
      </>
    </Popover>
  );
}
export default MenuPopover;
