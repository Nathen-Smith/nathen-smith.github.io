import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavHashLink } from 'react-router-hash-link';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScreenType from '../shared-hooks/useScreenType'
import '../scss/style.scss'

const MyNavbar = () => {
  const screenType = useScreenType();
  if (screenType === "mobile") {
    <Navbar collapseOnSelect bg="light" expand="md" sticky="top">
      <NavHashLink smooth to="#">
        <Navbar.Brand className="nathen">
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
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
  return (
    <Navbar collapseOnSelect bg="light" expand="md" sticky="top">
      <NavHashLink smooth to="#">
        <Navbar.Brand className="nathen">
            Nathen Smith
        </Navbar.Brand>
      </NavHashLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      {/* <Nav className="mr-auto"> */}
        {/* <NavHashLink smooth to="#about">
          <Navbar.Brand className="font-weight-bold">
              About
          </Navbar.Brand>
        </NavHashLink> */}
        
        
        {/* </Nav> */}
        <Nav className="ml-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://github.com/Nathen-Smith">
            <FontAwesomeIcon icon={faGithub} size="lg">
            </FontAwesomeIcon>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/nathen-s-324378141">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg">
            </FontAwesomeIcon>
          </Nav.Link>
        </Nav>
        
        {/* <Nav>
          <Github />
          <LinkedIn />
          <Email />
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  )

}

export default MyNavbar;