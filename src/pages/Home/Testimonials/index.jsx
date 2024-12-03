import React, { Component } from "react";
import Slider from "react-slick";
import magic from "../../../assets/Images/netMagic.svg";
import pradeep from "../../../assets/Images/pradeep.svg";
import kannan from "../../../assets/Images/kannan.svg";
import testi from "../../../assets/Images/test.svg";
import monials from "../../../assets/Images/monilas.svg";
// *****************************logos**********************************//
import dsp from "../../../assets/testimonials/dsp.png";
import hp from "../../../assets/testimonials/hp.png";
import jupiter from "../../../assets/testimonials/jupiter-hospital.png";
import mindtree from "../../../assets/testimonials/mindtree.png";
import netMagic from "../../../assets/testimonials/netmagic.png";
import parleargo from "../../../assets/testimonials/parle-agro.png";

import "./style.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: !true,
    speed: 500,
    className: "center",
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMargin: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonials">
        <div className="container-fluid">
          <h3 className="testimonial-heading">Testimonials</h3>
          <p className="testimonial-paragraph">
            Our clients are the most valuable thing we have.
          </p>
          <span>
            <img src={testi} alt="arrrow" className="px-4" />
          </span>
          <div className="container">
            <Slider {...settings}>
              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={hp} alt="image" className="testimonial-clientslogo"/>
                    <h3 className="slider-package-testimonials">HP </h3>
                  </figure>
                  <p>
                    Pentagon did an excellent and quality work and completed the
                    installation of HVAC chilled water system and did it exactly
                    as per our requirement and to our complete satisfaction.
                  </p>
                </div>
              </div>
              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={mindtree} alt="image"  className="testimonial-clientslogo"/>
                    <h3 className="slider-package-testimonials">Mind tree </h3>
                  </figure>
                  <p>
                    We are extremely happy and satisfied with the systematic
                    approach adopted by pentagon to complete this challenging
                    project. We congratulate the entire Pentagon team for their
                    diligent work and the synchronised coordination efforts to
                    pull this off."{" "}
                  </p>
                </div>
              </div>
              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={netMagic} alt="image"  className="testimonial-clientslogo" style={{height:"50px"}}/>
                    <h3 className="slider-package-testimonials">NetMagic </h3>
                  </figure>
                  <p>
                    The Pentagon team completed the work within the stipulated
                    time and budget without compromising on quality. It must be
                    mentioned that the entire team worked to deliver the highest
                    safety standards and delivered a world-class system. We wish
                    them all success in future and we recommend Pentagon for
                    their services.
                  </p>
                </div>
              </div>

              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={jupiter} alt="image"  className="testimonial-clientslogo" />
                    <h3 className="slider-package-testimonials">
                      Jupiter hospital
                    </h3>
                  </figure>
                  <p>
                    We are extremely happy that we choose pentagon greatly
                    appreciate the way they executed the project & methodical
                    approach
                  </p>
                </div>
              </div>

              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={parleargo} alt="image"  className="testimonial-clientslogo"/>
                    <h3 className="slider-package-testimonials">Parle agro</h3>
                  </figure>
                  <p>
                    We recommend them highly for HVAC needs we work with them
                    for 8 different location pan India.
                  </p>
                </div>
              </div>
              <div className="testimonial-card-section">
                <div className="card parent-profile-box ">
                  <figure className="d-flex">
                    <img src={dsp} alt="image"  className="testimonial-clientslogo"/>
                    <h3 className="slider-package-testimonials">DSP</h3>
                  </figure>
                  <p>
                    We work with pentagon for design & build projects for last
                    10 years they have excellent planing & design team.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="text-end px-5">
          <img src={monials} alt="arrrow" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
