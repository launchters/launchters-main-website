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
};

export default appConfig;
