import React from 'react'
import styled from 'styled-components'

const HelpHub = ({Picture1,Content1,Content2,Button}) => {
  return (

   
   

    <Card>
        <Image1 src={Picture1} alt="error"/>
        <CardContent>
            <h3>{Content1}</h3>
            <p>{Content2}</p>
            <button>{Button}</button>
        </CardContent>
    </Card>
  

  )
}



const Card=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:25px;


`
const CardContent=styled.div`
// box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
width:350px;
height:220px;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
gap:20px;
flex-direction:column;
button{
    border-radius:10px;
    width:250px;
    height:80px;   
    cursor:pointer;
    outline:none;
    color:white;
    background-color:#FD6A6A;
    font-weight:bold;
}
`
const Image1=styled.img`
width: 350px;
height:220px;
`
export default HelpHub