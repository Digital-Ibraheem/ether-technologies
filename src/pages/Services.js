import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ServiceGrid from '../components/ServiceGrid'
import ServiceDescription from '../components/ServiceDescription';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';

const Services = ({setScrolled}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'Ether Technologies | Services'
  }, [])

  return (
    <main>
      <ContactInfo />
      <Navbar setScrolled={setScrolled} firstWord={'Our'} secondWord={"Services"} />
      <ServiceGrid />
      <ServiceDescription />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Services