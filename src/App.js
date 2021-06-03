import React from 'react';
import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import useScreenType from "./shared-hooks/useScreenType";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Github from "./components/navlinks/Github"
import LinkedIn from "./components/navlinks/LinkedIn"
import Email from "./components/navlinks/Email"
import './scss/style.scss'
// import { Container } from 'react-bootstrap';

fontawesome.library.add(brands)

const Layout = () => {
  const screenType = useScreenType();

  if(screenType === "mobile" ) {
    return (
      <div>
        <div style={{background:'#292c33'}}>
        <Navbar collapseOnSelect expand="xl" bg="light" sticky="top">
        <Navbar.Brand className="font-weight-bold text-muted">
          Nathen Smith
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Github />
          <LinkedIn />
          <Email />
        </Nav>
        </Navbar.Collapse>
      </Navbar>
        <h1 style={{fontSize:'120px'}}>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <h3 style={{height:'1000px'}}>Scroll down:)</h3>
        <div style={{margin:'auto',padding:'16px'}}>
          <ShowSkills />
          <Links />
        </div>
        </div>
      </div> 
    );
  }




  // if (screenType === "3-cols") {
    return (
      <div style={{background:'#292c33'}}>
        <Navbar collapseOnSelect bg="light" expand="xl" sticky="top">
        <Navbar.Brand className="font-weight-bold text-muted">
          Nathen Smith
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Github />
          <LinkedIn />
          <Email />
        </Nav>
        </Navbar.Collapse>
      </Navbar>
        <h1 style={{fontSize:'60px'}}>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <h3 style={{height:'1000px'}}>Scroll down:)</h3>
        <div style={{width:'60%',margin:'auto',padding:'10px'}}>
          <ShowSkills />
          <div style={{display:'block'}}>
            <Links />
          </div>
        </div>
      </div>
    );
  // } 

  // return (
  //   <div>poop</div>
  // )
  

}

const App = () => {
  if (window.pageYOffset > 10) {
    console.log('ok')
  }
  return (
      
      
        <Layout />
  
  );
}

export default App;
