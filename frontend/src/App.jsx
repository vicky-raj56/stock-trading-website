import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import ProductPage from "./landing_page/products/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import PricinngPage from "./landing_page/pricing/PricinngPage";
import SupportPage from "./landing_page/support/SupportPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricinngPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
