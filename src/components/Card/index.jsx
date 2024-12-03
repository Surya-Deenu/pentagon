import React from 'react'
import CardImage from '../../assets/projects/Rupa1.png'
import idfc from "../../assets/sites/IDFC.jpg"
import jubliant from "../../assets/sites/Jubliant.jpg"
import ArrowMark from '../../assets/Icons/ArrowMark.svg'
import './style.css'
import { Link } from 'react-router-dom'


const Card = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return(
    <>
        <div className='container-fluid'>
            <div className='card-projects'>
            <h3 className='our-heading4-content'>Recent Projects</h3>
                <div className="card-projects-carousel">
                    <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
                        <div className="">
                            <div className="card image-devide-contant" >      
                                <img className="card-projects-image" src={idfc} alt="Card image" />
                                <div className="card-body contant-right-side">
                                    <h4 className="card-title-name">Jubiliant Food</h4>
                                    <p className="card-parah-name">Location: Bangalore</p>
                                    {/* <p className="card-text">Description:<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                    <Link to="/project-details/1"  onClick={scrollToTop} style={{textDecoration:"none"}}> <a  className="read-more">Read more </a><img src={ArrowMark} alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card image-devide-contant" >      
                                <img className="card-projects-image" src={jubliant} alt="Card image" />
                                <div className="card-body contant-right-side">
                                    <h4 className="card-title-name">IDFC Bank</h4>
                                    <p className="card-parah-name">Location: Thane /Hyderabad</p>
                                    {/* <p className="card-text">Description:<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                   <Link to="/project-details/2"  onClick={scrollToTop} style={{textDecoration:"none"}}> <a  className="read-more">Read more </a><img src={ArrowMark} alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="card image-devide-contant" >      
                                <img className="card-projects-image" src={CardImage} alt="Card image" />
                                <div className="card-body contant-right-side">
                                    <h4 className="card-title-name">Rupa Renaissance</h4>
                                    <p className="card-parah-name">Location:Navi Mumbai</p>
                                    {/* <p className="card-text">Description:<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                    <Link to="/project-details/5"  onClick={scrollToTop} style={{textDecoration:"none"}}> <a  className="read-more">Read more </a><img src={ArrowMark} alt="image" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;