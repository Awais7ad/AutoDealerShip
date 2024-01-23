import React from 'react'
import styled from 'styled-components'


const Warranty = () => {
  return (
  <Wrapper>
    <Wrapper1>
        <img src="./images/warranty-md-en.png" alt="error"/>
    </Wrapper1>
    <Wrapper2>
        <Wrapper3>
            
     <h3>Drive at ease</h3>
     <p>All of our vehicles include a Limited Warranty of 18 months<br/> or 18,000 miles*. Extend your coverage for up to 36 months<br/> or 36,000 miles* with our Premium Limited Warranty.</p>
      <button>SEE COVERAGE DETAILS</button>
      <p>* Whichever occurs first</p>
        </Wrapper3>
    </Wrapper2>
  </Wrapper>
  )
}
const Wrapper=styled.div`
width:100%;
height:620px;
background-color:#FD6A6A;
dsiplay:flex;
padding:48px 0px;
margin:0 -15px 48px;
display:flex;
justify-content:center;
align-items:center;
 `

const Wrapper1=styled.div`
width:50%;
display:flex;
justify-content:flex-end;
align-items:center;
// border:1px solid black;
height:100%;
`
const Wrapper2=styled.div`
width:50%;
color:white;
display:flex;
justify-content:flex-start;
align-items:center;
// border:1px solid black;
height:100%;
gap:20px;
`
const Wrapper3=styled.div`
display:flex;
gap:30px;
flex-direction:column;
button{
    border:none;
    border-radius:10px;
    width:230px;
    height:60px;   
    cursor:pointer;
    outline:none;
    // style={{color:'#FD6A6A',backgroundColor:'white', fontWeight: 'bold'}}
    color:#FD6A6A;
    background-color:white;
    font-weight:bold;

}
`

export default Warranty