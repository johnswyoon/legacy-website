import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Content from '../components/Content';

function Contact() {
    return (
        <div>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} className="py-4">
                        <h1 className="title-1">let's talk</h1>
                    </Col>
                </Row>
            </Container>
            <Content>
                <div className="normal-text">
                    <a href="mailto:john.sw.yoon@gmail.com" className="hvr-grow text-decoration-none text-reset"><span role="img" aria-label="Email: ">📩 : john.sw.yoon@gmail.com</span></a>
                    <br />
                    <a href="tel:5554280940" className="hvr-grow text-decoration-none text-reset"><span role="img" aria-label="Phone: ">☎️ : +1-(647)-677-2219</span></a>
                    <br />
                    <a href="https://www.instagram.com/john.sw.yoon" className="hvr-grow text-decoration-none text-reset" target="_blank"><span role="img" aria-label="Instagram: ">📷 : @john.sw.yoon</span></a> 
                    <br />
                    <p className="hvr-grow text-decoration-none text-reset" target="_blank"><span role="img" aria-label="Languages: ">🧠 : English / 한국어</span></p> 
                </div>
            </Content>
        </div>
    );
}

export default Contact;