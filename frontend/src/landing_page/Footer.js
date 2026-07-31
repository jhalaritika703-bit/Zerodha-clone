import React from "react";

function Footer() {
  return (
    <footer
      className="border-top pt-5 pb-4"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Logo */}
          <div className="col-lg-4 col-md-6">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "180px" }}
              className="mb-3"
            />

            <p className="text-muted">
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Company</h5>

            <a href="/about" className="footer-link">
              About
            </a>
            <a href="/products" className="footer-link">
              Products
            </a>
            <a href="/pricing" className="footer-link">
              Pricing
            </a>
            <a href="/" className="footer-link">
              Referral programme
            </a>
            <a href="/" className="footer-link">
              Careers
            </a>
            <a href="/" className="footer-link">
              Zerodha.tech
            </a>
            <a href="/" className="footer-link">
              Press & Media
            </a>
            <a href="/" className="footer-link">
              CSR
            </a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Support</h5>

            <a href="/" className="footer-link">
              Contact
            </a>
            <a href="/" className="footer-link">
              Support Portal
            </a>
            <a href="/" className="footer-link">
              Z-Connect Blog
            </a>
            <a href="/" className="footer-link">
              Charges
            </a>
            <a href="/" className="footer-link">
              Downloads
            </a>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Account</h5>

            <a href="/" className="footer-link">
              Open an Account
            </a>
            <a href="/" className="footer-link">
              Fund Transfer
            </a>
            <a href="/" className="footer-link">
              60 Day Challenge
            </a>
          </div>
        </div>

        <hr className="my-5" />

        <div
          className="text-muted"
          style={{
            fontSize: "13px",
            lineHeight: "1.9",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. Registered office: Bengaluru, Karnataka.
          </p>

          <p>
            Investments in securities market are subject to market risks. Read
            all related documents carefully before investing.
          </p>

          <p>
            Update your mobile number and email with your broker to receive
            transaction alerts directly from the exchange.
          </p>

          <p className="mb-0">
            This website is a learning project inspired by Zerodha and is not
            affiliated with or operated by Zerodha Broking Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;