import React from 'react'
import styled from 'styled-components'
import { Spacer } from '../shared'
const FastLane = () => {
  return (
    <>
      <Wrapper>
        <h3>Speed-up your purchase</h3>
        <Wrapper1>
            <img src="./images\ICON 1.png" alt="Error"/>
            <img src="./images\ICON 2.png" alt="Error"/>
            <img src="./images\ICON 3.png" alt="Error"/>
        </Wrapper1>
        <p>Upload your documents, select your closest location, and schedule your visit <br/>in minutes!</p>
        <button style={{color:'white',backgroundColor:'#FD6A6A', fontWeight: 'bold'}}>START NOW</button>
        </Wrapper> 
        <Spacer height="2"></Spacer>
    </>
  )
}
const Wrapper=styled.div`

padding-top: 50px;

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:50px;
text-align:center;
button{
    border:none;
    border-radius:10px;
    width:150px;
    height:55px;   
    cursor:pointer;
    outline:none;
   }
h3{
  font-weight: normal;
}
`
const Wrapper1=styled.div`
display:flex;
gap:40px;
`
export default FastLane