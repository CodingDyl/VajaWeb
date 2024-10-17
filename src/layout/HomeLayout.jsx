import React from 'react'
import Hero from '../pages/Hero'
import InfoHome from '../pages/InfoHome'
import HomeCustomers from '../pages/HomeCustomers'
import Footer from '../components/Footer'
const HomeLayout = () => {
  return (
    <>
        <Hero />
        <InfoHome />
        <HomeCustomers />
        <Footer />
    </>
  )
}

export default HomeLayout