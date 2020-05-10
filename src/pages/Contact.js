import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8} className="py-4">
                    <h1 className="title-1">let's talk</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;