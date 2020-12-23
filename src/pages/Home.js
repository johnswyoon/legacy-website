import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../assets/img/profile.jpg";

import Footer from "../components/Footer";

function Home() {
  return (
    <div className="page">
      <Container fluid={true} className="d-flex align-content-center">
        <Row className="home-padding">
          <Col md={8} className="d-flex flex-wrap align-content-center">
            <h1 className="title-1">
              <span className="desktop">hi chingu, </span>i'm john!
            </h1>
            <h2 className="title-2 desktop">
              just finished my internship{" "}
              <a
                className="eqbank hvr-grow"
                href="https://www.eqbank.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                @eqbank
              </a>
            </h2>
            {/* <h2 className="title-2a mobile">i take photos</h2> */}
          </Col>
          <Col className="d-flex align-items-center">
            <div className="hvr-grow">
              <img
                className="linkedin-profile rounded-circle justify-content-center"
                src={profilePic}
                alt="Linkedin Profile"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
