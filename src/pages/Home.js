import React, { useRef, useEffect } from 'react'
import Welcome from '../components/Welcome.js';
import OurServices from '../components/OurServices.js';
import PastProjects from '../components/PastProjects.js';
import WhoWeAre from '../components/WhoWeAre.js';
import OurBlog from '../components/OurBlog.js';
import OurBundles from '../components/OurBundles.js';
import Footer from '../components/Footer.js';
import ContactForm from '../components/ContactForm.js';
import ContactInfo from '../components/ContactInfo.js';

const Home = ({scrolled, setScrolled}) => {
  let scrolledFirst = true;
  const myRef = useRef(null)
  useEffect(() => {
    if(scrolled) {
      myRef.current.scrollIntoView()
      setScrolled(false)
      scrolledFirst = false;
    } else if(scrolledFirst == false) {
      window.scrollTo(0, 0)
    }
  }, [scrolled])

  useEffect(() => {
    document.title = 'Ether Technologies | Home'
  }, [])

  return (
    <main>
        <ContactInfo />
        <Welcome setScrolled={setScrolled} />
        <div className="home-container">
            <OurServices />
        </div>
        <PastProjects myRef={myRef} />
        <WhoWeAre />
        <OurBlog />
        <ContactForm color='#407BFF' />
        {/* <OurBundles /> */}
        <Footer />
    </main>
  )
}

export default Home