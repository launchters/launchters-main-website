import { Box } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { $TSFixMeLater, DynamicObject, ThemeProps } from "@models/index";

// ----------------------------------------------------------------------
type RootStyleProps = {
  theme: ThemeProps;
  ownerState: {
    color: string;
    variant: string;
  };
};

const RootStyle = styled("span")(({ theme, ownerState }: RootStyleProps) => {
  const isLight = theme.palette.mode === "light";
  const { color, variant } = ownerState;

  const styleFilled = (color: string) => ({
    color: (theme.palette as DynamicObject<any>)[color].contrastText,
    backgroundColor: (theme.palette as DynamicObject<any>)[color].main,
  });

  const styleOutlined = (color: string) => ({
    color: (theme.palette as DynamicObject<any>)[color].main,
    backgroundColor: "transparent",
    border: `1px solid ${(theme.palette as DynamicObject<any>)[color].main}`,
  });

  const styleGhost = (color: string) => ({
    color: (theme.palette as DynamicObject<any>)[color][
      isLight ? "dark" : "light"
    ],
    backgroundColor: alpha(
      (theme.palette as DynamicObject<any>)[color].main,
      0.16
    ),
  });

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 6,
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    ...(color !== "default"
      ? {
          ...(variant === "filled" && { ...styleFilled(color) }),
          ...(variant === "outlined" && { ...styleOutlined(color) }),
          ...(variant === "ghost" && { ...styleGhost(color) }),
        }
      : {
          ...(variant === "outlined" && {
            backgroundColor: "transparent",
            color: theme.palette.text.primary,
            border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          }),
          ...(variant === "ghost" && {
            color: isLight
              ? theme.palette.text.secondary
              : theme.palette.common.white,
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          }),
        }),
  };
});

// ---------------------- END ROOT STYLE --------------------------------

// ----------------------------------------------------------------------

Label.propTypes = {
  children: PropTypes.node,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  sx: PropTypes.object,
};

type LabelProps = {
  children: $TSFixMeLater;
  color: $TSFixMeLater;
  variant: $TSFixMeLater;
  startIcon: $TSFixMeLater;
  endIcon: $TSFixMeLater;
  sx: $TSFixMeLater;
};

// ----------------------------------------------------------------------

function Label({
  children,
  color = "default",
  variant = "ghost",
  startIcon,
  endIcon,
  sx,
}: LabelProps) {
  const theme: ThemeProps = useTheme();

  const style = {
    width: 16,
    height: 16,
    "& svg, img": { width: 1, height: 1, objectFit: "cover" },
  };

  return (
    <RootStyle
      theme={theme}
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}
      {children}
      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  );
}
export default Label;
