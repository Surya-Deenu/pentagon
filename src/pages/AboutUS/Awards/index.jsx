import React from "react";
import awardone from "../../../assets/Icons/award1.svg";
import awardtwo from "../../../assets/Icons/award2.svg";
import awardthree from "../../../assets/Icons/award3.svg";
import awardfour from "../../../assets/Icons/award4.svg";
import "./style.css";

const Awards = () => {
  return (
    <>
      <div className="awards">
        <div className="container">
          <div className="award-section-page">
            <div className="row">
              <div className="col-md-12 col-lg-5">
                <h3 className="award-heading-left">Awards</h3>
                <p className="award-parah-right">
                  Our achievements reflect our dedication to excellence and
                  innovation. Over the years, we have been honored with numerous
                  prestigious awards that showcase our commitment to quality,
                  hard work, and customer satisfaction. These recognitions
                  motivate us to continually raise the bar in everything we do.
                </p>
              </div>
              <div className="col-md-12 col-lg-7">
                <div className="text-center row gap-y-5">
                  <div className="col-md-6 p-3">
                    <img src={awardone} alt="award" className="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <img src={awardtwo} alt="award" className="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <img src={awardthree} alt="award" className="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <img src={awardfour} alt="award" className="" />
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

export default Awards;
