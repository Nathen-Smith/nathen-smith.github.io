import React from 'react';
import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import useScreenType from "./shared-hooks/useScreenType";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Github from "./components/navlinks/Github";
import LinkedIn from "./components/navlinks/LinkedIn";
import Email from "./components/navlinks/Email";
import './scss/style.scss';
// import { Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

fontawesome.library.add(brands)

const MyNavbar = () => {
  const screenType = useScreenType();
  if (screenType === "mobile") {
    <Navbar collapseOnSelect bg="light" expand="md" sticky="top">
      <NavHashLink smooth to="#">
        <Navbar.Brand className="font-weight-bold text-muted">
            Nathen Smith
        </Navbar.Brand>
      </NavHashLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <NavHashLink smooth to="#about">
          <Navbar.Brand className="font-weight-bold">
              About
          </Navbar.Brand>
        </NavHashLink> */}
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
  return (
    <Navbar collapseOnSelect bg="light" expand="md" sticky="top">
      <NavHashLink smooth to="#">
        <Navbar.Brand className="font-weight-bold text-muted">
            Nathen Smith
        </Navbar.Brand>
      </NavHashLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <NavHashLink smooth to="#about">
          <Navbar.Brand className="font-weight-bold">
              About
          </Navbar.Brand>
        </NavHashLink> */}
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#about">
          <FontAwesomeIcon icon={faEnvelope} size="lg">
          </FontAwesomeIcon>
        </Nav.Link>
        </Nav>
        <Nav>
          <Github />
          <LinkedIn />
          <Email />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

const Layout = () => {
  const screenType = useScreenType();

  if(screenType === "mobile" ) {
    return (
      <div>
        <div style={{background:'#292c33'}}>
        <MyNavbar />
        <h1 style={{fontSize:'120px'}}>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <h3 style={{height:'1000px'}}>Scroll down:)</h3>
        <div style={{margin:'auto',padding:'16px'}}>
          <div id="about"></div>
            <ShowSkills />
          <div id="contact">
            <Links />
          </div>
        </div>
        </div>
      </div> 
    );
  }
  return (
    
    <div style={{background:'#292c33'}}>
     <MyNavbar />
    <div id="intro">
      <h1 style={{fontSize:'60px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      </div>
      <h3 style={{height:'1000px'}}>Scroll down:)</h3>
      
      
      
      <div>
      {/* <a href="http://localhost:3000/personal-site#about"> */}
      <div style={{width:'60%',margin:'auto',padding:'10px'}}>
        <div id="about">
          <ShowSkills />
        </div>
        <div id="contact" style={{display:'block'}}>
          <Links />
        </div>
      </div>
      </div>
    </div>
  );
  
}

const App = () => {
  if (window.performance) {
    if (performance.navigation.type === 1) {
      window.location.replace("")
    }
  }
  return (
    <Router>
      <Layout />
    </Router>
    
  );
}

export default App;
