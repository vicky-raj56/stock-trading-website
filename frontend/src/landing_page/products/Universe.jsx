import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className=" text-center mt-5 mb-5">
          <h4 className="mt-5 mb-5 ">
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </h4>
          <h3 className="mt-5 mb-3">The Zerodha Universe</h3>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            alt=""
          />
          <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>{" "}
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="media/images/sensibullLogo.svg"
            alt=""
          />
          <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>{" "}
        <div className="col-4 p-5">
          <img
            style={{ width: "70%" }}
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt=""
          />
          <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="row">
          <div className="col-4 p-5">
            <img
              style={{ width: "70%" }}
              src="media/images/streakLogo.png"
              alt=""
            />
            <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>{" "}
          <div className="col-4 p-5">
            <img
              style={{ width: "70%" }}
              src="media/images/smallcaseLogo.png"
              alt=""
            />
            <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>{" "}
          <div className="col-4 p-5">
            <img
              style={{ width: "65%" }}
              src="media/images/dittoLogo.png"
              alt=""
            />
            <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.75" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary m-auto px-3 py-2 mb-5"
          style={{ width: "200px", fontWeight: "600", fontSize: "18px" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
