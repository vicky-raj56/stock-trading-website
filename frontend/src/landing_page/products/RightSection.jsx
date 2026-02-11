import React from "react";

function RightSection({ rightSection }) {
  const { imageURL, productName, productDescription, tryDemo, learnMore } =
    rightSection;

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-evenly ">
        <div className="col-4 me-5 p-5">
          <h2 className="mb-3"> {productName} </h2>
          <p className="mt-3 mb-3">
            {productDescription}
          </p>
          <a href="#" style={{ color: "blue" }}>
            {" "}
           {tryDemo} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-6  ms-5">
          <img
            style={{ width: "90%" }}
            src={imageURL}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
