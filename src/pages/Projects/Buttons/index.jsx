import React, {useState} from 'react'
import './style.css'

const ProjectsBlog = (Menu) => {

    const [items, setItems] = useState(Menu);
    const filteritems = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category == categItem;
        });

        setItems(updatedItems);
    }

  return (
    <>
        <div className='project-blog-section'>
            <div className='projects-blog-sections'>
                {/* <div className='blog-buttons'>
                    <button className='project-buttons active-all'>All</button>
                    <button className='project-buttons' onClick={() => filteritems('Corporate')} >Corporate</button>
                    <button className='project-buttons'>IT/ITES</button>
                    <button className='project-buttons'>Data centers</button>
                    <button className='project-buttons'>Developers</button>
                    <button className='project-buttons'>Hospitals</button>
                    <button className='project-buttons'>Retail</button>
                    <button className='project-buttons'>Industrial</button>
                    <button className='project-buttons'>Retrofit</button>
                    
                </div> */}
                  <div className='text-end'>
                      <select name="state" className='name-label-blog mt-5'  >
                          <option value="volvo">All projects</option>
                          <option value="saab">Corporate</option>
                          <option value="opel">IT/ITES</option>
                          <option value="audi">Data centers</option>
                          <option value="saab">Developers</option>
                          <option value="saab">Hospitals</option>
                          <option value="saab">Retail</option>
                          <option value="saab">Industrial</option>
                          <option value="saab">Retrofit</option>
                      </select>
                  </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsBlog;






  //     <>
                                    //     <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">

                                    //     <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage1}  alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //             <button classtitle="completed mt-3">Completed</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage2} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //             <Link to="/project-details" onClick={scrollToTop} ><button classtitle="ongoing mt-3">Ongoing</button></Link>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <p>{category} {title}</p>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage3} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="ongoing mt-3">Ongoing</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage4} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="completed mt-3">Completed</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage5} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="completed mt-3">Completed</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage6} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="completed mt-3">Completed</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage7} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="completed mt-3">Completed</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage8} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="ongoing mt-3">Ongoing</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    // <Link to="/project-details" onClick={scrollToTop} classtitle="text-color-content">
                                    //   <div classtitle="cards" >
                                    //       <img classtitle="card-img-top mw-100" src={projectImage9} alt="Card image" />
                                    //       <div classtitle="card-body">
                                    //           <button classtitle="ongoing mt-3">Ongoing</button>
                                    //           <h4 classtitle='pt-2'>Heading</h4>
                                    //           <h6 classtitle="card-title pt-2"> Location: Place Name</h6>
                                    //           <p classtitle="card-text pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    //       </div>
                                    //   </div>
                                    // </Link>
                                    //     </>