import React from "react";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./AppLayout";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </HelmetProvider>
    </React.StrictMode>
  );
}

export default App;
