// import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../../scss/style.scss'
import CS411_1 from './CS411Photos/1-login.jpg'
import CS411_2 from './CS411Photos/2-user.jpg'
import CS411_3 from './CS411Photos/3-skills.jpg'
import CS411_4 from './CS411Photos/4-liked.jpg'
import CS411_5 from './CS411Photos/5-likes.jpg'
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(brands)

function CS411Carousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Container>
    <div style={{display:'flex', flexDirection:'row'}}>
    {/* <Container style={{marginLeft:'0'}}>  */}
    <Carousel 
    // activeIndex={index} onSelect={handleSelect} 
    style={{width:'70%', display:'inline-block', marginLeft:'0'}} 
      nextIcon={
        <div className="dark">
          <span aria-hidden="true" className="carousel-control-next-icon" />
        </div>
      }
      prevIcon={
        <div className="dark">
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        </div>
      }
    >
      <Carousel.Item interval={10000}>
        <img className="d-block w-100" src={CS411_1} alt="CS411_1"/>
        <Carousel.Caption>
          {/* <h3 style={{color:'black'}}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={CS411_2} alt="CS411_2"/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={CS411_3} alt="CS411_3"/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={CS411_4} alt="CS411_4"/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={CS411_5} alt="CS411_5"/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <div> */}
    {/* </Container> */}

    <Container style={{display:'inline-block', verticalAlign:'top'}}>
      <p style={{display:'inline', color:'white', verticalAlign:'top'}}>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        HippoCampus 
        {/* A student matching system that allows users to customize their profile and set preferences on a desired study buddy or project partner. The stack is React.js, Flask, MySQL. Features OAuth login, auto suggest, SQL Triggers and Stored Procedures, and a smooth and intuitive UI/UX. */}
        Developed a student matching system that allows users to customize their profile and set preferences to find a desired study buddy or project partner through CRUD functionality and SQL Stored Procedures. The stack is React.js, Flask, MySQL
        Designed and implemented the entire structure of the app and flow of the UX, integrated Google OAuth login and auto suggesting system APIs, designed the entire filtering algorithm, designed and debugged frontend backend connecting with JSONs returned from complex SQL queries, ensured a smooth and intuitive UI/UX and accounted for edge cases
      </p>
    </Container>
     {/* <h3 style={{display:'inline'}}>ok</h3> */}
    {/* </div> */}
    </div>
    </Container>

    

  );
}

export default CS411Carousel;