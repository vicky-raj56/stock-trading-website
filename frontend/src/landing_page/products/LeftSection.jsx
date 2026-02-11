import React from "react";

// [{
//   imageURL,
//   productName,
//   productDescription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
// }]
function LeftSection(props) {
  const {
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
  } = props.leftSection;
  // console.log(productName)
  return (
    <div className="container mb-5">
      <div className="row d-flex align-items-center justify-content-evenly">
        <div className="col-6 ">
          <img style={{ width: "90%" }} src={imageURL} alt="img" />
        </div>
        <div className="col-4 p-5">
          <h2 className="mb-3">{productName}</h2>
          <p className="mt-3 mb-3">{productDescription}</p>
          <div className="row link d-flex align-items-center justify-content-start gap-4 ">
            {tryDemo ? (
              <div className="col-5">
                <a href="#" style={{ color: "blue" }}>
                  {tryDemo} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ) : null}
            {learnMore ? (
              <div className="col-5 ">
                <a href="#" style={{ color: "blue" }}>
                  {learnMore} <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="row icon-link d-flex align-items-center justify-content-strat gap-1 mt-3  ">
            <div className="col-5 active ">
              <a href="#" style={{ color: "blue" }}>
                <img style={{ width: "93%" }} src={googlePlay} alt="google" />
              </a>
            </div>
            <div className="col-5 ">
              <a href="#" style={{ color: "blue" }}>
                <img style={{ width: "93%" }} src={appStore} alt="apple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
