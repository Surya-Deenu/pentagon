import React from "react";
import BannerImage from "../../../assets/Images/BannerimageResize.png";
import Banner1 from "../../../assets/Images/banner2.jpg";
import Banner2 from "../../../assets/Images/banner3.jpg";
import "./style.css";

const Banner = () => {
  return (
    <>
      <div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators carousel-icon-dots">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active carousel-slide-icon"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={BannerImage}
                alt="Los Angeles"
                className="d-block banner-image"
              />

              <div className="carousel-caption carousel-option-change">
                <h1 className="carousel-header-menu">
                  Revolutionizing HVAC Solutions for Every Need
                </h1>
                <p className="carousel-parah-menu">
                  Experience unmatched efficiency and innovation tailored to
                  your facility from design to maintenance.
                </p>
                {/* <img src={Arrow} alt="arrow" className="image-arrow" /> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Banner1}
                alt="Chicago"
                className="d-block banner-image position-relative"
              />
              {/* <div
                style={{
                  width: "100%",
                  height: "864px",
                  backgroundColor: "#00000080",
                  position: "absolute ",
                
                  top: "0",
                }}
              ></div> */}
              <div className="carousel-caption carousel-option-change">
                <h1 className="carousel-header-menu">
                  Trusted by Industry Leaders Across India
                </h1>
                <p className="carousel-parah-menu">
                  Partnered with top brands and institutions, delivering HVAC
                  excellence to over 500+ satisfied customers.
                </p>
                {/* <img src={Arrow} alt="arrow" className="image-arrow" /> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={Banner2}
                alt="New York"
                className="d-block banner-image position-relative"
              />
              {/* <div
                style={{
                  width: "100%",
                  height: "864px",
                  backgroundColor: "#00000080",
                  position: "absolute ",
                
                  top: "0",
                }}
              ></div> */}
              <div className="carousel-caption carousel-option-change">
                <h1 className="carousel-header-menu">
                  Smart, Sustainable, and Scalable Systems
                </h1>
                <p className="carousel-parah-menu">
                  Future-ready HVAC technology is designed to optimize
                  performance while reducing operational costs.
                </p>
                {/* <img src={Arrow} alt="arrow" className="image-arrow" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
