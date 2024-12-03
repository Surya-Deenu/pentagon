import React from 'react'
import BannerContact from './Banner/index';
import Meet from './Meet';
import FormValidation from '../../components/FormValidation';

const ContactUs = () => {
  return (
    <>
        <BannerContact />
        <FormValidation />
        <Meet />
    </>
  )
}

export default ContactUs;
