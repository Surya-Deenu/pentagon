import React from "react";
import person from "../../../assets/directors/D.FrancisSagayaRaj.png";
import personTwo from "../../../assets/directors/HitendraKothakar.png";
import personTree from "../../../assets/directors/SanjayMalkar.png";
import personFour from "../../../assets/directors/YogeshBansode.png";
import "./style.css";

const RealPeople = () => {
  return (
    <>
      <div className="real-people-page">
        <div className="container">
          <h2 className="people-content-heding">People who made it real</h2>
          <div className="people-image-grid ">
            <div className="row peoplewhomadeImg justify-content-center justify-content-md-start">
              <div className="col-md-6 people-details">
                <img src={person} alt="person" className="mw-100 " />
                <div className="text-center pt-3">
                  <h5>
                    <b>D.Francis sagaya raj</b>
                  </h5>
                  <h6>Director</h6>
                </div>
              </div>
              <div className="col-md-6 people-details ">
                <img src={personFour} alt="person" className="mw-100" />
                <div className="text-center pt-3">
                  <h5>
                    <b>Yogesh bansode</b>
                  </h5>
                  <h6>Director</h6>
                </div>
              </div>

              <div className="col-md-6 people-details pt-3">
                <img src={personTree} alt="person" className="mw-100" />
                <div className="text-center pt-3">
                  <h5>
                    <b>Sanjay malkar</b>
                  </h5>
                  <h6>Director</h6>
                </div>
              </div>
              <div className="col-md-6 people-details pt-3">
                <img src={personTwo} alt="person" className="mw-100" />
                <div className="text-center pt-3">
                  <h5>
                    <b>Hitendra Kothakar</b>
                  </h5>
                  <h6>Director</h6>
                </div>
              </div>
              {/* <div className='col-md-6 people-details pt-4 pb-4'>
                        <img src={personFive} alt="person" className='mw-100' />
                            <div className='text-center pt-3'>
                                <h5><b>Name</b></h5>
                                <h6>Position</h6>
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealPeople;
