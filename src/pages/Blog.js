import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/FeaturedPosts'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'

function Blog({setScrolled}) {
  useEffect(() => {
    document.title = 'Ether Technologies | Blog'
  }, [])

  return (
    <main>
        <ContactInfo />
        <Navbar setScrolled={setScrolled} firstWord={'Our'} secondWord={"Blog"} />
        <FeaturedPosts />
        <Footer />
    </main>
  )
}

export default Blog