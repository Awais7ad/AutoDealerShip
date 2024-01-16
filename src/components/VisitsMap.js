import React from 'react'
import { Row, Col, Container } from 'styled-bootstrap-grid';
import Visit from './Visit';
import { Spacer } from '../shared';
import styled from 'styled-components';
const VisitsMap = () => {
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
    // {
    //     image1: './images/Temple.jpg',
    //     locationIcon: './images/location-icon.svg',
    //     locationHeading: 'Temple',
    //     buildingIcon: './images/city-icon.svg',
    //     buildingHeading: '8 dealer(s)',
    //     buildingnormalC: 'in this area',
    //     Visitbutton: 'VISIT US TODAY'

    // },
    ]

    return (
        <Container>
            <Wrapper>
                <h1>We are closer than you think. Visit us!</h1>
            </Wrapper>
            <Row>
                {CardDataTest.map((card, index) => {
                    return (
                        <Col lg={4} md={6} sm={6} key={index}>
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
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );


}
const Wrapper = styled.div`
padding-top:40px;
h1{
    text-align:center;
    font-weight:normal;
}

`
export default VisitsMap