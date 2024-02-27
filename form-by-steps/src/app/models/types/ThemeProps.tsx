import { Palette as MuiPalette, Theme, TypeAction } from "@mui/material";
import { DynamicObject } from "./generics";

// ----------------------------------------------------------------

export type ColorPaletteVariant = {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type ColorPaletteGradients = {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};

export type ChartColorPalette = [string, string, string, string];

export type ChartColorsPalette = {
  violet: ChartColorPalette;
  blue: ChartColorPalette;
  green: ChartColorPalette;
  yellow: ChartColorPalette;
  red: ChartColorPalette;
};

export type Palette = MuiPalette & {
  background: {
    neutral: string;
  };
  action: TypeAction & {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
    selectedOpacity: number;
    focusOpacity: number;
    activatedOpacity: number;
  };
};

export type ThemeProps = Theme & {
  customShadows: DynamicObject<string>;
  palette: Palette & { chart: DynamicObject<any[]> };
};
