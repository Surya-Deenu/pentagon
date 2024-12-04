import React from "react";

// ************************ import images *********************************
import footerLogo from "../../assets/Icons/footerLogo.svg";
import lingedIn from "../../assets/Icons/lingedIn.svg";
import twitter from "../../assets/Icons/twitter.svg";
import facebook from "../../assets/Icons/facebook.svg";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className=" container-fluid">
          <div className="row align-items-start">
            <div className="col-md-6 col-sm-6 col-lg-4">
              <Link to="/" onClick={scrollToTop}>
                <img
                  src={footerLogo}
                  alt="footerLogo"
                  className="footer-logo-icon logo-image-width"
                />
              </Link>
              {/* <div className="d-flex justify-content-start align-items-center gap-3 flex-wrap mt-3 footer-logo-icon">
                <Link>
                  <img
                    src={lingedIn}
                    alt="lingedIn"
                    className=""
                  />
                </Link>
                <Link>
                  <img
                    src={twitter}
                    alt="twitter"
                    className=""
                  />
                </Link>
                <Link>
                  <img
                    src={facebook}
                    alt="facebook"
                    className=""
                  />
                </Link>
              </div> */}
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 projects-section-content">
              <h4 className="footer-heading-h4 footer-content-project">
                Projects
              </h4>
              <ul className="footer-list-ul footer-ul-left">
                <li className="footer-list">
                  <Link
                    to="projects?type=IT Park"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    IT park
                  </Link>
                </li>
                <li className="footer-list">
                  <Link
                    to="projects?type=Food Industry"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    Food industry
                  </Link>
                </li>
                <li className="footer-list">
                  <Link
                    to="projects?type=Data center"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    Data center
                  </Link>
                </li>
                <li className="footer-list">
                  <Link
                    to="projects?type=Banking"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    Banking
                  </Link>
                </li>
              </ul>
              <ul className="footer-list-ul footer-ul-left ">
                <li className="footer-list">
                  <Link
                    to="projects?type=Mall"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    Mall
                  </Link>
                </li>
                <li className="footer-list">
                  <Link
                    to="projects?type=SEZ"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    SEZ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-2 footer-other-section">
              <h4 className="footer-heading-h4">Others</h4>
              <ul>
                <li className="footer-list">
                  <Link
                    to="aboutUs"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    About Us
                  </Link>
                </li>
                <li className="footer-list">
                  <Link
                    to="careers"
                    onClick={scrollToTop}
                    className="footer-list"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 footer-contact-section">
              <h4 className="footer-heading-h4">Contact Us</h4>
              <div className="contact-left-menus">
                <ul>
                  {/* <li className='footer-list-head pt-2 pb-2'>Mumbai</li> */}
                  <li className="footer-list p-0">Mobile No : 9611967198</li>
                  <li className="footer-list p-0 mt-2">
                    Email : jerald@thepentagon.in
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
