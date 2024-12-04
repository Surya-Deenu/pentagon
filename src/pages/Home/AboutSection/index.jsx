import React from "react";
import aboutImage from "../../../assets/Images/Aboutusimage.png";
import { Link } from "react-router-dom";
import "./style.css";

const AboutSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="about-contant">
        <div className="container">
          <h2 className="about-heading-contant">
            We are a fast-growing company in the HVAC{" "}
            <br className="d-none d-md-block" />
            space in the last decade in India.
          </h2>
          <div className="about-content-right-left">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <img
                  src={aboutImage}
                  alt="image"
                  className="about-image-left mw-100"
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about-button-contant">
                  <p className="about-parah-right">
                    Our pride stems from our expertise that is coupled with
                    cutting- edge technology, out of the box implementation
                    ideas and superior engineering solutions. From day one until
                    now, we’ve continued our march and have accomplished a
                    PAN-India presence.
                  </p>
                  <div className="respons-about-button">
                    <a>
                      <Link
                        to="AboutUs"
                        className="about-button-home"
                        onClick={scrollToTop}
                      >
                        About Us
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="addnumber">
        <div className="container">
          <div className="row justify-content-center gap-lg-5">
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">15+</h6>
              <p className="span-contant-parah">
                Years
                <br />
                Experience
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">200+</h6>
              <p className="span-contant-parah">
                Projects
                <br />
                Completed
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">300+</h6>
              <p className="span-contant-parah">Employees</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">10M+</h6>
              <p className="span-contant-parah">
                Area of sq.ft
                <br />
                Air conditioned
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">100cr+</h6>
              <p className="span-contant-parah">Turn over</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">5+</h6>
              <p className="span-contant-parah">Locations</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-2">
              <h6 className="emp-num-10">100+</h6>
              <p className="span-contant-parah">
                Ongoing
                <br />
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
