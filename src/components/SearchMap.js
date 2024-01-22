import React from 'react'
import { Container } from 'styled-bootstrap-grid';
import { Spacer } from '../shared';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Search from './Search';
import { IoSearchSharp } from "react-icons/io5";
const SearchMap = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const CardDataTest = [{
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },
    {
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },
    {
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },{
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },
    {
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },
    {
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    },
    {
        FrontContent: 'Pickups',
        FrontNormalImg: './images/trucksClose.webp',
        FrontHoverImg: './images/trucks-open.webp',
        BackContent: 'Pickups',
        BackParagraph: 'Shop thousands of high quality on demand online courses. 30 day satisfaction guarantee Find the right instructor for you.',
    }

    ]

    return (
        <Container>
            <Wrapper>
                
                <h3 >The road is waiting for you! Find your next car here.</h3>
            </Wrapper>
            <Spacer height="2"></Spacer>
            <Carousel responsive={responsive}>


                {CardDataTest.map((card, index) => {
                    return (
                        <>
                            <Search
                                FrontContent={card.FrontContent}
                                FrontNormalImg={card.FrontNormalImg}
                                FrontHoverImg={card.FrontHoverImg}
                                BackContent={card.BackContent}
                                BackParagraph={card.BackParagraph}
                                Content3={card.buildingnormalC}

                            />
                        </>

                    );
                })}

            </Carousel>
           
            <Spacer height="2"></Spacer>
            <AdditionalContent>
                <h3>Find Your Dream Car!</h3>
                <div style={{display:'flex',gap:'10px'}}>
                <InputBox type="search" placeholder='Find it here!'></InputBox>
                <SearchIcon><IoSearchSharp /></SearchIcon>
                </div>
                <h3>Explore Our Inventory!.</h3>
                <ExploreButton>EXPLORE</ExploreButton>
            </AdditionalContent>
        </Container>
    
    );


}
const Wrapper = styled.div`
padding-top:40px;
h3{
    text-align:center;
    font-weight:normal;
}

`
const AdditionalContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 20px;
    gap:20px;
    h3 {
     font-weight:normal;

    }
  
`;

const ExploreButton=styled.button`
width:120px;
height:50px;
border:none;
outline-color:none;
background-color:#FD6A6A;
border-radius:8px;
color:white;
font-weight:bold;

`
const SearchIcon=styled.div`
background-color:#FD6A6A;
width:45px;
height:46px;
border-radius:8px;
display:flex;
justify-content:center;
align-items:center;
padding:13px 16px;
margin:0px 6px;
color:white;
`
const InputBox=styled.input`

height:33px;
width:241px;
border:thin solid grey;
outline-color:none;
padding:16px 12px;
`
export default SearchMap;