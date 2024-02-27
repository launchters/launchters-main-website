import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "simplebar/src/simplebar.css";
import App from "./app/App";
import AppConfig from "./app/App.config";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

// ----------------------------------------------------------------------

export const appMainLayout = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

const container = document.getElementById("root")!;

if (!AppConfig.enableSSRHydration) {
  const root = createRoot(container);
  root.render(appMainLayout);
} else {
  // Server-side rendering with hydration
  // Unlike with createRoot, you don't need a separate root.render() call here.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const root = hydrateRoot(container, appMainLayout);
}

// If you want to enable client cache, register instead. // TODO Consider offline-first experience
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (AppConfig.enableReportWebVitals)
  reportWebVitals(() => {
    // DO SOMETHING
  });
