import React from 'react'
import styled from 'styled-components'
import FeaturedProducts from '../Components/FeaturedProducts'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Trusted from '../Components/Trusted'

 const Home = () => {


 const data = {
   name:"Vaishali Store"

 }
  return (

    <>
    <HeroSection myData = {data}/>
    <Services/>
    <FeaturedProducts/>
    <Trusted/>
  
    </>

  )
}



export default Home
