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
            <p>Hello, my name is John. I'm currently studying Computer Engineering at the University of Waterloo, and interning at EQ Bank as a QA Analyst</p>
            </Content>
        </div>
    );
}

export default AboutPage;