import React from 'react';
import styled from 'styled-components';
import { SiTrustpilot } from 'react-icons/si';
import TrustpilotRow from './TrustpilotRow';
import { FaRegMessage } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";

const Review = () => {
  return (
    <>
    <Wrapper>
      <Wrapper1>
        <h1>They’re now enjoying their car</h1>
        <h3>This is what our customers say</h3>
      </Wrapper1>
      <CenteredDiv>
        <Card>
          <TrustpilotRow />
          <h6>Jennifer was so awesome</h6>
          <TruncatedText>
            Jennifer was so awesome, she helped me in the best way she could, I was able to drive off in something nice
          </TruncatedText>
          <p>
            <span style={{ fontWeight: 'bold' }}>Date of experience</span>: January 22, 2024
          </p>
        </Card>
        <Card>
          <TrustpilotRow />
          <h6>Jennifer was so awesome</h6>
          <TruncatedText>
            Jennifer was so awesome, she helped me in the best way she could, I was able to drive off in something nice
          </TruncatedText>
          <p>
            <span style={{ fontWeight: 'bold' }}>Date of experience</span>: January 22, 2024
          </p>
        </Card>
        <Card>
          <TrustpilotRow />
          <h6>Jennifer was so awesome</h6>
          <TruncatedText>
            Jennifer was so awesome, she helped me in the best way she could, I was able to drive off in something nice
          </TruncatedText>
          <p>
            <span style={{ fontWeight: 'bold' }}>Date of experience</span>: January 22, 2024
          </p>
        </Card>
        <Card>
          <TrustpilotRow />
          <h6>Jennifer was so awesome</h6>
          <TruncatedText>
            Jennifer was so awesome, she helped me in the best way she could, I was able to drive off in something nice
          </TruncatedText>
          <p>
            <span style={{ fontWeight: 'bold' }}>Date of experience</span>: January 22, 2024
          </p>
        </Card>
      </CenteredDiv>
   
      <Wrapper1>
        <p>
          Rated <span style={{ fontWeight: 'bold' }}>4.3</span>/5 based on{' '}
          <span style={{ textDecoration: 'underline' }}>1,054 reviews</span>. Showing our 5 star reviews.
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>
            <SiTrustpilot style={{ color: '#7be382', height: '40px', width: '20px', paddingBottom: '10px' }} />
            Trustpilot
          </span>
        </p>
      </Wrapper1>
    </Wrapper>
    <WranntyNote>
       <p>
       * The Limited Warranty includes coverage for 18 months or 18,000 miles and is not transferable. 
       The Limited<br/> Warranty is bundled with the sale of the vehicle, is not priced separately, 
       and is not a cancellable product within the<br/> amount financed. Covered parts under the Limited Warranty include engine,
        transmission, drive axle(s), transfer<br/>case, and air conditioning. Seals and gaskets in any system not listed are not covered parts. 
        All Warranty repairs<br/> require a $99 deductible per visit. Independent third-party providers administer the Tricolor Limited <br/>Warranty.
       </p>
    </WranntyNote>
    <SocialIcon>
      <SocialIconWrap>
      <FaRegMessage />
      <h6 style={{margin:'0px 0px 0px 8px'}}>Contact Us</h6>
      </SocialIconWrap>
      <SocialIconWrap>
      <FaQuestion  />
      <h6 style={{margin:'0px 0px 0px 8px'}}>FAQS</h6>
      </SocialIconWrap>
      <SocialIconWrap>
      <BsWhatsapp />
      <h6 style={{margin:'0px 0px 0px 8px'}}>WhatsApp</h6>
      </SocialIconWrap>
    </SocialIcon>
    </>
  );
};



const Wrapper = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 400px;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h3 {
    font-weight: normal;
  }

  h1 {
    font-weight: normal;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding:20px 0px;
`;

const Card = styled.div`
  width: 250px;
  height: 159px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 10px 50px;
  padding: 10px;
  overflow: hidden;

  h6 {
    margin: 0;
  }
`;

const TruncatedText = styled.p`
  max-height: 3em; /* Set the maximum height in em or pixels */
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;
const WranntyNote=styled.div`
width:100%;
height:152px;
background-color:#5C5C5C;
// display:flex;
// justify-content:center;
// align-items:center;
text-align:center;
padding:15px 0px;
color:white;
font-size:13px;
`
const SocialIcon=styled.div`
background-color:#6c767e;
color:white;
height:70px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding:16px 0px;
gap:100px;

`
const SocialIconWrap=styled.div`

display:flex;
  justify-content: center;
  align-items: center;

`
export default Review;
