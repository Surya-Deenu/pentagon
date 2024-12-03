import React from "react";
import BannerImage from "../../../assets/Images/aboutPage.png";
import Arrow from "../../../assets/Icons/Arrow.svg";
import "./style.css";

const BannerAbout = () => {

 
  
  return (
    <>
      <div className="banner-about-section">
        <div className="about-image-content container-fluid p-0">
          <img src={BannerImage} alt="BannerImage" className="BannerImage" />
          <div className="image-overlab-content">
          <div className="container">
            <h2 className="about-page-heading">
              Engineering Comfort, Delivering Excellence
            </h2>
            <p className="about-page-paragraph">
              With a decade of expertise and innovative HVAC solutions, the
              Pentagon <br/>ensures efficiency, sustainability, and unmatched service
              across India.
            </p>
            {/* <img src={Arrow} alt="arrow" className="image-arrow" /> */}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAbout;
