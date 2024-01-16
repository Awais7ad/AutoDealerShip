import React from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Menu = () => {
  return (
    <Wrapper>
        <Container>

<Row justifyContent="end"  >
    <Col lg={7} >

        <Paragraph>

      <h1>We know what moves <br/>you</h1>
      <p>With Tricolor Auto, drive the car you and your family want,<br/>
         with a financing that meets your needs. No credit, no social, <br/>
        no problem. Start your own path today!</p>
      <Wrapper1>
      <button style={{color:'white',backgroundColor:'#FD6A6A', fontWeight: 'bold'}}>GET PRE-APPROVED!</button>
      <button style={{color:'#FD6A6A',backgroundColor:'white', fontWeight: 'bold'}}>EXPLORE INVENTORY</button>
      </Wrapper1>
        </Paragraph>
    </Col>
</Row>
        </Container>
    </Wrapper>
  )
};


const Paragraph =styled.div`
 height:100vh;
display:flex;
justify-content:center;
gap:1rem;
flex-direction:column;
color:white;
h1{
    font-size:60px;

}
p{
    font-size:25px;
 
}
`

const Wrapper=styled.div`
height:650px; 
background-image:url('./images/new-hero-md.webp');
background-repeat:no-repeat;
background-size:cover;
background-position:58% 0px;
width:100%;

`
const Wrapper1=styled.div`
display:flex;
justify-content:flex-start;
gap:20px;
button{
 border:none;
 border-radius:10px;
 width:230px;
 height:60px;   
 cursor:pointer;
 outline:none;
}

`

export default Menu