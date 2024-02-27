import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import privacyDoc from "./config/legal/privacy.md";
// import termsOfServiceDoc from "./config/legal/termsOfService.md";
// import LegalDoc from "./modules/views/pages/legal/LegalDoc";
import theme from "./config/theme";
import HomeIndex from "./modules/views/pages/HomeIndex";
import GeneralTermSheet from "./modules/views/pages/legal/contracts/GeneralTermSheet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* <Route
            path="/legal/terms"
            element={<LegalDoc doc={termsOfServiceDoc} />}
          />
          <Route
            path="/legal/privacy"
            element={<LegalDoc doc={privacyDoc} />}
          /> */}
          {/* // TODO AGREGAR RUTA AQUI */}
          <Route
            path="/legal/term-sheets/general"
            element={<GeneralTermSheet />}
          />
          <Route path="/" element={<HomeIndex />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
