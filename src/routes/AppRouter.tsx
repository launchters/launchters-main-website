import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ProfitCalcGPLeadMagnetForm from "../modules/components/MyForm/ProfitCalcGPLeadMagnetForm";
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
        <Route path="/" element={<HomeIndex />} />
        <Route
          path="/legal"
          children={
            <>
              <Route
                path="terms"
                element={
                  <LegalDoc
                    title="Términos del Servicio"
                    // termsOfServiceDoc
                    doc={dummyDoc}
                  />
                }
              />
              <Route
                path="privacy"
                element={
                  <LegalDoc
                    title="Política de Privacidad y Uso de Cookies"
                    //  doc={privacyDoc}
                    doc={dummyDoc}
                  />
                }
              />
              <Route
                path="term-sheets"
                children={
                  <>
                    <Route
                      path="general-conditions"
                      element={
                        <LegalDoc
                          title="Condiciones Generales de Contratación (CCGG)"
                          // doc={contractGeneralTermsDoc}
                          doc={dummyDoc}
                        />
                      }
                    />
                  </>
                }
              />
            </>
          }
        />
        <Route
          path="/lm"
          children={
            <Route
              path="profit-calc-gp-001"
              element={<ProfitCalcGPLeadMagnetForm />}
            />
          }
        />
      </Routes>
    </Router>
  );
}
