import React from 'react'
import FirstSection from '../components/Homepage/FirstSection'
import FourthSection from '../components/Homepage/FourthSection'
import SecondSection from '../components/Homepage/SecondSection'
import ThirdSection from '../components/Homepage/ThirdSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import FifthSection from '../components/Homepage/FifthSection'

function HomePage() {
  return (
    <div style={{width:'100%', overflowX:'hidden'}}>
      <Navbar />

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Gallery />
      <FifthSection />

      <Footer />
    </div>
  )
}

export default HomePage
