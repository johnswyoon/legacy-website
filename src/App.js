import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import About from "./pages/About";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="" bg="transparent" expand="md">
          <Navbar.Brand href="/">
            <p className="nav-brand">
              <span className="space" role="img" aria-label="Bread">
                🍞
              </span>
              john yoon
            </p>
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                home
              </Link>
              <Link className="nav-link" to="/about">
                about
              </Link>
              <Link className="nav-link" to="photography">
                photography
              </Link>
              <Link className="nav-link" to="/contact">
                contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact render={() => <Home />} />
                  <Route path="/about" render={() => <About />} />
                  <Route path="/photography" render={() => <Photography />} />
                  <Route path="/contact" render={() => <Contact />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Container>
    </Router>
  );
}

export default App;
