import React, { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavHashLink } from 'react-router-hash-link';
import useScreenType from "./shared-hooks/useScreenType";

import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import CS411Carousel from './components/carousel/CS411Carousel'
import CS225Carousel from './components/carousel/CS225Carousel'

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './scss/style.scss';

fontawesome.library.add(brands)

const Layout = (props) => {
  const type = props.type; // just support fullscreen and mobile view for now=> we can simply use ternary operator
  const height = window.innerHeight;
  const [visibleNav, setVisibleNav] = useState(false); // unfortunately can't maintain DRY with the Navbar, needs a parent for the color change
  return (  
    <div>
      <Navbar collapseOnSelect bg={visibleNav ? "dark" : "light"} expand="md" sticky="top" variant={visibleNav ? "dark" : "light"} style={{transition:'0.4s'}}>
        <NavHashLink to="#">
          <Navbar.Brand className="nathen">
              Nathen Smith
          </Navbar.Brand>
        </NavHashLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" >About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/Nathen-Smith">
              <FontAwesomeIcon icon={faGithub} size="lg" className={visibleNav ? "navbar-dark" : "navbar-light"}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nathen-s-324378141">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className={visibleNav ? "navbar-dark" : "navbar-light"}></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="intro" style={{height:height}}>
        <h1>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <p className='light'>Computer Engineering at University of Illinois at Urbana-Champaign.</p>
        <p className='light'>React.js and Python Enthusiast.</p>
        <p className='light'>Badminton player.</p>
      </div>
      <TrackVisibility>
        {({isVisible}) => {isVisible ? setVisibleNav(true) : setVisibleNav(false)}}
      </TrackVisibility>

      <div style={type==='lg' ? {display:'flex', flexDirection:'row'} : {display:'flex', flexDirection:'column'}}>
        <Container>
          <p className="light-text" style={{color:'white'}}>
            More about me
          </p>
        </Container>
        <Container>
          <ShowSkills />
        </Container>
      </div>

      {/* <div id="portfolio"> */}
        <CS411Carousel />
        <CS225Carousel />
      {/* </div> */}

      <a href="https://drive.google.com/file/d/1fPxuV9Q4mVLP5TB0HwfCs-AQ0Ckda4Pa/view?usp=sharing">
        <p className='document-link'>
          My Resume <FontAwesomeIcon icon={faFilePdf} size='md' style={{marginLeft:'3px'}} />
        </p>
      </a>

      <h3 style={{height:'1000px'}}>Scroll down:)</h3>

      

      {/* <div style={{width:'60%',margin:'auto',padding:'10px'}}> */}
        {/* <div id="about"> */}
          {/* <ShowSkills /> */}
        {/* </div> */}
        <div id="contact" style={{display:'block', marginBottom:'50px'}}>
          <Links />
        </div>
      {/* </div> */}
    </div>
  );
}

const App = () => {
  const screenType = useScreenType();

  if (screenType === "3-cols" || screenType === "2-cols") {
    return (
      <Router>
        <Layout type='lg'/>
      </Router>
    );
  }

  return (
    <Router>
      <Layout type='sm' />
    </Router>
  );
}

export default App;
