import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./config/theme";
import CookieConsentProvider from "./modules/providers/CookieConsentProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CookieConsentProvider>
        <AppRouter />
      </CookieConsentProvider>
    </ThemeProvider>
  );
}

export default App;
