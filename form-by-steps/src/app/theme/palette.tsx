import { Color } from "@mui/material";
import { alpha, Palette, TypeBackground } from "@mui/material/styles";
import {
  PaletteAugmentColorOptions,
  PaletteColor,
} from "@mui/material/styles/createPalette";
import {
  ChartColorsPalette,
  ColorPaletteGradients,
  ColorPaletteVariant,
} from "@models/types/ThemeProps";

// -----------------------------------------------------------------------

const createGradient = (color1: string, color2: string): string =>
  `linear-gradient(to bottom, ${color1}, ${color2})`;

// SETUP COLORS
const GREY: Color = {
  50: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  A100: "#AF7A50",
  A200: "#739DBF",
  A400: "#5F97D3",
  A700: "#1B77E4",
};

const PRIMARY: ColorPaletteVariant = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY: ColorPaletteVariant = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO: ColorPaletteVariant = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS: ColorPaletteVariant = {
  lighter: "#BEF26B",
  light: "#79D966",
  main: "#6fc45d",
  dark: "#5FAB50",
  darker: "#4A853E",
  contrastText: GREY[800],
};

const WARNING: ColorPaletteVariant = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR: ColorPaletteVariant = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS: ColorPaletteGradients = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS: ChartColorsPalette = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

export type CustomPalette = Palette & {
  background: TypeBackground & { neutral: string };
} & { gradients: ColorPaletteGradients } & { chart: ChartColorsPalette };

const paletteMode = "light";
const palette: CustomPalette = {
  common: {
    black: "#030303",
    white: "#fcfcfc",
  },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    selectedOpacity: 0.25, // Active Nav Items
    focusOpacity: 0.25,
    activatedOpacity: 0.25,
  },
  mode: paletteMode,
  contrastThreshold: 1,
  tonalOffset: { light: 1, dark: 0 },
  getContrastText: (background: string) =>
    paletteMode === "light" ? "#333333" : "#cccccc",
  augmentColor: (options: PaletteAugmentColorOptions) =>
    ({
      light: "#cccccc",
      main: "teal",
      dark: "#333333",
      contrastText: "deepOrange",
    } as PaletteColor),
};

export default palette;
