import React from "react";

function Nav() {
  return (
    <header
      style={{
        width: "100%",
        position: "fixed", // Header ko top par fix karne ke liye
        top: 0,
        left: 0,
        zIndex: "1000",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 128, 0, 0.2)", // Thoda light green shadow
      }}
    >
      {/* Bootstrap Container content ko center aur align rakhta hai */}
      <div className="container d-flex align-items-center justify-content-between p-3">
        
        <div className="logo" style={{ width: "150px" }}>
          <img
            style={{ width: "100%" }}
            src="media/images/logo.svg" // Slash sahi karein (/)
            alt="logo"
          />
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
            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Signup</a></li>
            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>About</a></li>
            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Products</a></li>
            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Pricing</a></li>
            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Support</a></li>
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