

// Navbar.js
import React from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPermIdentity } from "react-icons/md";
// import { IoLanguage } from "react-icons/io5";
const Navbar = () => {
  return (
    <Container>
       
    <NavbarWrapper>
    <Row>
      <NavList>
    <Col lg={3} md={2}>
        <NavItem style={{display:'flex',alignItems:'center'}} >
          <NavLink  ><img src='./images/logo.svg' alt="logo file corrupted"/></NavLink>
        </NavItem>
   </Col>
   <Col lg={9} md={10}>
    <div style={{display:'flex',gap:'15px',alignItems:'center'}}>

     <NavItem>
          <NavLink >Buy <RiArrowDropDownLine style={{width:'16px',height:'24px'}}/></NavLink>
     </NavItem>
        <NavItem>
          <NavLink >Pay <RiArrowDropDownLine /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink >Services <RiArrowDropDownLine /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink >Store <RiArrowDropDownLine /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink >Favorites<RiArrowDropDownLine /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink >|</NavLink>
        </NavItem>
        <NavItem>
          <NavLink ><button style={{color:'white',backgroundColor:'#FD6A6A', fontWeight: 'bold'}}>Get Pre-Approved</button></NavLink>
        </NavItem>
        <NavItem>
          <NavLink >English<RiArrowDropDownLine /></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <MdPermIdentity style={{color:'white',width:'20px',height:'20px'}}/>
            </div></NavLink>
        </NavItem>
    </div>
   </Col>
      </NavList>
    </Row>
    </NavbarWrapper>
    </Container>
  );
};

const NavbarWrapper = styled.nav`
  background-color: white;
  padding: 15px;
//   height:100px;
//   display:flex;
//   align-items:center;
  `

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  width:100%;

  
  
`;

const NavItem = styled.li`
  margin-right: 15px;
  font-size:16px;
  font-family:Montserrat;
  font-weight:normal;
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  button{
    border:none;
    border-radius:10px;
    width:150px;
    margin:0px 6px;
    pading:13px 8px;
    height:48px;  
    cursor:pointer;
    outline:none;
   }
`;

export default Navbar;
