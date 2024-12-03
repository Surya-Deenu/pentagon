import React from "react";
import ourProcess from "../../../assets/Images/ourProcess.png";
import design from "../../../assets/Icons/design.svg";
import exicution from "../../../assets/Icons/exicution.png";
import maintance from "../../../assets/Icons/maintance.svg";
import "./style.css";

const OurProcess = () => {
  return (
    <>
      <div className="container-fluid our-process-content-img">
        <div className="engeneering-images">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
              <h2 className="our-process-heading">
                Engineers with a thirst
                <br />
                for innovation
              </h2>
              <p className="our-process-parah">
                Our well-equipped and trained engineers give us the
                much-required edge <br />
                and access to hands-on industry insight and position us as the
                best HVAC
                <br /> contracting firm– be it in any size of projects
              </p>
              <h3 className="our-process-small-heading">MULTI BRAND DEALER</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-0 our-process-image-align">
              <img src={ourProcess} alt="images" className="mw-100" />
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="heading-ourprocess-top">Our Process</h4>
          <div className="process-three-content">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="text-center">
                  <img src={design} alt="img" />
                  <h6 className="design-heading-left">Design</h6>
                  <p className="desing-parah-left">
                    We specialize in designing cutting-edge HVAC systems that
                    combine efficiency, sustainability, and advanced technology,
                    customized to meet unique project requirements across
                    diverse sectors
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="text-center">
                  <img src={exicution} alt="img" />
                  <h6 className="design-heading-left">Execution</h6>
                  <p className="desing-parah-left">
                    Our experienced team ensures smooth execution with
                    state-of-the-art equipment and meticulous project
                    management, delivering results on time and to the highest
                    standards{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="text-center">
                  <img src={maintance} alt="img" />
                  <h6 className="design-heading-left">Maintanence</h6>
                  <p className="desing-parah-left">
                    From preventive checks to rapid issue resolution, our
                    maintenance services ensure optimal operation, energy
                    efficiency, and extended lifespan for all HVAC systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
