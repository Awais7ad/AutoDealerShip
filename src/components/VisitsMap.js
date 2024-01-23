import React from 'react'
import {Container } from 'styled-bootstrap-grid';
import Visit from './Visit';
import { Spacer } from '../shared';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const VisitsMap = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1100, min: 776 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 776, min: 375 },
          items: 1
        }
      };
    const CardDataTest = [{
        image1: './images/Dallas.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Dallas / Ft. Worth',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'
    },
    {
        image1: './images/Houston.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Houstan',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'

    },
    {
        image1: './images/Austin.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Austin',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'
    },
    {
        image1: './images/San Antonio.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'San Antonio',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'

    },
    {
        image1: './images/Odessa.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Odessa',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'

    },
    {
        image1: './images/Corprus christi.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Corprus Christi',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'

    }
    ,
    {
        image1: './images/Temple.jpg',
        locationIcon: './images/location-icon.svg',
        locationHeading: 'Temple',
        buildingIcon: './images/city-icon.svg',
        buildingHeading: '8 dealer(s)',
        buildingnormalC: 'in this area',
        Visitbutton: 'VISIT US TODAY'

    },
    ]

    return (
        <Container>
            <Wrapper>
                <h3>We are closer than you think. Visit us!</h3>
            </Wrapper>
            <Carousel responsive={responsive}>

          
                {CardDataTest.map((card, index) => {
                    return (
                    <>
                            <Spacer height="1"></Spacer>
                            <Visit
                                Picture1={card.image1}
                                Picture2={card.locationIcon}
                                Content1={card.locationHeading}
                                Picture3={card.buildingIcon}
                                Content2={card.buildingHeading}
                                Content3={card.buildingnormalC}
                                Button={card.Visitbutton}
                                />
                                </>
                        
                    );
                })}
            
            </Carousel>
            <Spacer height="2"></Spacer>
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
export default VisitsMap