import { es } from "date-fns/locale";
import moment from "moment-timezone";
import { DateLocalizer, momentLocalizer } from "react-big-calendar";
import packageJson from "../../package.json";

// -----------------------------------------------------------

const isProdEnv = process.env.NODE_ENV === "production";
const timeZone = "Europe/Madrid";
const culture = "es";

// ! Set calendar timezone and locale.
moment.tz.setDefault(timeZone).locale(culture);
const calendarLocalizer: DateLocalizer = momentLocalizer(moment);

const adminContactEmail = "no-reply@cookingstartups.com";
const baseApiUrl =
  (isProdEnv
    ? "https://NOT_PROVIDED.api.metacall.io"
    : process.env.PUBLIC_URL || "http://localhost:5001") + `/api`;

const AppConfig = {
  websiteDisabled: false,
  adminContactEmail,
  appTitle: "Forms By Steps",
  appVersion: packageJson.version,
  timeZone,
  calendarLocalizer,
  culture,
  datePickersAdapterLocale: es,
  copyrightNote: "Todos los derechos reservados.",
  accountsDefaultPassword: "123456789", // Should be in sync with the backend
  tableRowsPerPage: 100,
  footerLinks: [] as { path: string; text: string }[],
  apiEndpoints: {
    staff: `${baseApiUrl}/staff`,
  },
  formFieldsVariant: "outlined" as
    | "standard"
    | "filled"
    | "outlined"
    | undefined,
  csrfTokenHeaderName: "x-csrf-token",
  enableSSRHydration: false, // Server-side rendering
  enableReportWebVitals: false,
};

export default AppConfig;
