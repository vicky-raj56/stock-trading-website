import React from "react";

function Footer() {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  return (
    <div className="footer">
      <div className="container footer-container ">
        <div className="row " style={{ textDecoration: "none" }}>
          <div className="col-3 me-2">
            <div className="logo mb-2 mt-2" style={{ width: "180px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="media/images/logo.svg"
                alt=""
              />
            </div>
            <small>
              © 2010 - 2026, Zerodha Broking Ltd. <br />
              All rights reserved.
            </small>

            <div
              className="social-account"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
             
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>

            <hr />
            <div
              className="social-account"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
               
              }}
            >
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="col-2 hehe">
            <div className="links">
              <h5>Account</h5>
              <div className="link" style={style}>
                <a href="#"> Open demat account</a>
                <a href="#">Minor demat account</a>
                <a href="#">NRI demat account</a>
                <a href="#">Commodity</a>
                <a href="#">Dematerialisation</a>
                <a href="#">Fund transfer</a>
                <a href="#">MTF</a>
                <a href="#">Referral program</a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="links">
              <h5>Support</h5>
              <div className="link" style={style}>
                <a href="#"> Contact Us</a>
                <a href="#">Support portal</a>
                <a href="#">How to file a complaint?</a>
                <a href="#">Status of your complaints</a>
                <a href="#">Bulletin</a>
                <a href="#">Circular</a>
                <a href="#">Z-Connect blog</a>
                <a href="#">Downloads</a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="links">
              <h5>Company</h5>
              <div className="link" style={style}>
                <a href="#"> About</a>
                <a href="#">Pholosophy</a>
                <a href="#">Press & media</a>
                <a href="#">Careers</a>
                <a href="#">Zerodha Care(CSR)</a>
                <a href="#">Zerodha.tech</a>
                <a href="#">Open source</a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="links">
              <h5>Quick links</h5>
              <div className="link" style={style}>
                <a href="#"> Upcomin IPOs</a>
                <a href="#">Brokerage charge</a>
                <a href="#">Market holidays</a>
                <a href="#">Economic calendar</a>
                <a href="#">Calculator</a>
                <a href="#">Markets</a>
                <a href="#">Sectors</a>
              </div>
            </div>
          </div>
        </div>

        <div className="paragraph ">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="footer-down-link">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & conditions </a>
          <a href="#">Policies & procedures </a>
          <a href="#">Privacy policy </a>
          <a href="#">Disclosure </a>
          <a href="#">For investor's attention </a>
          <a href="#">Investor charter</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
