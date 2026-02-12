import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-5 mb-5 ">
      <div className="row text-center ">
        <h2 className="fw-semibold">Charges</h2>

        <h5 className="text-muted mb-5">List of all charges and taxes</h5>
      </div>
      <div className="row mt-5 d-flex justify-content-between  align-items-center p-4 text-center">
        <div className="col-4   ">
          <img
            style={{ width: "80%" }}
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
          />
          <div className="">
            <h2>Free equity delivery</h2>
            <p className="lh-sm text-muted p-3  ">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
        </div>
        <div className="col-4  text-center">
          <img
            style={{ width: "80%" }}
            src="https://zerodha.com/static/images/other-trades.svg"
            alt=""
          />
          <div className="text-start ">
            <h2 style={{ textWrap: "nowrap" }}>Intraday and F&O trades</h2>
            <p className="lh-sm text-muted p-3  ">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
        </div>
        <div className="col-4 ">
          <img
            style={{ width: "80%" }}
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
          />
          <div>
            <h2>Free direct MF</h2>
            <p className="lh-sm text-muted p-3  ">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
