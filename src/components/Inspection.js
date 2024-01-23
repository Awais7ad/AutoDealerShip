import React from 'react'
import styled from 'styled-components'

const Inspection = () => {
  return (
    <Wrapper>
        <Wrapper1>
            <h3>Drive cars you already<br/> know and love</h3>
            <p>At <span style={{fontWeight:'bold'}}>Tricolor Auto</span>, you will find the most reliable truck<br/> brands and ready for the road.</p>     
            <button>SEE INSPECTION DETAILS</button>       
        </Wrapper1>
        <Wrapper2>
        <video width="640px" height="450px" autoplay loop muted>
        <source src="./images/inspection_en_us.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </Wrapper2>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
height:500px;
// background-color:red;
justify-content:Center;
display:flex;
align-items:center;
gap:30px;
`
const Wrapper1=styled.div`
display:flex;
gap:20px;
flex-direction:column;
button{
    border:1px solid #FD6A6A;
    border-radius:10px;
    width:230px;
    height:60px;   
    cursor:pointer;
    outline:none;
    // style={{color:'#FD6A6A',backgroundColor:'white', fontWeight: 'bold'}}
    color:#FD6A6A;
    background-color:white;
    font-weight:bold;


}`
const Wrapper2=styled.div`

`
export default Inspection
