import React from 'react'
import styled from 'styled-components'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import Trusted from './Components/Trusted'

 const Home = () => {


 const data = {
   name:"Vaishali Store"

 }
  return (

    <>
    <HeroSection myData = {data}/>
    <Services/>
    <Trusted/>
  
    </>

  )
}



export default Home
