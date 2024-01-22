import React from 'react'
import Menu from '../components/Menu'
import SearchNavbar from '../components/SearchNavbar'
// import styled from 'styled-components'
import GetCar from '../components/GetCar'
import { Spacer } from '../shared'

const Home = () => {
  return (
    <>
  
    <Menu/>
    <SearchNavbar/>
  
    <Spacer height="3"></Spacer>
    <GetCar/>
    </>
  )
}


export default Home