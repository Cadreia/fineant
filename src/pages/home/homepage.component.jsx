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
          <div className="feature">
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="feature-widget-2 align-items-center wow fadeInRight feature-1"
                  data-wow-delay="0.1s"
                >
                  <div className="shapes">
                    <img src="img/feature/shape-6.png" alt="shape" />
                    <img src="img/feature/shape-10.png" alt="shape" />
                    <img src="img/feature/shape-4.png" alt="shape" />
                    <img src="img/feature/shape-3.png" alt="shape" />
                    <img src="img/feature/shape-12.png" alt="shape" />
                    <img src="img/feature/shape-12.png" alt="shape" />
                  </div>

                  <div className="feature-img">
                    <img src="img/feature/icon-5.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <p>UP TO $5M</p>
                    <h6>High Rang Loan</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
                    <p>FROM 7.50%</p>
                    <h6>Offer Low Interest</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
                    <p>7 DAYS PROCESS</p>
                    <h6>Fast & Easy Process</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fast-e-loan pt-130">
            <div className="row gy-xl-0 gy-4">
              <div className="col-xl-5 ">
                <div className="section-title text-start">
                  <h2 className="mb-3">
                    Fast, secure & easy loans in just 7 days
                  </h2>
                  <p>
                    Need some fast cash? Bad cradit history? We dont mind about
                    your past, just the future. Try loan start and feel secure
                    in your future.
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 offset-xl-1 ">
                <div className="apply-topics">
                  <ul>
                    <li>
                      <i className="icon_box-checked"></i>Get up to $15,000 Cash
                      Fast
                    </li>
                    <li>
                      <i className="icon_box-checked"></i>15 MinuteOnline
                      Application
                    </li>
                    <li>
                      <i className="icon_box-checked"></i>Centrelink Considered*
                    </li>
                    <li>
                      <i className="icon_box-checked"></i>Bad Credit Considered2
                    </li>
                  </ul>
                  <a href="loan.html" className="theme-btn mt-20 w-100">
                    Apply for loans
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 ">
                <div className="learn-more">
                  <ul>
                    <li>
                      <span>1.</span> Subject to verifcation, suitability and
                      affordability
                    </li>
                    <li className="mt-20">
                      <span>2.</span> Your income from Centrelink must be less
                      then 50% of your total income in order to qialify.
                    </li>
                  </ul>
                  <a href="#" className="theme-btn theme-btn-light w-100 mt-30">
                    Learn more
                  </a>
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
                {/* <a href="#" className="theme-btn theme-btn-outlined mt-45">
                  Find Out More
                </a> */}
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
                {/* <a href="#" className="theme-btn theme-btn-outlined mt-45">
                  Find Out More
                </a> */}
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
                {/* <a href="#" className="theme-btn theme-btn-outlined mt-45">
                  Find Out More
                </a> */}
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
                {/* <a href="#" className="theme-btn theme-btn-outlined mt-45">
                  Find Out More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-work pt-125 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-title">
                <h2 className="wow fadeInUp mb-3">Here's how it works.</h2>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  When you're ready, Cardinal Loans is ready too - 24 hours a
                  day, 7 days a week.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-60 gy-lg-0 gy-4">
            <div className="col-lg-6 pe-lg-5">
              <div
                className="single-widget apply-online wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="widget-header">
                  <div className="widget-img">
                    <img src="img/how-works/icon-1.png" alt="icon" />
                  </div>
                  <div className="widget-title">
                    <h4>Apply Online</h4>
                    <p>
                      That is why we have a wide range of you can apply for a
                      Personal Loan.
                    </p>
                  </div>
                </div>

                <ul className="widget-content">
                  <li className="active">
                    {" "}
                    <span className="number">1</span>{" "}
                    <span className="text">Apply Online</span>
                  </li>
                  <li>
                    {" "}
                    <span className="number">2</span>{" "}
                    <span className="text">
                      Enter Your Informantion - 10 min
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="number">3</span>{" "}
                    <span className="text">
                      Pre-qualify / Pre-Approve - 5 min
                    </span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="number">4</span>{" "}
                    <span className="text">Help you prepare</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="number">5</span>{" "}
                    <span className="text">We help your qualify - 15 days</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-0">
              <div
                className="single-widget consultation wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="widget-header">
                  <div className="widget-img">
                    <img src="img/how-works/icon-2.png" alt="icon" />
                  </div>
                  <div className="widget-title">
                    <h4>Consultation</h4>
                    <p>
                      Conis Guide on the supervisory approach to consolidation
                      in the banking sector.
                    </p>
                  </div>
                </div>

                <ul className="widget-content">
                  <li className="active">
                    {" "}
                    <span className="number">1</span>
                    <span className="text">Schedule a Free Consulation</span>
                  </li>
                  <li>
                    {" "}
                    <span className="number">2</span>{" "}
                    <span className="text">Discuss your Situation</span>
                  </li>
                  <li>
                    {" "}
                    <span className="number">3</span>{" "}
                    <span className="text">We Review your condition </span>
                  </li>
                  <li>
                    {" "}
                    <span className="number">4</span>{" "}
                    <span className="text">Help you prepare</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="number">5</span>{" "}
                    <span className="text">We help your qualify</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-area">
        <div className="security-priority pt-90 pb-95 text-center">
          <div className="shapes">
            <img src="img/security-tips/shape-1.png" alt="shape" />
            <img src="img/security-tips/shape-2.png" alt="shape" />
            <img src="img/security-tips/shape-3.png" alt="shape" />
            <img src="img/security-tips/shape-4.png" alt="shape" />
            <img src="img/security-tips/shape-5.png" alt="shape" />
            <img src="img/security-tips/shape-6.png" alt="shape" />
            <img src="img/security-tips/shape-1.png" alt="shape" />
            <img
              data-parallax='{"x": -60, "y": 150, "rotateZ":-15}'
              src="img/security-tips/shape-7.png"
              alt="shape"
            />
            <img
              data-parallax='{"x": 0, "y": -150, "rotateZ":0}'
              src="img/security-tips/shape-8.png"
              alt="shape"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 mx-auto">
                <img src="img/security-tips/security-priority.png" alt="icon" />
                <h2 className="mt-4 mb-3">Your satisfaction. Our priority.</h2>
                <p>
                  We always have your satisfaction of our deliverables in mind. Rest easy knowing your
                  application is secured, with minimal downtimes.
                  {/* <a href="#">Learn more.</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-area pt-125 pb-200">
        <div className="container">
          <div className="section-title text-start">
            <h2 className="mb-0 wow fadeInUp">Frequently asked questions</h2>
          </div>

          <div className="row pt-30 align-items-end">
            <div className="col-lg-7 col-md-8">
              <div className="faq-widget">
                <div className="accordion" id="accordionExample">
                  <div
                    className="single-widget-one wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="w-100">
                      <div className="faq-header" id="headingOne">
                        <h4
                          className="mb-0"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Can I pay off my loan early?
                          <i className="icon_plus"></i>
                          <i className=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="single-widget-one wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="w-100">
                      <div className="faq-header" id="headingTwo">
                        <h4
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          How much can I Banca?<i className="icon_plus"></i>
                          <i className=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="single-widget-one wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="w-100">
                      <div className="faq-header" id="headingThree">
                        <h4
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Do you offering refinancing ?
                          <i className="icon_plus"></i>
                          <i className=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="single-widget-one wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="w-100">
                      <div className="faq-header" id="headingFour">
                        <h4
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Can I do all of my banking with you?
                          <i className="icon_plus"></i>
                          <i className=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="single-widget-one wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="w-100">
                      <div className="faq-header" id="headingFive">
                        <h4
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          When should i apply?<i className="icon_plus"></i>
                          <i className=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-lg-1 mt-4 mt-md-0 ps-lg-5">
              <div className="faq-img">
                <img
                  className="img-fluid"
                  src="img/faq/illustration.png"
                  alt="faq-image"
                />
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
                      <a
                        href="contact.html"
                        className="theme-btn theme-btn-alt wow fadeInLeft m-0"
                      >
                        Contact Us
                      </a>
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
