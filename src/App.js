import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="" bg="transparent" expand="sm">
          <Navbar.Brand href="/"><p className="nav-brand"><span className="space" role="img" aria-label="Bread">🍞</span>john yoon</p></Navbar.Brand>
          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto"> {/* margin left auto */}
            <Link className="nav-link" to="/">home</Link>
            <Link className="nav-link" to="/about">about</Link>
            <Link className="nav-link" to="/contact">contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
