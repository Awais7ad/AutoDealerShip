import React from 'react'
import styled from 'styled-components'
import { SiTrustpilot } from "react-icons/si";
const Review = () => {
  return (
   <Wrapper>
           <Wrapper1>
        <h1>They’re now enjoying their car</h1>
        <h3>This is what our customers say</h3>
          </Wrapper1>
         <card>
         

         </card>
          <Wrapper1>
        <p>Rated <span style={{fontWeight:'bold'}}>4.3</span>/5 based on <span style={{textDecoration:'underline'}}>1,054 reviews</span>.Showing our 5 star reviews.</p>
        <p><span style={{fontWeight:'bold'}}><SiTrustpilot style={{color:'#7be382',height:'40px',width:'20px',paddingBottom:'10px'}}/>Trustpilot</span></p>
          </Wrapper1>

   </Wrapper>
  )
}

const Wrapper=styled.div`
background-color:	#aeaeae;
width:100%;
height:400px;

`
const Wrapper1=styled.div`
display:flex;
flex-direction:column;
align-items:Center;

h3{
    font-weight:normal;
}
h1{
    font-weight:normal;
}

`
export default Review
