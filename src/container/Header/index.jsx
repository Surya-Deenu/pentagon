// *************************** Import package **********************************

import React   from 'react';
import headerLogo from '../../assets/Icons/headerLogo.svg';
import './header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Header= () =>{

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <>
            <div className="header-section">
                <Navbar expand="md" >
                    <Navbar.Brand >
                        <div className="logo-left">
                            <Link to="/" onClick={scrollToTop} ><img src={headerLogo} alt="img-logo" /></Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <div className="logo-right" >
                            <button className='button-header-menus'> <Link to="aboutUs" onClick={scrollToTop}  className="log-btn">About Us</Link></button>
                            <button className='button-header-menus' > <Link to="projects" onClick={scrollToTop}  className="log-btn" > Projects</Link></button>
                            <button className='button-header-menus' ><Link to="careers" onClick={scrollToTop}  className="log-btn" >Careers</Link></button>
                            <button className='button-header-menus' > <Link to="contactus" onClick={scrollToTop}  className="log-btn" >Contact Us</Link></button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;