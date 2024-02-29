import { Stack } from "@mui/material";
import * as React from "react";
import AppAppBar from "../sections/AppAppBar";
import AppFooter from "../sections/AppFooter";
import ProductCTASection from "../sections/home/ProductCTASection";
import ProductCategories from "../sections/home/ProductCategories";
import ProductHighlights from "../sections/home/ProductHighlights";
import ProductLimits from "../sections/home/ProductLimits";
import ProductHero from "../sections/home/hero/ProductHero";

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
        <ProductCTASection />
      </Stack>
      <AppFooter />
    </React.Fragment>
  );
}

export default HomeIndex;
