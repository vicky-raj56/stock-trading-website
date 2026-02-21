import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container">
      <div className="row text-center" style={{margin:"auto"}}>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          online plateform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
           <Link to={"/signup"} style={{color:"white"}}> Signup up</Link>
        </button>
      </div>
      
    </div>
  );
}

export default OpenAccount;
