import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeIndex from "./HomeIndex";
import LegalGeneralTerms from "./LegalTermSheetsGeneral";
import LegalPrivacyPolicyAndUseOfCookies from "./LegalPrivacyPolicyAndUseOfCookies";
import LegalTermsOfService from "./LegalTermsOfService";
import theme from "./modules/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/legal/terms" element={<LegalTermsOfService />} />
          <Route
            path="/legal/privacy"
            element={<LegalPrivacyPolicyAndUseOfCookies />}
          />
          <Route
            path="/legal/term-sheets/general"
            element={<LegalGeneralTerms />}
          />
          <Route path="/" element={<HomeIndex />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
