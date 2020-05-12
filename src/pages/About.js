import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Content from '../components/Content';

function AboutPage() {
    return (
        <div>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} className="py-4">
                        <h1 className="title-1">about me</h1>
                    </Col>
                </Row>
            </Container>
            <Content>
            <div className="normal-text">
                <div>
                    <p>John is my name.</p>
                    <p>Yoon is also my name.</p>
                </div>
                <br />
                <div>
                    <p>I am a first year at the University of Waterloo.</p>
                    <p>Computer Engineering is my major.</p>
                    <br />
                    <p>Also, just finished an internship at <a className="eqbank" href="https://www.eqbank.ca" target="_blank" rel="noopener noreferrer">EQ Bank</a>.</p>
                </div>
                <br />
            </div>
            </Content>
        </div>
    );
}

export default AboutPage;