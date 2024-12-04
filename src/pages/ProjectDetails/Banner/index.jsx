import React, { useEffect,useState } from 'react'
import projectImage from '../../../assets/Images/projectDetail.png'
import projects from "../../../constants/data"
import './style.css'

const ProjectDetailBanner = () => {
  const[title,setTitle] = useState("")
     const params = window.location.pathname.split("/").pop();

useEffect(()=>{
  if(params){
   const value =projects.filter((curElem)=>{
     return curElem.id == params;
   })
   setTitle(value[0]?.category);
  }
},[])
  return (
    <>
      <div className='projects-section'>
        <div className='banner-projects'>
          <img src={projectImage} alt="banner" className='mw-100 image-blog-banner' />
          <div className='projects-details-conte'>
            <h2 className='heading-project-banner-details' >{title || "" }</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailBanner;