import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-4">
          <img src="media/images/largestBroker.svg" alt="Broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million zerodha clients contributes to over 15% of all volumes in
            India daily by trading in investing in :{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Feature and Option</p>
                </li>
                <li>
                  <p>Commodity derivatives </p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direcet mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            style={{ width: "90%" }}
            src="media\images\pressLogos.png"
            alt="pressimg"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
