import React from 'react'
import Menu from '../components/Menu'
import SearchNavbar from '../components/SearchNavbar'
import styled from 'styled-components'
// import { Spacer } from '../shared'
const Home = () => {
  return (
    <Parent>
    <Menu/>
    <SearchNavbar/>
     </Parent>
  )
}
const Parent=styled.div`
  position: relative;
`

export default Home