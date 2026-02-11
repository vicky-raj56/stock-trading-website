import React from "react";

function Teams() {
  return (
    <div className="container">
      <div className="row text-center">
        <h2>People</h2>
      </div>
      <div className="row ceo p-5">
        <div className="col-5 p-3 text-center  ">
          <div
            className="image mt-1"
            style={{
              height: "265px",
              width: "265px",
              overflow: "hidden",
              textAlign: "center",
              margin: "0 auto",
              marginBottom: "12px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "100%",
                objectFit: "cover",
              }}
              src="media/images/nithinKamath.jpg"
              alt="ceo"
            />
          </div>
          <h5
            style={{
              fontSize: "18px",
              color: "#424242",
              textAlign: "cetnter",
              margin: "0px 0px 8px",
            }}
          >
            Nithin Kamath
          </h5>
          <p
            style={{
              fontSize: "14.4px",
              margin: "14.4px 0px 15px",
              color: "#666666",
            }}
          >
            Founder, CEO
          </p>
        </div>
        <div className="col-7 p-3">
          <p style={{ color: "#424242", margin: "10px 0px 15px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ color: "#424242", margin: "16px 0px 15px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ color: "#424242", margin: "16px 0px 15px" }}>
            Playing basketball is his zen.
          </p>
          <p style={{ color: "#424242", margin: "16px 0px 15px" }}>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
