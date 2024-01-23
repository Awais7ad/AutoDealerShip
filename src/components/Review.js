import React from 'react';
import styled from 'styled-components';
import { SiTrustpilot } from 'react-icons/si';
import TrustpilotRow from './TrustpilotRow';

const Review = () => {
  return (
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
  width: 266px;
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

export default Review;
