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
            <h2 className="heading4-banner-section "> Careers</h2>
            <p className="paragraph-banners">
              Discover opportunities to build a rewarding career with us. Join
              our team and make an impact while advancing your professional
              growth and achieving your career aspirations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContact;
