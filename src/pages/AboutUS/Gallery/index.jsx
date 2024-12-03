import React from 'react'
// import galleryOne from '../../../assets/Images/galleryOne.png'
// import gallerytwo from '../../../assets/Images/gallerytwo.png'
// import gallerythree from '../../../assets/Images/gallerytree.png'
// import galleryfour from '../../../assets/Images/galleryfour.png'
// import galleryfive from '../../../assets/Images/galleryfive.png'
// import gallerysix from '../../../assets/Images/gallerysix.png'
// import galleryseven from '../../../assets/Images/galleryseven.png'
// import galleryeight from '../../../assets/Images/galleryeight.png'
// import gallerynine from '../../../assets/Images/gallerynine.png'

import galleryOne from '../../../assets/aboutusGallery/gallery1.png'
import gallerytwo from '../../../assets/aboutusGallery/gallery2.png'
import gallerythree from '../../../assets/aboutusGallery/gallery3.png'
import galleryfour from '../../../assets/aboutusGallery/gallery4.png'
import galleryfive from '../../../assets/aboutusGallery/gallery5.png'
import gallerysix from '../../../assets/aboutusGallery/gallery6.png'
import galleryseven from '../../../assets/aboutusGallery/gallery7.png'
import galleryeight from '../../../assets/aboutusGallery/gallery8.png'
import gallerynine from '../../../assets/aboutusGallery/gallery9.png'
import './style.css'

const Gallery = () => {
  return (
    <>
        <div  className='gallery-page'>
            <h2 className='gallery-heading-top'>Gallery</h2>
            <div className='container'>
                <div className='gallery-section-image'>
                    <div className='image-gallery-center pt-5'>
                        <img src={galleryOne} alt="galex" className='mw-100 ' />
                        <img src={gallerytwo} alt="galex" className='mw-100 '/>
                        <img src={gallerythree} alt="galex" className='mw-100 '/>
                        <img src={galleryfour} alt="galex" className='mw-100 '/>
                        <img src={galleryfive} alt="galex" className='mw-100 '/>
                        <img src={gallerysix} alt="galex" className='mw-100 '/>
                        <img src={galleryseven} alt="galex" className='mw-100 '/>
                        <img src={galleryeight} alt="galex" className='mw-100 '/>
                        <img src={gallerynine} alt="galex" className='mw-100 '/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery
