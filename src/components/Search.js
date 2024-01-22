import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdRefresh } from "react-icons/io";


const Search = ({FrontContent, FrontNormalImg,FrontHoverImg,BackContent, BackParagraph}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <CardContainer isFlipped={isFlipped}>
        <CardFront>
          <h5>{FrontContent}</h5>
          <FrontImageContainer>
            <FrontImage src={FrontNormalImg} alt="error" />
            <HoverImage src={FrontHoverImg} alt="error" />
          </FrontImageContainer>
          <div style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
          <IoMdRefresh onClick={handleFlip} style={{width:'25px',height:'50px',marginRight:'10px'}}/>
          </div>
        </CardFront>
        <CardBack>
          <h5>{BackContent}</h5>
          <p style={{fontSize:'15px',display:'flex',justifyContent:'center',width:'90%',alignItems:'center',lineHeight:'25px'}}> {BackParagraph}</p>
          <ExploreButton>Explore</ExploreButton>
          <div style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
          <IoMdRefresh onClick={handleFlip} style={{width:'25px',height:'50px',marginRight:'10px'}}/>
          </div>
        </CardBack>
      </CardContainer>
    </>

  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 300px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const CardSide = styled.div`
  width: 250px;
  height: 280px;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  justify-content:space-between;
  padding:10px;


`;

const FrontImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s; /* Add transition for smooth image change */
`;

const HoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0; /* Initially hide the hover image */
  transition: opacity 0.3s; /* Add transition for smooth image change */
`;

const CardFront = styled(CardSide)`
  box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
  color: black;
  background-color: #fff; /* Set the default background color */
  transition: background-color 0.3s; /* Add transition for smooth effect */
  &:hover {
    background-color: #FD6A6A; /* Set the background color on hover */
    color:white;
    & > ${FrontImageContainer} {
      & > ${FrontImage} {
        opacity: 0; /* Hide the default image */
      }
      & > ${HoverImage} {
        opacity: 1; /* Show the hover image */
      }
    }
  }
`;

const CardBack = styled(CardSide)`
  box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
  transform: rotateY(180deg);
  color: black;

`;
const ExploreButton=styled.button`
width:150px;
height:60px;
border:none;
outline-color:none;
background-color:#FD6A6A;
border-radius:4px;

`

export default Search;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { IoMdRefresh } from "react-icons/io";
// import { Spacer } from '../shared';

// const Search = () => {
//   const [isFlipped, setFlipped] = useState(false);

//   const handleFlip = () => {
//     setFlipped(!isFlipped);
//   };

//   return (
//     <>
//     <Spacer height="3"></Spacer>
//       <h3 style={{display:'flex',justifyContent:'center'}}>The road is waiting for you! Find your next car here.</h3>
//       <Spacer height="5"></Spacer>
//       <CardContainer isFlipped={isFlipped}>
//         <CardFront>
//           <h5>Pickups</h5>
//           <FrontImageContainer>
//             <FrontImage src="./images/trucksClose.webp" alt="error" />
//             <HoverImage src="./images/trucks-open.webp" alt="error" />
//           </FrontImageContainer>
//           <IoMdRefresh onClick={handleFlip} />
//         </CardFront>
//         <CardBack>
//           <h5>Pickups</h5>
         
//           <p>Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee. Find the right instructor for you.</p>
//           <ExploreButton>Explore</ExploreButton>
//           <IoMdRefresh onClick={handleFlip} />
//         </CardBack>
//       </CardContainer>
//     </>
//   );
// };

// const CardContainer = styled.div`
//   width: 100%;
//   height: 500px;
//   perspective: 1000px;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
//   cursor: pointer;
//   display:flex;
//   justify-content:center;
// `;

// const CardSide = styled.div`
//   width: 250px;
//   height: 300px;
//   position: absolute;
//   backface-visibility: hidden;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content:center;
//   align-items:center;
//   justify-content:space-between;
//   padding-top:20px;

// `;

// const FrontImageContainer = styled.div`
//   width: 100%;
//   height: 150px;
//   overflow: hidden;
//   border-radius: 10px;
//   position: relative;
// `;

// const FrontImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: opacity 0.3s; /* Add transition for smooth image change */
// `;

// const HoverImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
//   top: 0;
//   left: 0;
//   opacity: 0; /* Initially hide the hover image */
//   transition: opacity 0.3s; /* Add transition for smooth image change */
// `;

// const CardFront = styled(CardSide)`
//   box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
//   color: black;
//   background-color: #fff; /* Set the default background color */
//   transition: background-color 0.3s; /* Add transition for smooth effect */

//   &:hover {
//     background-color: #FD6A6A; /* Set the background color on hover */
//     color:white;
//     & > ${FrontImageContainer} {
//       & > ${FrontImage} {
//         opacity: 0; /* Hide the default image */
//       }
//       & > ${HoverImage} {
//         opacity: 1; /* Show the hover image */
//       }
//     }
//   }
// `;

// const CardBack = styled(CardSide)`
//   box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
//   transform: rotateY(180deg);
//   color: black;

// `;
// const ExploreButton=styled.button`
// width:100px;
// height:50px;
// border:none;
// outline-color:none;
// background-color:#FD6A6A;
// border-radius:4px;

// `

// export default Search;


// // import React, { useState } from 'react';
// import styled from 'styled-components';
// import { IoMdRefresh } from "react-icons/io";
// import { useState } from 'react';
// const Search = () => {
//   const [isFlipped, setFlipped] = useState(false);

//   const handleFlip = () => {
//     setFlipped(!isFlipped);
//   };

//   return (
//     <>
//       <h1>The road is waiting for you! Find your next car here.</h1>
//       <CardContainer isFlipped={isFlipped}>
//         <CardFront>
//           <h5>Pickups</h5>
//           <img src="./images/trucksClose.webp" alt="error" />
//           <IoMdRefresh onClick={handleFlip} />
//         </CardFront>
//         <CardBack>
//           <h5>Pickups</h5>
//           <p>Shop thousands of high-quality on-demand online courses. 30-day satisfaction guarantee. Find the right instructor for you.
//           30-day satisfaction guarantee. Find the right instructor for you.
//           </p>
//           <IoMdRefresh onClick={handleFlip} />
//         </CardBack>
//       </CardContainer>
//     </>
//   );
// };

// const CardContainer = styled.div`
//   width: 230px;
//   height: 270px;
//   perspective: 1000px;
//   transform-style: preserve-3d;
//   transition: transform 0.5s;
//   transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
//   cursor: pointer;
// `;

// const CardSide = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   backface-visibility: hidden;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 10px;
// `;

// const CardFront = styled(CardSide)`
//   box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
//   display: flex;
//   gap: 25px;
//   color: black;
// `;

// const CardBack = styled(CardSide)`
//   box-shadow: inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px rgba(0,0,0,0.25);
//   transform: rotateY(180deg);
//   color: black;
//   display:flex;
//   align-items:center;
//   gap:10px;
// `;

// export default Search;
