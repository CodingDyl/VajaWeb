import React from 'react'
import Hero from '../pages/Hero'
import InfoHome from '../pages/InfoHome'
import HomeCustomers from '../pages/HomeCustomers'
import Footer from '../components/Footer'
import Testimonials from '../components/Testamonials'

const HomeLayout = () => {
  return (
    <>
        <Hero />
        <InfoHome />
        <HomeCustomers />
        <Testimonials />
        <Footer />
    </>
  )
}

export default HomeLayout