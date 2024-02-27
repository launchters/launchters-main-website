import { $TSFixMeLater, DynamicObject, ThemeProps } from "@models/index";
import { CssBaseline } from "@mui/material";
// import { esES as coreesES } from "@mui/material/locale";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
// import { esES as datePickersES } from "@mui/x-date-pickers/locales";
import React, { useMemo } from "react";
import componentsOverride from "./overrides";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

// -----------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

// -----------------------------------------------------------

function ThemeProvider({ children }: Props) {
  const themeOptions: DynamicObject<$TSFixMeLater> = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  const localizationOptions: object[] = [
    // use locale for UI texts (start, next month, ...)
    // coreesES,
    // datePickersES,
  ];

  const theme: ThemeProps = createTheme(
    themeOptions,
    ...localizationOptions
  ) as ThemeProps;
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
export default ThemeProvider;
