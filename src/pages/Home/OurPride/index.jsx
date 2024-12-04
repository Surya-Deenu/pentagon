import React from "react";
import blockArrow from "../../../assets/Icons/blockArrow.svg";
import "./style.css";

const OurPride = () => {
  return (
    <>
      <div className="our-pride">
        <div className="ourpride-content-align">
          <div className="row">
            <div className="col-md-4 col-sm-12 our-contant-left p-0">
              <h4 className="our-heading4-contant">Our pride</h4>
              <p className="out-prah-contant">
                We specialise in HVAC solutions right from the supply,
                installation, testing, and commissioning to maintenance of the
                system to the entire satisfaction of our esteemed clients. Our
                up-to-date industry knowledge and expertise in a dynamically
                changing field help us to ensure quality service that is
                consistent with the highest standards.
              </p>
            </div>
            <div className="col-md-8 col-sm-12 pt-3">
              <div
                id="demo1"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2500" // Auto slide every 3 seconds
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide-to="0"
                    className="active color-block-contant"
                    aria-current="true"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide-to="1"
                    className="color-block-contant"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide-to="2"
                    className="color-block-contant"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide-to="3"
                    className="color-block-contant"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#demo1"
                    data-bs-slide-to="4"
                    className="color-block-contant"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption slider-contant-heading p-0">
                      <span className="px-3 text-end">
                        <img src={blockArrow} alt="arrow" />
                      </span>
                      <h3 className="our-pride-slide-contant">
                        Every step you take contributes to the greater story of
                        our success. Your dedication and hard work inspire us
                        all to aim higher and achieve more together."
                      </h3>
                      <div className="parah-parent-contant">
                        <p className="parah-slide-child-first m-0">
                          Hitendra Kothakar
                        </p>
                        <p className="parah-slide-child">
                          Director Project & Purchase (West)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption slider-contant-heading">
                      <h3 className="our-pride-slide-contant">
                        The strength of our company lies in the passion, talent,
                        and determination of each team member. Thank you for
                        bringing your best every day—it makes all the
                        difference.“
                      </h3>
                      <div className="parah-parent-contant">
                        <p className="parah-slide-child-first m-0">
                          Sanjay Malkar
                        </p>
                        <p className="parah-slide-child">
                          Director Project & Purchase (West)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption slider-contant-heading">
                      <h3 className="our-pride-slide-contant">
                        Our company thrives because of your ideas, your
                        creativity, and your perseverance. Keep believing in
                        your potential, and we’ll continue building something
                        remarkable.“
                      </h3>
                      <div className="parah-parent-contant">
                        <p className="parah-slide-child-first m-0">
                          D Francis Raj
                        </p>
                        <p className="parah-slide-child">
                          Director Project & Purchase (West)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption slider-contant-heading">
                      <h3 className="our-pride-slide-contant">
                        Our success is built on the foundation of teamwork,
                        creativity, and relentless dedication. Together, we’ll
                        continue to innovate, grow, and achieve greatness. Thank
                        you for your unwavering commitment to our vision.“
                      </h3>
                      <div className="parah-parent-contant">
                        <p className="parah-slide-child-first m-0">
                          Yogesh Bansode
                        </p>
                        <p className="parah-slide-child">
                          Director Project & Purchase (West)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item slider-contant-heading">
                    <div className="carousel-caption slider-contant-heading">
                      <h3 className="our-pride-slide-contant">
                        As we push boundaries and face new challenges, remember:
                        growth comes from resilience, innovation, and
                        collaboration. Together, there's nothing we can't
                        accomplish.“
                      </h3>
                      <div className="parah-parent-contant">
                        <p className="parah-slide-child-first m-0">
                          Jerald Amal
                        </p>
                        <p className="parah-slide-child">
                          Director Project & Purchase (West)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPride;
