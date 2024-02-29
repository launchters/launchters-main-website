import { Route, Routes } from "react-router-dom";
import "../App.css";
// import privacyDoc from "../config/legal/privacy.md";
// import termsOfServiceDoc from "../config/legal/termsOfService.md";
import HomeIndex from "../modules/views/pages/HomeIndex";
import LegalDoc from "../modules/views/pages/legal/LegalDoc";
import { HashRouter as Router } from "react-router-dom";

const dummyDoc = "# Heck Yes\n\nThis is great!";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* <Route
        path="/legal/terms"
        element={
          <LegalDoc title="Términos del Servicio" doc={termsOfServiceDoc} />
        }
      />
      <Route
        path="/legal/privacy"
        element={
          <LegalDoc
            title="Política de Privacidad y Uso de Cookies"
            doc={privacyDoc}
          />
        }
      /> */}
        {/* <Route
        path="/legal/term-sheets/general"
        element={
          <LegalDoc
            title="Condiciones Generales (CCGG)"
            doc={contractGeneralTermsDoc}
          />
        }
      /> */}

        <Route
          path="/legal/privacy"
          element={
            <LegalDoc
              title="Política de Privacidad y Uso de Cookies"
              doc={dummyDoc}
            />
          }
        />

        <Route path="/" element={<HomeIndex />} />
      </Routes>
    </Router>
  );
}
