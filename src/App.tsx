import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./config/theme";
import AppRouter from "./routes/AppRouter";
import CookieConsentProvider from "./modules/providers/CookieConsentProvider";

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
