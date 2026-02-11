import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center" style={{ margin: "auto" }}>
        <h1 className="mt-5">Zerodha Products</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <p className="p-2  fs-5 mb-5 fs-5" >
          Check out our{" "}
          <a href="#" className="">
            investment offerings<i className="fa-solid fa-arrow-right-long " ></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
