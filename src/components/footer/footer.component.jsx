import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer footer-3">
      <div className="footer-top  pt-150 pb-lg-5 pb-50">
        <div className="container">
          <div className="row gx-0 pt-45 ">

            <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
              <div className="footer-widget wow fadeInLeft mb-30">
                <div className="footer-bold">
                  <span className="counter">
                    <span>FINEANT</span>
                  </span>
                </div>
                <div className="footer-text mb-20">
                  <p>Financial Technology Revolution</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 text-center text-sm-start ms-lg-5 ">
              <div
                className="footer-widget mb-30 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="f-widget-title">
                  <h5>Fineant at a Glance</h5>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <Link className="nav-link" to="/about" role="button">
                        {" "}
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a href="#"> Cookies Policy</a>
                    </li>
                    <li>
                      <a href="#"> Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="copyright pt-25 pb-25">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center text-lg-start">
              <a href="index.html" className="p-0 m-0">
                <img src="img/logo/Logo.png" alt="logo" />
              </a>
            </div>
            <div className="col-lg-5 text-center my-3 my-sm-0">
              <div className="copyright-text">
                <p>
                  Copyright&copy; Fineant 2022. <br className="d-sm-none" />{" "}
                  <a className="ms-2" href="#">
                    Privecy
                  </a>{" "}
                  |
                  <a className="ms-0" href="#">
                    Term of Use
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end ">
              <div className="social-button">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
