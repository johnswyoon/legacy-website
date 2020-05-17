import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../assets/img/profile.jpg';

function Home() {
    return (
        <div className="page">
            <Container fluid={"md"} className="d-flex align-content-center">
                <Row className="justify-content-center home-padding">
                    <Col xs={12} md={8} className="d-flex flex-wrap align-content-center">
                        <h1 className="title-1">hi chingu, i'm john!</h1>
                        <h2 className="title-2">just finished my internship <a className="eqbank hvr-grow" href="https://www.eqbank.ca" target="_blank" rel="noopener noreferrer">@eqbank</a></h2>
                    </Col>
                    <Col xs="auto" md={4}>
                        <div className="hvr-grow">
                            <img className="linkedin-profile rounded-circle justify-content-center" src={profilePic} alt="Linkedin Profile"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;