import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useScreenType from "./shared-hooks/useScreenType";
import { InView, useInView } from 'react-intersection-observer';

import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import CS411Carousel from './components/projects/CS411Carousel';
import CS225Carousel from './components/projects/CS225Carousel';
import ECE391 from './components/projects/ECE391';
import ReactGuide from './components/projects/ReactGuide';
import BackgroundImg from './photos/background.jpg';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './scss/style.scss';
import { Databoard } from './components/projects/Databoard';

fontawesome.library.add(brands)

const classes = ['Data Structures', 'Intro to Algorithms and Models of Computation', 'Database Systems', 'Computer Systems Engineering',
  'Distributed Systems', 'Autonomous Systems', 'System Programming', 'Discrete Structures']

interface layoutProps {
  type: string;
}

const Layout: React.FC<layoutProps> = ({ type }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  });
  var height = window.innerHeight;
  if (height < 600) {
    height = 600;
  }
  return (
    <div>
      {type === "lg" &&
        <Navbar collapseOnSelect bg={inView ? "dark" : "light"} expand="md" sticky="top"
          variant={inView ? "dark" : "light"} style={{ transition: '0.5s linear' }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about" >About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://github.com/Nathen-Smith">
                <FontAwesomeIcon icon={faGithub} size="lg" className={inView ? "navbar-dark" : "navbar-light"}></FontAwesomeIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/nathen-s-324378141">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" className={inView ? "navbar-dark" : "navbar-light"}></FontAwesomeIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>}
      <Container className="container-intro" ref={ref} style={{ height }}>
        <h1>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <br />
        <p className='light'>Computer Engineering at the University of Illinois at Urbana-Champaign</p>
        <p className='light'>Full Stack Developer</p>
        <p className='light'>React.js and Python Enthusiast</p>
        <p className='light'>Aspiring Designer</p>
        <p className='light'>Badminton Player</p>
        <br />
        {type === 'sm' &&
          <a href="#about" className="btn btn-light btn-sm"><span style={{ fontWeight: 600 }}>MORE ABOUT ME</span></a>
        }
      </Container>
      {/* </InView> */}

      <div id="about" style={{ height: '56px' }}></div>
      <h2 className='title'>about me</h2>
      <hr className="title" />
      <div className="intro" style={type === 'lg' ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', flexDirection: 'column' }}>
        <Container>
          <h2>Background</h2>
          <br />
          <p className="background-text">
            I am a Senior studying Computer Engineering at the University of Illinois at Urbana-Champaign. Detail-oriented software developer
            where I enjoy clean code and breaking applications then fixing it in order to ensure responsive and intuitive user experiences
            (play around with this website and try changing the window size or viewing on a mobile device!). I am looking for an internship
            in order to enhance my skills in full stack development and user experience.
          </p>
          <h2>Relevant Coursework</h2>
          <br />
          <p className="background-text">
            {type === 'sm' && classes.join(', ')}
            {type === 'lg' &&
              classes.map((item, i) => <li key={i}>{item}</li>)
            }
          </p>
          <a href="
          https://drive.google.com/file/d/1ZLnVmHeXbyUdpZL1INsKBGMU1tTH1j93/view?usp=sharing
          ">
            <p className='document-link'>
              My Resume <FontAwesomeIcon icon={faFilePdf} style={{ marginLeft: '3px' }} />
            </p>
          </a>
        </Container>
        <Container>
          <ShowSkills />
        </Container>
      </div>

      <div style={{ backgroundColor: 'black' }}>
        <div className="curved">
          <div id="portfolio" style={{ height: '56px' }}></div>
          <h2 className='title'>work I'm proud of</h2>
          <hr className='title' />

          <Databoard />
          <br />



          <CS411Carousel />
          <br />
          <CS225Carousel />
          <br />
          <div style=
            {type === 'lg'
              ? { display: 'flex', flexDirection: 'row', marginLeft: '15px', marginRight: '15px', marginBottom: height * 0.1 }
              : { display: 'flex', flexDirection: 'column' }}
          >
            <ECE391 />
            <ReactGuide />
          </div>
          <br />
        </div>
      </div>

      <div style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover' }}>
        <div id="contact" style={{ height: '56px' }}></div>
        <h2 className='title'>get in touch!</h2>
        <hr className="title" />
        <div style={{ display: 'block' }}>
          <Links />
        </div>
        {type === 'lg' && <div><br /><br /></div>}
      </div>

    </div>
  );
}

export const App = () => {
  const screenType = useScreenType();
  // window.history.replaceState(null, null, ' '); // https://stackoverflow.com/a/49373716/15128146

  if (screenType === "3-cols" || screenType === "2-cols") {
    return (
      <Layout type='lg' />
    );
  }

  return (
    <Layout type='sm' />
  );
}