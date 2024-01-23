import React from 'react'
import styled from 'styled-components'
import { Spacer } from '../shared'

const GetCar = () => {
  return (
    
    <Wrapper>
    <Spacer height="3"></Spacer>
        <h1 >Get a great car with a great financing</h1>    
        <p style={{textAlign:'center'}}>At Tricolor Auto we want you to start a new path whenever you want. Drive the car that you want, you only need three documents <br/>to start your financing process:</p>
     
        <Wrapper1 >

        <Wrapper2 >
          <img src="./images/proofofresidence.svg" alt="error"/>
          <h5>Proof of address</h5>
          <p style={{textAlign:'center'}}>The most recent utility bill or rent payment <br/>receipt works.</p>
        </Wrapper2>
        <Wrapper2 >
          <img src="./images/proofofincome.svg" alt="error"/>
          <h5>Proof of Income</h5>
          <p style={{textAlign:'center'}}>We accept your paystub, payroll receipts, or<br/> other proofs.</p>
        </Wrapper2>
        <Wrapper2 >
          <img src="./images/Officialid.svg" alt="error"/>
          <h5>Official ID</h5>
          <p style={{textAlign:'center'}}>We accept the photo of your passport, driver's <br/> license, etc.</p>
        </Wrapper2>
        </Wrapper1>
        <Btn>PRE-APPROVAL</Btn>
        <Spacer height="3"></Spacer>
    </Wrapper>
    
  )
}
const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:30px;

h1{
color:#1A1A1A;
font-size:34px;
font-family:Montserrat,sains-erif,
margin:8px 0px 16px;
padding:0px 0px 8px;
}
`
const Wrapper1=styled.div`

display:flex;
gap:40px;
`
const Wrapper2=styled.div`

display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:14px
// padding:15px;
`
const Btn=styled.div`
width:170px;
height:50px;
border-radius:8px;
background-color:#FD6A6A;
display:flex;
justify-content:center;
align-items:center;
color:white;
// font-size:20px;
font-weight:bold;
`
export default GetCar