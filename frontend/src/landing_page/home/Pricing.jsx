import React from "react";

function Pricing() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-5">
          <h4>Unbeatable pricing</h4>
          <p className="text-muted mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 ">
          <div className="pricing-boxs row mt-3 ">
            <div
              className="price-box col-3 m "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "80%" }}
                src="media\images\pricing0.svg"
                alt="price"
              />
              <small
                className="mt-4 text-muted fs-6"
                style={{ whiteSpace: "nowrap" }}
              >
                Free account <br /> <small>opening</small>
              </small>
            </div>

            <div
              className="price-box col-5  "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "45%" }}
                src="media\images\pricing0.svg"
                alt="price"
              />
              <small
                className="mt-4 text-muted fs-6"
                style={{ whiteSpace: "nowrap" }}
              >
                Free equality delivary <br />{" "}
                <small>and direct mutual funds</small>{" "}
              </small>
            </div>

            <div
              className="price-box col-4 p-2"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "55%" }}
                src="media\images\other-trades.svg"
                alt="price"
              />
              <small
                className="mt-4 text-muted fs-6 p-"
                style={{ whiteSpace: "nowrap" }}
              >
                Intraday and
                <br /> <small>F&O</small>{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
