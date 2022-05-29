import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-info-left">
                {/* <div className="language-list">
                                <select id="select-lang">
                                    <option value="English">English</option>
                                    <option value="Bangla">Bangla</option>
                                    <option value="French">French</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div> */}

                <div className="timestamp ms-4">
                  {" "}
                  <i className="icon_clock_alt"></i> Mon - Fri 9:00-17:00
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-info-right">
                <ul>
                  <li>
                    <img
                      className="img-fluid"
                      src="img/phone-outline-white.png"
                      alt="phone"
                    />
                    <a href="tel:01234567890">+237 651-277-580</a>
                  </li>

                  <li>
                    <i className="icon_mail_alt"></i>
                    <a href="mailto:hello@ifineant.com">hello@werfineant.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu header-menu-2" id="sticky">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="img/logo/Logo-2.png"
                srcSet="img/logo/Logo-2@2x.png 2x"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active" to="/"
                    role="button"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" role="button">
                    {" "}
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" role="button">
                    {" "}
                    About
                  </Link>
                </li>
                {/* <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="career.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Job Pages
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-bs-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="career.html">
                        Career
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="job-post.html">
                        Jobs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="job-application.html">
                        Job Application
                      </a>
                    </li>
                  </ul>
                </li> */}
                
              </ul>
              <Link className="theme-btn" to="/contact">
                Book a Demo
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
