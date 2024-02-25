import { Stack } from "@mui/material";
import * as React from "react";
import AppAppBar from "../sections/AppAppBar";
import AppFooter from "../sections/AppFooter";
import ProductCTATalk from "../sections/ProductCTATalk";
import ProductCategories from "../sections/ProductCategories";
import ProductHero from "../sections/ProductHero";
import ProductHighlights from "../sections/ProductHighlights";
import ProductLimits from "../sections/ProductLimits";

function HomeIndex() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <Stack className="page-main-content" sx={{ bgcolor: "secondary.light" }}>
        <ProductHighlights version="highlights" />
        <ProductLimits />
        <ProductCategories />
        {/* <ProductHowItWorks /> */}
        {/* <ProductCTA /> */}
        <ProductCTATalk />
      </Stack>
      <AppFooter />
    </React.Fragment>
  );
}

export default HomeIndex;
