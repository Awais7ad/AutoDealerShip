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
width:250px;
height:350px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px;
gap:10px;
`
const Image1=styled.img`
width: 250px;
height:160px;
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