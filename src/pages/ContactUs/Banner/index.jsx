import React from "react";
import ContactBanner from "../../../assets/Images/contactBanner.png";
import "./style.css";

const BannerContact = () => {
  return (
    <>
      <div className="contact-page">
        <img
          src={ContactBanner}
          alt="banner"
          className="mw-100 image-banner-contact"
        />
        <div className="heading-contact-section">
          <div className="container">
            <h2 className="heading4-banner-section ">
              Let’s Connect and Create Comfort Together
            </h2>
            <p className="paragraph-banners">
              Reach out to us for innovative HVAC solutions, tailored to your
              needs. Our team is ready to assist you with expert advice,
              services, and support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContact;
