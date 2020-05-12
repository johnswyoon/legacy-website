import React from 'react';
import { Container, Row } from 'react-bootstrap';

import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';

function Footer() {
    return(
        <footer className="mt-5 page-footer fixed-bottom">
            <Container fluid={true}>
                <Row className="justify-content-center remove-space">
                    <p className="footer-text">made with 
                        <span role="img" aria-label="Heart"> 💞 </span>
                        by a
                        <span role="img" aria-label="South Korea"> 🇰🇷</span>
                        <span role="img" aria-label="Canada"> 🇨🇦</span>
                    </p>
                </Row>
                <Row className="justify-content-center pb-4 pt-3">
                        <a className="space hvr-grow" href="https://www.linkedin.com/in/johnswyoon/" target="_blank" rel="noopener noreferrer">
                            <img height="32" width="32" src={linkedin} alt="LinkedIn"/>
                        </a>
                        <a className="space hvr-grow" href="https://github.com/johnswyoon/" target="_blank" rel="noopener noreferrer">
                            <img height="32" width="32" src={github} alt="Github"/>
                        </a>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;