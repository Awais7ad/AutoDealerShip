import React from 'react'
import styled from 'styled-components'
import { Spacer } from '../shared'

const Visit = ({Picture1,Picture2,Picture3,Content1,Content2,Content3,Button}) => {

  return (
<>


<Spacer height="4"></Spacer>
<Wrapper1>

    <Image1 src={Picture1} alt="error"/>
<Cont>

    <Wrap>
    <Image2 src={Picture2}/>
    <Heading1>{Content1}</Heading1>
    </Wrap>
    <Wrap >
    <Image3 src={Picture3} alt="error"/>
    <Heading2>{Content2}</Heading2>
    <Para1>{Content3}</Para1>
    </Wrap>
<Visitbtn>{Button}</Visitbtn>
</Cont>
</Wrapper1>

    </>
  )
}

const Wrapper1=styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:280px;
height:380px;
// box-shadow: -12px -8px 40px rgba(70,70,70,0.12) inset;
box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
gap:25px;
`
const Image1=styled.img`
width: 280px;
height:170px;
`
const Image2=styled.img`
width: 12px;
height:20px;
`
const Heading1=styled.h6`
font-weight:bold;
color:#FD6A6A;
`
const Wrap=styled.div`
display:flex;
padding-top:10px;
gap:5px;


`
const Image3=styled.img`
width: 12px;
height:20px;
`

const Heading2=styled.h6`
font-weight:bold;
// color:#FD6A6A;
`
const Para1=styled.p`
// text-align:center;
`
const Cont=styled.div`
padding:20px;
`
const Visitbtn=styled.button`
border:none;
outline:none;
background-color:#FD6A6A;
font-weight:bold;
width:100%;
height:50px;
color:white;
border-radius:8px;
`
export default Visit