import React from 'react'
import { Spacer } from '../shared';
import styled from 'styled-components';
import HelpHub from './HelpHub';

const HelpHubMap = () => {
   
    const CardDataTest = [{
        image1: './images/prequalify.jpg',
        heading: 'Pre-approval',
        para: 'In minutes from anywhere.',
        BtnContent: 'START YOUR PRE-APPROvAL'
    },
    {
        image1: './images/visitus.jpg',
        heading: 'Book it',
        para: 'Schedule your visit today. It’s fast.',
        BtnContent: 'BOOK MY VISIT'
    },
    {
        image1: './images/payment.jpg',
        heading: 'Pay online',
        para: 'From your mobile device or PayNearMe.',
        BtnContent: 'PAY HERE'
    },
    ]

    return (
    <>
    <Wrapper>
             <Wrapper1>
        <h1>We’re here to help you!</h1>
        <h3>You’re a click away from your next car.</h3>
          </Wrapper1>
          <Wrapper2>


          
                {CardDataTest.map((card, index) => {
                    return (
                        <>
                            <Spacer height="1"></Spacer>
                            <HelpHub
                                Picture1={card.image1}
                                Content1={card.heading}
                                Content2={card.para}
                                Button={card.BtnContent}
                                />
                                </>
                        
                    );
                })}
            
         
                        </Wrapper2>
            <Spacer height="2"></Spacer>
                                </Wrapper>
      </>
    );


}

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
const Wrapper=styled.div`
width:100%;
height:700px;
background-color:#F2F2EF;
padding:80px 0px;

`
const Wrapper2=styled.div`
display:flex;
justify-content:center;
border-radius:8px;
`
export default HelpHubMap