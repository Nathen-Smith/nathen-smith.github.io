import React, { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useScreenType from "./shared-hooks/useScreenType";
import { InView } from 'react-intersection-observer';

import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import CS411Carousel from './components/carousel/CS411Carousel'
import CS225Carousel from './components/carousel/CS225Carousel'

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './scss/style.scss';

fontawesome.library.add(brands)

function Layout(props) {
  const type = props.type; // just support fullscreen and mobile view for now
  const height = window.innerHeight;
  const [visibleNav, setVisibleNav] = useState(true);
  return (  
    <div>
      <Navbar collapseOnSelect bg={(visibleNav && type==='lg') ? "dark" : "light"} expand="md" sticky="top" variant={(visibleNav && type==='lg')? "dark" : "light"} style={{transition:'0.5s linear'}}>
        <a className="navbar-brand nathen" href="#top">
          Nathen Smith
        </a>
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
        
      <div className="top" style={{height:height}}>
      <Container className="container-intro">
        <InView as="div" id="intro" onChange={setVisibleNav}>
          <h1>Hi.</h1>
        </InView>
        <h2>I'm Nathen Smith.</h2>
        <br />
        <p className='light'>Computer Engineering at the University of Illinois at Urbana-Champaign.</p>
        <p className='light'>Full Stack Developer.</p>
        <p className='light'>React.js and Python Enthusiast.</p>
        <p className='light'>Aspiring Designer.</p>
        <p className='light'>Badminton player.</p>
        <br />
        <a href="#about" className="btn btn-light btn-sm"><span style={{fontWeight:600}}>MORE ABOUT ME</span></a>
        </Container>
      </div>
      
      <div id="about" style={{height:'56px'}}></div>
      <h2 className='title'>about me</h2>
      <hr className="title" />
      <div className="intro" style={type==='lg' ? {display:'flex', flexDirection:'row'} : {display:'flex', flexDirection:'column'}}>
        <Container>
          <h2>Background</h2>
          <p className="background-text">
            I am a Senior studying Computer Engineering at the University of Illinois at Urbana-Champaign. Detail-oriented software developer
            where I enjoy clean code and breaking applications then fixing it in order to ensure responsive and intuitive user experiences
            (play around with this website and try changing the window size or viewing on a mobile device!). I am looking for an internship in order to enhance my skills in full stack development and user experience.
          </p>
          <h2>Relevant Coursework</h2>
          <p className="background-text">
            Data Structures, Intro to Algorithms and Models of Computation, Database Systems, Computer Systems Engineering, Distributed Systems,
            Autonomous Systems, System Programming, Discrete Structures
          </p>
          <a href="https://drive.google.com/file/d/1fPxuV9Q4mVLP5TB0HwfCs-AQ0Ckda4Pa/view?usp=sharing">
            <p className='document-link'>
              My Resume <FontAwesomeIcon icon={faFilePdf} style={{marginLeft:'3px'}} />
            </p>
          </a>
        </Container>
        <Container>
          <ShowSkills />
        </Container>
      </div>

      <div style={{backgroundColor:'black'}}>
        <div className="curved">
          <div id="portfolio" style={{height:'56px'}}></div>
          <h2 className='title'>work I'm proud of</h2>
          <hr className='title' />        
          <CS411Carousel />
          <CS225Carousel />
          <br />
          <div style={type==='lg' ? {display:'flex', flexDirection:'row', marginLeft:'15px', marginRight:'15px'} : {display:'flex', flexDirection:'column'}}>
            <Container>
                <a href="https://github.com/Nathen-Smith/Operating-System" className="project-link" style={{textDecoration:'none'}}>
                  <h4 className="project-title">
                      Unix-like Operating System
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/>
                  </h4>
                </a>
                <hr />
                <p className="project-text">
                  Designed and tested various aspects of an operating system in a team of four such as system calls, virtual memory, 
                  interrupts and exceptions, a GUI, and a filesystem starting from only a bootloader. Maintained a clean workflow with 
                  version control and publishing issues and how they were resolved.                  
                  <br /><br />
                  I added support for interrupts and exceptions through reading documentation, handled edge cases in the GUI such as
                  newlines, backspaces, and cases with system calls, and debugged system calls and the preemptive multitasking.
                </p>
            </Container>
            <Container>
                <a href="https://github.com/Nathen-Smith/react-guide" className="project-link" style={{textDecoration:'none'}}>
                  <h4 className="project-title">
                      React Guide
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/>
                  </h4>
                </a>
                <hr />
                <p className="project-text">
                  A beginner-friendly guide on how to make a React app from scratch, complete with tips for JavaScript, HTML, CSS and general
                  guidance for approaching and building a responsive app with clean code so that you Do not Repeat Yourself (DRY). Developed 
                  after building a full stack web application, HippoCampus, and this website.
                </p>
            </Container>
          </div>
          <br />
        </div>
      </div>

      <div id="contact" style={{height:'56px'}}></div>
      <h2 className='title'>ready to talk?</h2>
      <hr className="title" />
      <div style={{display:'block', marginBottom:'50px'}}>
        <Links />
      </div>

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
