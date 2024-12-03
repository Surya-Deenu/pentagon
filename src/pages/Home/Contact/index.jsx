import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

const ContactSection  = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  return (
    <>
        <div className='contact-section'>
            <div className='container'>
                <div className='contact-paragraph text-center'>
                    <h2 className='contact-sectoin-heading'>Its time to make yourself comfortable</h2>
                    <p className='contact-sectoin-parah pb-3'>Today, we provide a comfortable environment for customers, many building<br /> owners, into owning and operating an air-conditioning system.<br />Be a part of it.</p>
                    <a><Link to="ContactUs" className='button-contact-section ' onClick={scrollToTop} >Contact us</Link> </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactSection; 