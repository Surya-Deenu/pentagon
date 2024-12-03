import React,{useState,useEffect} from 'react'
import galleryImage from '../../../assets/Images/galleryImage.png';
import galleryRight from '../../../assets/Images/galleryRight.png';
import projects from "../../../constants/data"
import './style.css'

const ProjectDetailsPage = () => {
     const params = window.location.pathname.split("/").pop();
     const[data,setData]=useState();

     useEffect(() => {
        if(params){
         const value =projects.filter((curElem)=>{
           return curElem?.id == params;
         })
         setData(value[0]);
        }
     }, [])

  return (
    <>
          <div className='blog-project-page'>
              <div className='details-content-blog'>
                  <h6 className='pt-3 heading-content-blog-post'>Location: <span className='contentdata'>{data?.location || "---"}</span></h6>
                  <h6 className='pt-3 heading-content-blog-post'>Nature of job: <span className='contentdata'>{data?.classification || "---"}</span></h6>
                 {data?.capacity &&  <h6 className='pt-3 heading-content-blog-post'>Installed Capacity: <span className='contentdata'>{data?.capacity || "---"}</span></h6>}
                  <h6 className='pt-3 heading-content-blog-post'>Area: <span className='contentdata'>{data?.area || "---"}</span></h6>
           
                  <h6 className='pt-3 heading-content-blog-post'>HVAC consultant: <span className='contentdata'>{data?.consultant || "---"}</span></h6>
                  <h6 className='pt-3 heading-content-blog-post'>Job status: <span className='contentdata'>Completed</span></h6>
                 </div>
              {/* <div className='gallery-post-details'>
                  <h6 className='pt-3 pb-4 heading-content-blog-post'>Gallery</h6>
                  <div>
                      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <img className=" px-2 mobile-image-res" src={galleryImage} alt="First slide" />
                                  <img className=" px-2 mobile-image-res" src={galleryRight} alt="First slide" />
                              </div>
                              <div className="carousel-item">
                                    <img className=" px-2 mobile-image-res" src={galleryImage} alt="First slide" />
                                  <img className=" px-2 mobile-image-res" src={galleryRight} alt="First slide" />
                              </div>
                              <div className="carousel-item">
                                    <img className=" px-2 mobile-image-res" src={galleryImage} alt="First slide" />
                                  <img className=" px-2 mobile-image-res" src={galleryRight} alt="First slide" />
                              </div>
                          </div>
                          <button className="carousel-control-prev preve-slide-scroll" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon prev-icon slide-click-button-preve" aria-hidden="true"></span>
                          </button>
                          <button className="carousel-control-next next-slide-scroll" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span className="carousel-control-next-icon next-icon-details slide-click-button-next" aria-hidden="true"> </span>
                          </button>
                      </div>
                  </div>
              </div> */}
          </div>
    </>
  )
}

export default ProjectDetailsPage;