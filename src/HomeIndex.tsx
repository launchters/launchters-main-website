import * as React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import ProductCTATalk from "./modules/views/ProductCTATalk";
import ProductCategories from "./modules/views/ProductCategories";
import ProductHero from "./modules/views/ProductHero";
import ProductHighlights from "./modules/views/ProductHighlights";
import ProductLimits from "./modules/views/ProductLimits";

function HomeIndex() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <div className="page-main-content">
        <ProductHighlights version="highlights" />
        <ProductLimits />
        <ProductCategories />
        {/* <ProductHowItWorks /> */}
        {/* <ProductCTA /> */}
        <ProductCTATalk />
      </div>
      <AppFooter />
    </React.Fragment>
  );
}

export default HomeIndex;
