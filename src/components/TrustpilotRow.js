import React from 'react';
import { SiTrustpilot } from "react-icons/si";

const TrustpilotRow = () => {
  // Create an array with 5 elements
  const trustpilotComponents = Array.from({ length: 5 }, (item, index) => (
    <SiTrustpilot key={index} style={{background:'#7be382',color:'white',marginRight:'4px'}}/>
  ));

  return <div style={{ display: 'flex' }}>{trustpilotComponents}</div>;
};

export default TrustpilotRow;