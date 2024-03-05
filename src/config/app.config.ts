import { Theme } from "react-hook-consent";

const offerShort = {
  qty: "x2",
  keyword: "ingresos",
  time: "31 días",
};
const offerLong = {
  qty: "x5",
  keyword: "ingresos",
  time: "1 año",
};
const fullOfferSummary = `${offerShort.qty} tus ${offerLong.keyword} en ${offerShort.time} y ${offerLong.qty} en solo ${offerLong.time}`;

// ----

const appConfig = {
  offerLong,
  offerShort,
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
