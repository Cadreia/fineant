import React from "react";
import { Link } from "react-router-dom";
import "./homepage.styles.css";

const Homepage = () => {
  return (
    <main>
      <section
        className="banner-area-2 pt-200 pb-95"
        id="banner_animation"
        style={{ backgroundSize: "auto", backgroundPosition: "topLeft" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <img
                  data-parallax='{"x": 0, "y": 250, "rotateZ":0}'
                  className="shape"
                  src="img/banner/shape-3.png"
                  alt="shape"
                />
                <h1 className="wow fadeInUp mb-0">Your Bridge to Fintech.</h1>
                <p className="wow fadeInUp mt-50" data-wow-delay="0.3s">
                Fineant is an industry leading innovator that creates, distributes and supports enterprise ready open source core and digital banking platforms.
                </p>
                <Link
                  to="/contact"
                  data-wow-delay="0.5s"
                  className="wow fadeInUp theme-btn theme-btn-lg mt-50"
                >
                  Book a Demo<i className="arrow_right"></i>
                </Link>
              </div>
            </div>
            <div className=" col-md-6 col-lg-5 offset-lg-1 pt-40">
              <div className="banner-img">
                <img
                  className="main-img img-fluid wow fadeInRight"
                  src="img/banner/banner-pic.jpg"
                  alt="banner-img"
                />
                <div className="shapes">
                  <img
                    data-parallax='{"x": 0, "y": 130, "rotateZ":0}'
                    className="shape-1"
                    src="img/banner/shape-1.png"
                    alt="shape"
                  />
                  <img
                    data-parallax='{"x": 0, "y": -130, "rotateZ":0}'
                    className="shape-2"
                    src="img/banner/shape-2.png"
                    alt="shape"
                  />
                  <img
                    data-parallax='{"x": 250, "y":0, "rotateZ":0}'
                    className="shape-3"
                    src="img/banner/shape-4.png"
                    alt="shape"
                  />
                  <img
                    data-parallax='{"x": -200, "y": 250, "rotateZ":0}'
                    className="shape-4"
                    src="img/banner/shape-5.png"
                    alt="shape"
                  />
                  <img
                    className="shape-5"
                    src="img/banner/shape-6.png"
                    alt="shape"
                  />
                  <img
                    className="shape-6"
                    src="img/banner/shape-7.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-area-2 pt-140 pb-140" id="feature">
        <div className="container">

        <div className="fast-e-loan">
            <div className="row gy-xl-0 gy-4">
              <div className="section-title text-start">
                <center>
                  <h2 className="mb-3">
                    Fast, secure & easy financial solutions
                  </h2>
                  <p>
                    Our vision is to be the enablers of financial accessibility for the billions of underserved.
                  </p>
                  <br></br>
                  <p>
                  We aim to accelerate the arrival of the world’s best financial institutions to open-source solutions.
                  </p>
                </center>
              </div>
            </div>
          </div>

          <div className="feature pt-100">
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-6">
                <div
                  className="feature-widget-2 align-items-center wow fadeInRight feature-2"
                  data-wow-delay="0.3s"
                >
                  <div className="shapes">
                    <img src="img/feature/shape-13.png" alt="shape" />
                    <img src="img/feature/shape-14.png" alt="shape" />
                    <img src="img/feature/shape-15.png" alt="shape" />
                    <img src="img/feature/shape-11.png" alt="shape" />
                    <img src="img/feature/shape-12.png" alt="shape" />
                    <img src="img/feature/shape-5.png" alt="shape" />
                  </div>
                  <div className="feature-img">
                    <img src="img/feature/icon-6.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <p>We believe we can make a difference by leveraging</p>
                    <p> open source technologies to help more people.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="feature-widget-2 align-items-center wow fadeInRight feature-3"
                  data-wow-delay="0.5s"
                >
                  <div className="shapes">
                    <img src="img/feature/shape-1.png" alt="shape" />
                    <img src="img/feature/shape-2.png" alt="shape" />
                    <img src="img/feature/shape-6.png" alt="shape" />
                    <img src="img/feature/shape-9.png" alt="shape" />
                    <img src="img/feature/shape-11.png" alt="shape" />
                  </div>
                  <div className="feature-img">
                    <img src="img/feature/icon-7.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <p>7 billions of people have poor financial services.</p>
                    <p>We strive to offer a better experience for them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="manage-c-finance pt-125 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title">
                <h2 className="wow fadeInUp">
                  Our Products
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                We offer an individualized suite of products for both financial institutions and fintechs and specialize on Apache fineract and Mifos X.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-60 gy-4 gy-xl-0">
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-card-widget-2 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon-bg-1">
                  <img src="img/corporate-finance/icon-5.svg" alt="icon" />
                </div>
                <h5>Accounts</h5>
                <p>
                Multiple accounts system for full fledge banks and digital wallets. Checking accounts, savings accounts. Terms deposits, overdrafts and share accounts for Credit Unions.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-card-widget-2 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon-bg-2">
                  <img src="img/corporate-finance/icon-2.svg" alt="icon" />
                </div>
                <h5>Loan Management System</h5>
                <p>
                Complete LMS with easy and simple loan configuration. Simple and complex loan terms, schedules, fees and penalties. All can be configured effortlessly.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-card-widget-2 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="icon-bg-3">
                  <img src="img/corporate-finance/icon-3.svg" alt="icon" />
                </div>
                <h5>Open APIs</h5>
                <p>
                The future of banking is Open APIs. Fineract Rest API architecture can be quickly and simply connected with any third party system allowing you to be compliant with PSD2.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-card-widget-2 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="icon-bg-4">
                  <img src="img/corporate-finance/icon-4.svg" alt="icon" />
                </div>
                <h5>KYC</h5>
                <p>
                Enter and create all required client information, attach documents, signature, and photo plus all customizable information you may require from the client, relatives and guarantors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


		<section id="feature" class="feature-area pt-50 pb-130">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 mx-auto pt-160 pt-lg-90 pb-65">
						<div class="section-title">
							<h2 class="wow fadeInUp">What we do</h2>
							<p class="wow fadeInUp" data-wow-delay="0.3s">
                We help you achieve more with less.
              </p>
						</div>
					</div>
				</div>
				<div class="row gy-xl-0 gy-4">
					<div class="col-xl-3 col-md-6">
						<div class="feature-card-widget wow fadeInUp">
							<div class="card-img">
								<img src="img/contact/help-icon-2.svg" alt="feature svg" />
							</div>
							<h4>Support</h4>
							<p>We provide assistance and maintenance to the Fineract Platform. Our work includes installing, configuring, and updating the system as well as fixing any issue related to it that may come up on a daily basis.
							</p>
						</div>
					</div>
					<div class="col-xl-3 col-md-6">
						<div class="feature-card-widget wow fadeInUp" data-wow-delay="0.3s">
							<div class="card-img">
								<img src="img/feature/icon-11.svg" alt="feature svg" />
							</div>
							<h4>Consulting</h4>
							<p>We offer advice and expertise to our clients to improve their business performance in terms of operations, profitability, management, structure and strategy while customizing Mifos & Fineract to their needs.</p>
						</div>
					</div>
					<div class="col-xl-3 col-md-6">
						<div class="feature-card-widget wow fadeInUp" data-wow-delay="0.6s">
							<div class="card-img">
								<img src="img/feature/icon-2.svg" alt="feature svg" />
							</div>
							<h4>Business Intelligence</h4>
							<p>Build reporting, dashboards, business intelligence, analytics, visualisations and artificial intelligence on data lakes for clients to benefit.</p>
						</div>
					</div>
					<div class="col-xl-3 col-md-6">
						<div class="feature-card-widget wow fadeInUp" data-wow-delay="0.9s">
							<div class="card-img">
								<img src="img/contact/help-icon-1.svg" alt="feature svg" />
							</div>
							<h4>Training</h4>
							<p>Developers training (initial and advanced), end user training, Fineract courses for developers and Staff training on Mifos use.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

      <section className="cta-area pt-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12 position-relative">
              <div className="cta cta-bg-primary">
                <div className="shapes">
                  <img src="img/cta/icon-1.png" alt="shape" />
                  <img
                    data-parallax='{"x": 150, "y": 0, "rotateZ":-0}'
                    src="img/cta/icon-2.png"
                    alt="shape"
                  />
                  <img src="img/cta/icon-3.png" alt="shape" />
                  <img src="img/cta/icon-4.png" alt="shape" />
                  <img src="img/cta/icon-5.png" alt="shape" />
                  <img
                    data-parallax='{"x": 400, "y": 0, "rotateZ":0}'
                    src="img/cta/icon-6.png"
                    alt="shape"
                  />
                </div>

                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="cta-content wow fadeInRight">
                      <h2 className="mb-10">Have any question?</h2>
                      <p>
                        Ask us anything. Do you have a love question you want us
                        to answer?
                      </p>
                    </div>
                  </div>

                  <div className="col-md-5 text-center text-md-end">
                    <div className="cta-content   text-md-end mt-3 mt-md-0">
                      <Link className="theme-btn theme-btn-alt wow fadeInLeft m-0" to="/contact" role="button">
                        {" "}
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
