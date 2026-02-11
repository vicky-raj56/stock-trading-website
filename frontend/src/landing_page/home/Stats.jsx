import React from "react";

function Stats() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-5 p-4">
          <h4 className="mb-5 opacity-100">Trust with confidence</h4>
          <h5>Customer-first always</h5>
          <p className="mb-4  opacity-75 ">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h5>No spam or gimmicks</h5>
          <p className="mb-4 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a
              href="#"
              className=""
              style={{ textDecoration: "none", color: "#387ed1", opacity: "1" }}
            >
              Our philosophies.
            </a>
          </p>
          <h5>The Zerodha universe</h5>
          <p className="mb-4  opacity-75 ">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h5>Do better with money</h5>
          <p className=" text-muted ">
            With initiatives like
            <a
              href="#"
              className=" opacity-100"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              {" "}
              Nude
            </a>{" "}
            and{" "}
            <a
              href="#"
              className=" opacity-100"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              {" "}
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-7  p-5">
          <a href="#">
            <img
              style={{ height: "94%", width: "95%", objectFit: "cover" }}
              src="media\images\ecosystem.png"
              alt="ecosystem"
            />
          </a>
          <div className="text-center ">
            <a className="me-3" href="#">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <a href="#" className="text-center mt-3 fs-6 mb-5">
          <img src="media\images\pressLogos.png" alt="pressLogo" />
        </a>
      </div>
    </div>
  );
}

export default Stats;
