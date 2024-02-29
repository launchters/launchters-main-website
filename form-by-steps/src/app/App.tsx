import { Provider } from "react-redux";
import ScrollToTop from "./components/shared/layout/ScrollToTop";
import SnackbarAlert from "./components/shared/notifications/SnackbarAlert";
import Router from "./routes/routes";
import store from "./state/store";
import ThemeProvider from "./theme";

// ----------------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Provider store={store}>
        <SnackbarAlert />
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
