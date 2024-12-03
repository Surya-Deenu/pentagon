import React from "react";
import Slider from "react-slick";
import year2021 from "../../../assets/Images/year2021.png";
import year2022 from "../../../assets/Images/year2022.png";
import year2020 from "../../../assets/Images/year2020.png";
import year2019 from "../../../assets/Images/year2019.png";
import year2018 from "../../../assets/Images/year2018.png";
import year2017 from "../../../assets/Images/year2017.png";
import year2016 from "../../../assets/Images/year2016.png";
import year2015 from "../../../assets/Images/year2015.png";
import year2014 from "../../../assets/Images/year2014.png";
import year2013 from "../../../assets/Images/year2013.png";
import year2012 from "../../../assets/Images/year2012.png";
import year2011 from "../../../assets/Images/year2011.png";
import year2010 from "../../../assets/Images/year2010.png";

import "./style.css";

const Timeline = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="timelene-section">
        <h2 className="heading-timeline-section">Timeline</h2>
        <div className=" container-fluid p-0">
          <Slider {...settings}>
            {/* <div>
                          <div className='timeline-top'>
                              <div className='top-content-border first-image-year-slide pt-4'>
                                  <img src={year2022} alt="images" className='mw-100 pt-1' />
                                  <p className='slide-prah-timeline'>Awarded By Carrier - Highest<br /> Selling Dealer Pan India for<br /> Toshiba VRF System</p>
                              </div>
                          </div>
                          <div className=' text-center buttom-content-fix'>
                              <img src={year2021} alt="images" className='mw-100 silde-image-timelin' />
                              <p className='slide-buttom-timeline'>Awarded By Carrier - Highest<br /> Selling Dealer Pan India for <br />Toshiba VRF System</p>
                          </div>
                      </div> */}
            <div>
              <div className="timeline-top">
                <div className="top-content-border pt-4">
                  <img src={year2020} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Awarded By Carrier - Highest Selling Dealer Pan India for
                    Toshiba VRF System
                  </p>
                </div>
              </div>
              <div className=" text-center buttom-content-fix">
                <img
                  src={year2019}
                  alt="images"
                  className="mw-100 silde-image-timelin"
                />
                <p className="slide-buttom-timeline">
                  Booked a Mixed development project of 1.8 Million Sqft - Rupa
                  Renisance, which includes 120 Keys Mariott Executive
                  apartments and 35 Floor commercial tower
                </p>
              </div>
            </div>
            <div>
              <div className="timeline-top">
                <div className="top-content-border">
                  <img src={year2018} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Parle Agro selected Pentagon to revamp their plant rooms at
                    7 different locations in india for more than 5000 tons
                    chilled water capacity
                  </p>
                </div>
              </div>
              <div className="text-center buttom-content-fix">
                <img
                  src={year2017}
                  alt="images"
                  className="mw-100 silde-image-timelin"
                />
                <p className="slide-buttom-timeline">
                  Started Retrofit division, which successfully completed some
                  of the prominet projects like J W Mariott, ICICI Bank, Jacob
                  House, Four Point shereton
                </p>
              </div>
            </div>
            <div>
              <div className="timeline-top">
                <div className="top-content-border">
                  <img src={year2016} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Booked Tier III Data Centre with Hewlett Packard for State
                    Bank Of India at Hydrabad with 9000 Tons chilled water
                    capacity
                  </p>
                </div>
              </div>
              <div className="text-center buttom-content-fix">
                <img
                  src={year2015}
                  alt="images"
                  className="mw-100 silde-image-timelin"
                />
                <p className="slide-buttom-timeline">
                  Booked 2 Million Sqft - Empire Towers in Navi Mumbai with 4000
                  Tons chilled water capacity
                </p>
              </div>
            </div>
            <div>
              <div className="timeline-top">
                <div className="top-content-border">
                  <img src={year2014} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Booked Jupiter Hospital - Pune which was awarded first Indo
                    Swiss Building Efficiency Project ( BEEP ) in India
                  </p>
                </div>
              </div>
              <div className="text-center buttom-content-fix">
                <img
                  src={year2013}
                  alt="images"
                  className="mw-100 silde-image-timelin"
                />
                <p className="slide-buttom-timeline">
                  Lodha selected Pentagon to execute HVAC works for their
                  tallest Tower In India - World Towers
                </p>
              </div>
            </div>
            <div>
              <div className="timeline-top">
                <div className="top-content-border">
                  <img src={year2012} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Started Operations in South with Branch in Banglore and
                    Chennai
                  </p>
                </div>
              </div>
              <div className="text-center buttom-content-fix">
                <img
                  src={year2011}
                  alt="images"
                  className="mw-100 silde-image-timelin"
                />
                <p className="slide-buttom-timeline">
                  Booked one of the largest VRF Project In Mumbai for Toshiba
                  Airconditioning for 6000 Tons Capacity
                </p>
              </div>
            </div>
            <div>
              <div className="timeline-top">
                <div className="top-content-border">
                  <img src={year2010} alt="images" className="mw-100" />
                  <p className="slide-prah-timeline">
                    Started Operations in Mumbai suburbs with Dealership of
                    Carrier and Toshiba Air conditioning.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Timeline;
