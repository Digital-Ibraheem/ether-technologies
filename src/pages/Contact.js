import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'

const Contact = ({setScrolled}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.title = 'Ether Technologies | Contact'
  }, [])
  return (
    <div>
        <ContactInfo />
        <Navbar setScrolled={setScrolled} firstWord={'Get In'} secondWord={"Touch"} />
        <ContactForm showWave={false} />
        <Footer />
    </div>
  )
}

export default Contact