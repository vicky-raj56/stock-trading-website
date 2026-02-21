import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5  mb-5 mt-5">
      <div className="row text-center">
        <div
          className="img"
          style={{ width: "1000px", height: "50vh", margin: "auto" }}
        >
          <img
            src="media/images/homeHero.png"
            alt="home"
            className="mb-5"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h2 className="mt-5 text-muted">Invest in everything</h2>
        <p style={{ fontSize: "1.25rem", opacity: "0.5" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="px-2 py-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            fontWeight: "500",
            opacity: "0.9",
            
          }}
        >
          <Link to={"/signup"} style={{color:"white"}}> Signup up for free</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
