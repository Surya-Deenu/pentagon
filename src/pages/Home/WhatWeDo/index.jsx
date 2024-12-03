import React from 'react'
import WhatWe from '../../../assets/Images/whatWe.png'
import './style.css'

const WhatWedo = () => {
  return (
    <>
      <div className='what-we-section'>
            <div className='contant-responsive-right'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 left-content-whatwe'>
                        <h4 className='what-we-heading4'>What we do</h4>
                        <h4 className='what-we-second-heading4'>In the last decade, we have installed more than 30,000 tons of projects virtually for every type of commercial buildings.</h4>
                        <p className='what-we-parah-left'>HVAC systems are critical elements of any facility’s design. Be it corporate projects, IT/ITES buildings, Hospitals, Industries etc.. They must provide a high level of occupant comfort and reliability without any interruption.We have designed and installed HVAC systems in a range of unique, challenging and demanding environments. Sectors we have served are varied and diversified in nature.</p>
                    </div>
                    <div className='col-md-6 col-sm-12 image-align-what-content'>
                        <img src={WhatWe} alt="img" className='mw-100' />
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default WhatWedo;
