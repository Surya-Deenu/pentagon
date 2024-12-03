import React from "react";
import projectImage from "../../../assets/Images/projectsBanner.png";
import "./style.css";

const Banner = () => {
  return (
    <>
      <div className="projects-section">
        <div className="banner-projects">
          <img
            src={projectImage}
            alt="banner"
            className="mw-100 image-blog-banner-res"
          />
          <div className="projects-heading-content">
          <div className="container">
            <h2 className="heading-project-banner">
              Building Success, One Project at a Time
            </h2>
            <p className="parah-project-banner">
              Explore our portfolio of innovative HVAC solutions across diverse
              industries, showcasing our commitment to quality, precision, and
              excellence in every project
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
