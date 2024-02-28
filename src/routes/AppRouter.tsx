import { Route, HashRouter as Router, Routes } from "react-router-dom";
// import privacyDoc from "../config/legal/privacy.md";
// import termsOfServiceDoc from "../config/legal/termsOfService.md";
// import LegalDoc from "../modules/views/pages/legal/LegalDoc";
import HomeIndex from "../modules/views/pages/HomeIndex";
import GeneralTermSheet from "../modules/views/pages/legal/contracts/GeneralTermSheet";

export default function AppRouter() {
  return (
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
  );
}
