import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import accenture from "../../../assets/clients/Accenture Logo.png";
import elpro from "../../../assets/clients/elpro-new-logo.png";
import azim from "../../../assets/clients/AzimLogo.png";
import biocon from "../../../assets/clients/Biocon.png";
import delphi from "../../../assets/clients/Delphi.png";
import fortis from "../../../assets/clients/Fortis.png";
import foxconn from "../../../assets/clients/Foxconn.png";
import idfc from "../../../assets/clients/IDFC.png";
import jpmc from "../../../assets/clients/JPMC.png";
import jj from "../../../assets/clients/Jj.png";
import KRahejga from "../../../assets/clients/KRahejga.png";
import lodha from "../../../assets/clients/Lodha.png";
import mahindra from "../../../assets/clients/Mahindra.png";
import mariott from "../../../assets/clients/Mariott.png";
import midas from "../../../assets/clients/Midas.png";
import Mindspace from "../../../assets/clients/Mindspace.png";
import mindtree from "../../../assets/clients/Mindtree.png";
import mphasis from "../../../assets/clients/Mphasis.png";
import prama from "../../../assets/clients/Prama.png";
import renewsys from "../../../assets/clients/Renewsys.png";
import Schneider from "../../../assets/clients/Schneider.png";
import sjs from "../../../assets/clients/Sjs.png";
import Toyota from "../../../assets/clients/Toyota.png";
import voco from "../../../assets/clients/Voco.png";
import "./style.css";

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="OurClients-page container-fluid"
        style={{ borderBottom: "none" }}
      >
        <h4 className="about-client-heading4">Our clients</h4>
        <div className="slide-image-abut-content">
          <Slider {...settings}>
            <div>
              <img src={voco} alt="image" />
            </div>
            <div>
              <img src={Toyota} alt="image" />
            </div>
            <div>
              <img src={sjs} alt="image" />
            </div>
            <div>
              <img src={Schneider} alt="image" />
            </div>
            <div>
              <img src={renewsys} alt="image" />
            </div>
            <div>
              <img src={prama} alt="image" />
            </div>
            <div>
              <img src={mphasis} alt="image" />
            </div>
            <div>
              <img src={mindtree} alt="image" />
            </div>
            <div>
              <img src={Mindspace} alt="image" />
            </div>
            <div>
              <img src={midas} alt="image" />
            </div>
            <div>
              <img src={mariott} alt="image" />
            </div>
            <div>
              <img src={mahindra} alt="image" />
            </div>
            <div>
              <img src={lodha} alt="image" />
            </div>
            <div>
              <img src={KRahejga} alt="image" />
            </div>
            <div>
              <img src={jj} alt="image" />
            </div>
            <div>
              <img src={jpmc} alt="image" />
            </div>
            <div>
              <img src={idfc} alt="image" />
            </div>
            <div>
              <img src={foxconn} alt="image" />
            </div>
            <div>
              <img src={fortis} alt="image" />
            </div>
            <div>
              <img src={delphi} alt="image" />
            </div>
            <div>
              <img src={biocon} alt="image" />
            </div>

            <div>
              <img src={azim} alt="image" />
            </div>

            <div>
              <img src={elpro} alt="image" />
            </div>
            <div>
              <img src={accenture} alt="image" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurClients;
