import React from "react";
import star from "../../../assets/Images/aboutStar.png";
import "./style.css";
import backed from "../../../assets/Images/backed.png";
const Mission = () => {
  return (
    <>
      <div className="mission-vision-page">
        <div className="content-mission container">
          <p className="paragraph-mission">
            Our operations, interactions and transactions are strictly governed
            by the set of core values , the basis
            <br className="d-none d-md-block" /> on which the organization was
            founded. The roles and responsibilities for the employees are
            defined to
            <br /> adhere to these values at every levels
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-12 vision-left-content">
              <div className="text-center">
                <h4 className="mision-heading-left">Mission</h4>
                <p className="mission-parah-left">
                  Establish Pentagon as a leading HVAC Engineering company which
                  delivers the best engineering solution with complete customer
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 vision-center-content">
              <div className="text-center">
                <img src={star} alt="star" className="mw-100" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 vision-right-content">
              <div className="text-center">
                <h4 className="mision-heading-left">Vision</h4>
                <p className="mission-parah-left">
                  We will achieve by consistently honoring our commitments and
                  providing superior customer service and innovative solutions
                  with affordable price .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="we-are-backed">
          <img src={backed} alt="backed" className="factory-image"></img>
          <div className="experience-content">
            <h2 className="child-content-experience">
              We are backed up by 15+
              <br /> years of experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
