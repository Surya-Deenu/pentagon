import React from 'react'
import Banner from './Home/Banner/index'
import OurClient from './Home/OurClients/index'
import RecentProjects from '../components/Card/index'
import AboutSection from './Home/AboutSection'
import OurProcess from './Home/OurProcess/index'
import WhatWedo from './Home/WhatWeDo'
import OurPride from './Home/OurPride'
import Testimonials from './Home/Testimonials'
import ContactSection from './Home/Contact'

const Landing = () => {
  return (
    <>
        <div>
            <Banner />
            <OurClient />
            <RecentProjects />
            <AboutSection />
            <OurProcess />
            <WhatWedo />
            <OurPride />
            <Testimonials />
            <ContactSection />
        </div>
    </>
  )
}

export default Landing;