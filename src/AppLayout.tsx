import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import "./App.css";
import theme from "./config/theme";
import CookieConsentProvider from "./modules/providers/CookieConsentProvider";

type Props = {
  children: ReactNode | ReactNode[];
};

export default function AppLayout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CookieConsentProvider>
        <Stack
          style={{
            display: "flex",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          {children}
        </Stack>
      </CookieConsentProvider>
    </ThemeProvider>
  );
}
