import React from 'react'
import styled from 'styled-components'
// import { Spacer } from '../shared'

const PreApproval = () => {
  return (
    <>
  <Wrapper>
   <img src="./images/prequalify-md.jpg" alt="error" />
   <Wrapper1>
    <h3>
Pre-approval and get a $500 discount!</h3>
<p>Receive your pre-approval faster with our online assistance. Complete the request and get closer to the car that you need.</p>
<button style={{color:'white',backgroundColor:'#FD6A6A', fontWeight: 'bold'}}>PRE-APPROVAL</button>
   </Wrapper1>
  </Wrapper>
   {/* <Spacer height="4"></Spacer> */}
    </>
  )
}

const Wrapper=styled.div`
padding-top:80px;
padding-bottom:80px;
display:flex;
width:100%;
// height:400px;
`
const Wrapper1=styled.div`
display:flex;
flex-direction:column;
gap:35px;
h3{
    font-weight:normal;
}
button{
    border:none;
    border-radius:10px;
    width:150px;
    height:55px;   
    cursor:pointer;
    outline:none;
   }
`
export default PreApproval