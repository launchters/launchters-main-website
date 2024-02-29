import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "../App.css";
import HomeIndex from "../modules/views/pages/HomeIndex";
import LegalDoc from "../modules/views/pages/legal/LegalDoc";
// import privacyDoc from "../config/legal/privacy.md";
// import termsOfServiceDoc from "../config/legal/termsOfService.md";

const dummyDoc =
  "# Próximamente\n\nEste documento no está disponible ahora mismo";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/legal/terms"
          element={<LegalDoc title="Términos del Servicio" doc={dummyDoc} />}
        />
        <Route
          path="/legal/privacy"
          element={
            <LegalDoc
              title="Política de Privacidad y Uso de Cookies"
              doc={dummyDoc}
            />
          }
        />
        <Route
          path="/legal/term-sheets/general"
          element={
            <LegalDoc
              title="Condiciones Generales (CCGG)"
              // doc={contractGeneralTermsDoc}
              doc={dummyDoc}
            />
          }
        />

        <Route path="/" element={<HomeIndex />} />
        <Route path="/form" element={<h1>Todo va bien!</h1>} />
        {/* 
        // ! Sustituye la ruta /form por /lm/profit-calc-gp-001 
        */}
      </Routes>
    </Router>
  );
}
