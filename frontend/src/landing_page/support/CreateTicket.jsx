import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row d-flex ">
        <div className="col-8">
          <div className="dropdown my-5">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Account Opening
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Your Zerodh Account
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown my-5">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Kite
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown my-5">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Funds
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown my-5">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Console
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                 Portfolio
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Corporate actions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Funds Statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Reports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile 
                </a>
              </li>
               <li>
                <a className="dropdown-item" href="#">
                  Segments
                </a>
              </li>
              
            </ul>
          </div>

          <div className="dropdown my-5">
            <button
              style={{ width: "100%", border: "1px solid black" }}
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Coin
            </button>
            <ul className="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                Mutuals funds
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 National Pension Scheme (NSP)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Fixed Diposit
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                Features on Coin
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                 Payment and Orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 General
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4 mt-5">
          <div>
            <div className="d-flex" style={{ backgroundColor: "yellow" }}>
              <div
                className="col-1"
                style={{ backgroundColor: "#FF9100" }}
              ></div>
              <div className="col-11">
                <div
                  className="box p-3    text-start"
                  style={{ backgroundColor: "#FFF4E5", width: "100%" }}
                >
                  <h5 className="ms-2">
                    Due to high volume, <a href="#">reactivation</a> <br />
                    requests may take an extra 24-48 <br /> business hours to
                    process.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="link border mt-4 ">
            <h5
              className="p-3"
              style={{ width: "100%", backgroundColor: "#F6F6F6" }}
            >
              Quicks links
            </h5>

            <ol className="fs-5 d-flex flex-column gap-2">
              <li className="border-bottom ">
                <a href="#">Track your account opening</a>
              </li>

              <li className="border-bottom">
                <a href="#">Track segment activation</a>
              </li>
              <li>
                <a href="#">Intraday mairgins</a>
              </li>
              <li className="border-bottom">
                <a href="#">Kite user manual</a>
              </li>
              <li className="border-bottom">
                <a href="#">Learn how to create a ticket</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
