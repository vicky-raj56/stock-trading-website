import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header
      style={{
        width: "100%",
        position: "sticky", // Header ko top par fix karne ke liye
        top: 0,
        left: 0,
        zIndex: "1000",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 128, 0, 0.2)", // Thoda light green shadow
      }}
    >
      {/* Bootstrap Container content ko center aur align rakhta hai */}
      <div className="container d-flex align-items-center justify-content-between p-3 ">
        <div className="logo" style={{ width: "150px" }}>
         <Link to={"/"}>
          <img
            style={{ width: "100%" }}
            src="media/images/logo.svg" // Slash sahi karein (/)
            alt="logo"
          />
         </Link>
        </div>

        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              listStyle: "none",
              margin: 0, // Default margin hatane ke liye
              padding: 0,
            }}
          >
            <li>
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"pricing"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to={"/support"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Support
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-bars"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
