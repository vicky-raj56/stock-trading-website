import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center" style={{ margin: " 0 auto" }}>
        <h4 style={{ fontWeight: "500", fontSize: "22px" }}>
          We pioneered the discount broking model in India.
          <br />
        </h4>
        <h4 style={{ fontWeight: "500", fontSize: "22px" }}>
          Now, we are breaking ground with our technology.
        </h4>

        <div className="horigental-line mt-5">
          <hr />
        </div>
      </div>
      <div className="row p-5">
        <div className="col-6">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-4">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p className="mb-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-4">
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p className="mb-4">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#">blog</a> or see what the media
            is <a href="#">saying about us</a> or learn more about our business
            and product <a href="#">philosophies.</a>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
