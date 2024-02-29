import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
// import privacyDoc from "./config/legal/privacy.md";
// import termsOfServiceDoc from "./config/legal/termsOfService.md";
// import LegalDoc from "./modules/views/pages/legal/LegalDoc";
import theme from "./config/theme";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
