import React from 'react'
import { useState } from 'react';
import { Spacer } from '../shared';
import styled from 'styled-components';
import PreApproval from './PreApproval';
import FastLane from './FastLane';
import VisitsMap from './VisitsMap';
const SearchNavbar = () => {
    const [tcolor, setTColor] = useState(0);
    const [tborder, setTborder] = useState(0);

    const handleButtonClick = (Index) => {
  
        setTColor(Index);
        setTborder(Index)  
      
         
      };

    const gettextColor = (Index) => {
        return tcolor === Index ?'#FD6A6A':'#000000' ;
      };

      const gettextBorder = (Index) => {
        return tborder === Index ?'2px solid #FD6A6A':'none' ;
      };
const getContent = (Index) => {
    switch (Index) {
      case 0:
        return (
          <Content>
            <p>This is the content for Search button.</p>
          </Content>
        );
      case 1:
        return (
          <Content>
            <PreApproval/>
          </Content>
        );
      case 2:
        return (
          <Content>
           <FastLane/>
          </Content>
        );
      case 3:
        return (
          <Content>
            <VisitsMap/>
          </Content>
        );
      default:
        return (
        <Content>
        <p>This is the content for Search button.</p>
        </Content>

        )
        ;
    }
  };

  return (
    <>
<Spacer height="2"></Spacer>
<SearchContainer>

    <List>
        <ListItem style={{color: gettextColor(0),borderBottom: gettextBorder(0)}} onClick={() =>{
          handleButtonClick(0)
        }}>Search</ListItem>
        <ListItem style={{color: gettextColor(1),borderBottom: gettextBorder(1)}}onClick={() =>{
         handleButtonClick(1)
         }}>Pre-Approval</ListItem>
        <ListItem style={{color: gettextColor(2),borderBottom: gettextBorder(2)}}onClick={() =>{
         handleButtonClick(2)
        }}>Fast-Lane</ListItem>
        <ListItem style={{color: gettextColor(3),borderBottom: gettextBorder(3)}}onClick={() =>{
         handleButtonClick(3)
         }}>Visit</ListItem>
    </List>
    {getContent(tcolor)}
        </SearchContainer>

    </>

  )
}

const SearchContainer = styled.div`
  width: 80%;
  // margin: 0px auto;

  padding:20px 0px;
  
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  position: absolute;
  top: 590px;
  left: 0;
  right: 0;
  margin: 0 auto; 
  background-color:white;
`;


const List=styled.div`
display:flex;
list-style-type:none;
justify-content:space-around;
// border-bottom:2px solid grey;

`

const ListItem=styled.div`
width:25%;
// border:2px solid red;
height:40px;
text-align:center;
font-size:20px;
&:hover {
    color: blue;
    font-weight:bold;
    font-size: 1.1em;

  }

`
const Content = styled.div`
  // padding: 50px;
`;
export default SearchNavbar;