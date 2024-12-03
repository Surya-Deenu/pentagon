import React from 'react'
import BannerAbout from './BannerAbout';
import Mission from './Mission';
import RealPeople from './RealPeople';
import Awards from './Awards';
import Timeline from './Timeline';
import Gallery from './Gallery';
import OurClients from '../Home/OurClients';

const AboutUs = () => {
  return (
    <>
      <BannerAbout />
      <Mission />
      <RealPeople />
      <Awards />
      <Timeline />
      <Gallery />
      <OurClients />
    </>
  )
}

export default AboutUs;