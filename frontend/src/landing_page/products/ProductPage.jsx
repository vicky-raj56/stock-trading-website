import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import CombineLeftRightSection from "./CombineLeftRightSection";

function ProductPage() {
  return (
    <div>
     <Hero/>
     <CombineLeftRightSection/>
     
     <Universe/>
    </div>
  );
}

export default ProductPage;
