import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../components/OpenAccount";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

function HomePage() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <Footer/>
    </>
  );
}

export default HomePage;
