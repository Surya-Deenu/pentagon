import React from "react";
import "./style.css";

const Meet = () => {
  return (
    <>
      <div className="Meet-section ">
        <div className="container">
          <h2 className="meet-heading-section">Meet Us</h2>
          <div className="address-content">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-12 p-0">
                <div className="mumbai-section">
                  <h5 className="card_title">Head Office, Mumbai</h5>
                  <p className="meetusaddress">
                    1st Floor, Ganga House, above Kotak Mahindra Bank, LBS Road,
                    Vikhroli West,{" "}
                    <span className="text-nowrap">Mumbai-400 083</span>
                  </p>
                  <p>Ph: 8828104129</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 p-0">
                <div className="mumbai-section">
                  <h5 className="card_title">BANGALORE</h5>
                  <p className="meetusaddress">
                    No 03, 02nd Floor,Katha No 1377 ,01st Block Talacauvery
                    Nagar, Vibhutipura, Basavanagar, Bengaluru,{" "}
                    <span className="text-nowrap">Karnataka-560037</span>
                  </p>
                  <p>Ph: 9611967198</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 p-0">
                <div className="mumbai-section">
                  <h5 className="card_title">CHENNAI</h5>
                  <p className="meetusaddress">
                    Plot No.9 ,1st Floor, Akshaya, Elumalai Chettiar Road,
                    Sundaresan Nagar Maduravoyal, Porur, Vanagaram,Tiruvallur,
                    Chennai,{" "}
                    <span className="text-nowrap">Tamil Nadu, 600095</span>
                  </p>
                  <p>Ph:9611967198</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 p-0">
                <div className="mumbai-section">
                  <h5 className="card_title">Hyderabad</h5>
                  <p className="meetusaddress">
                    H.No: 8-3-892/1, Near Sarada College Nagarjuna Nagar,
                    Yellareddyguda, Ameerpet, Hyderabad,{" "}
                    <span className="text-nowrap">Telangana-500073</span>
                  </p>
                  <p>Ph: 9611967198</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
