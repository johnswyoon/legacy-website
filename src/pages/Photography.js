import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../components/Content";

function Contact() {
  return (
    <div className="page">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8} className="py-4">
            <h1 className="title-1">coming soon...</h1>
          </Col>
        </Row>
      </Container>
      <Content>
        <div className="normal-text"></div>
      </Content>
    </div>
  );
}

export default Contact;
