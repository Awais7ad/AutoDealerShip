import React from 'react'
import Menu from '../components/Menu'
import SearchNavbar from '../components/SearchNavbar'
// import styled from 'styled-components'
import GetCar from '../components/GetCar'
import { Spacer } from '../shared'
import Warranty from '../components/Warranty'
import Inspection from '../components/Inspection'

import HelpHubMap from '../components/HelpHubMap'
import Review from '../components/Review'
import Navbar from '../components/NavBar'
// import SimpleHeader from '../components/SimpleHeader'

const Home = () => {
  return (
    <>
     <Navbar/>
    
    <Menu/>
    <SearchNavbar/>
  
    <Spacer height="3"></Spacer>
    <GetCar/>
    <Spacer height="3"></Spacer>
    <Warranty/>
    <Spacer height="3"></Spacer>
    <Inspection/>
    <Spacer height="3"></Spacer>
    <HelpHubMap/>
    <Review/>
    </>
  )
}


export default Home