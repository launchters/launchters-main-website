import { Theme } from "react-hook-consent";
import { $TSFix } from "../modules/models/ts-fix.d";
import theme from "./theme";

const offerShort = {
  qty: "x2",
  keyword: "beneficios",
  time: "31 días",
};
const offerLong = {
  qty: "x5",
  keyword: "beneficios",
  time: "1 año",
};
const fullOfferSummary = `${offerShort.qty} tus ${offerLong.keyword} en ${offerShort.time} y ${offerLong.qty} en solo ${offerLong.time}`;

// ----

const appConfig = {
  storageUrls: {
    vslVideos: "https://launchters-vsl-videos.s3.eu-west-3.amazonaws.com",
  },
  enableDevCtaButton: true,
  offerLong,
  offerShort,
  header: { textAlign: "left" as $TSFix },
  footer: {
    headers: {
      sxProps: { color: `${theme.palette.primary.light}` },
    },
    links: {
      sxProps: {
        color: `${theme.palette.primary.contrastText}`,
        py: 0.5,
      },
    },
  },
  fullOfferSummary,
  appBarPosition: "relative" as
    | "relative"
    | "fixed"
    | "absolute"
    | "sticky"
    | "static"
    | undefined,
  sectionIds: {
    highlights: "product-highlights",
    limits: "product-limits",
    categories: "product-categories",
  },
  forms: {
    variant: "standard" as "standard" | "filled" | "outlined" | undefined,
  },
  cookies: {
    theme: "dark" as Theme | undefined,
    customHash: "my-custom-hash", // optional, e.g. when changing the options based on language
    hideSettings: true,
    services: [
      {
        id: "myid",
        name: "MyName",
        scripts: [
          // TODO poner el codigo de google analytics aqui
          { id: "external-script", src: "https://myscript.com/script.js" },
          {
            id: "inline-code",
            code: `console.log("Cookies accepted on", ${new Date().toISOString()});`,
          },
        ],
        cookies: [{ pattern: "cookie-name" }, { pattern: /regex/ }],
        localStorage: ["local-storage-key"],
        sessionStorage: ["session-storage-key"],
        mandatory: true,
      },
    ],
  },
};

export default appConfig;
