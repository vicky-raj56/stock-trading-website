import React from "react";
import CreateTicket from "./CreateTicket";

function Hero() {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#F6F6F6" }}>
        <div className="container pb-5 pt-2 ">
          <div className="row mt-3 p-2">
            <nav className="d-flex align-items-center justify-content-between ">
              <h1 className="fw-bold">Support Portal</h1>
              <button className="btn btn-primary">My tickets</button>
            </nav>

            <div className="input-group mt-4   " style={{ height: "50px" }}>
              <span className="input-group-text fs-4 " id="visible-addon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control text-muted p-3"
                placeholder="Eg: How do i open my account, How do i active F&O..."
                aria-label="Username"
                aria-describedby="visible-addon"
                style={{ outline: "none" }}
              />
              <input
                type="text"
                className="form-control d-none"
                placeholder="Hidden input"
                aria-label="Hidden input"
                aria-describedby="visible-addon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <CreateTicket/> */}
    </>
  );
}

export default Hero;
