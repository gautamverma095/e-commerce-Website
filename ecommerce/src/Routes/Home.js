import React from 'react'
import FeaturedProducts from '../Components/FeaturedProducts'
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
