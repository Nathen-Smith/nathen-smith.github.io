import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../../scss/style.scss';
import CS411_1 from './CS411Photos/1-login.jpg';
import CS411_2 from './CS411Photos/2-user.jpg';
import CS411_3 from './CS411Photos/3-skills.jpg';
import CS411_4 from './CS411Photos/4-liked.jpg';
import CS411_5 from './CS411Photos/5-likes.jpg';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import useScreenType from "../../shared-hooks/useScreenType";

fontawesome.library.add(brands)

const MyCarousel = () => {

  return (
    <Carousel 
      interval={null}
      style={{display:'inline-block'}} 
      nextIcon={<div className="dark"><span aria-hidden="true" className="carousel-control-next-icon" /></div>}
      prevIcon={<div className="dark"><span aria-hidden="true" className="carousel-control-prev-icon" /></div>}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_1} alt="CS411_1"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_2} alt="CS411_2"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_3} alt="CS411_3"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_4} alt="CS411_4"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_5} alt="CS411_5"/>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Description = () => {
  return (
    <div>
      <a href="https://github.com/Nathen-Smith/HippoCampus" className="project-link" style={{textDecoration:'none'}}>
        <h4 className="project-title">
            HippoCampus
          <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/>
        </h4>
      </a>
      <hr />
      <p className="project-text">
        A student matching system that allows users to customize their profile and set preferences 
        to find a desired study buddy or project partner through CRUD functionality and SQL Stored Procedures. 
        The stack is React.js, Flask, MySQL.
        <br /><br />
        I designed and implemented the entire structure of the app and flow of the UX, 
        integrated Google OAuth login and auto suggesting system APIs, 
        designed the entire filtering algorithm, designed and debugged frontend backend connecting with JSONs
        returned from complex SQL queries, ensured a smooth and intuitive UI/UX,
        and accounted for edge cases in user operations.
      </p>
      
    </div>
  );
}

const CS411Carousel = () => {

  const screenType = useScreenType();

  if (screenType === "3-cols" || screenType === "2-cols") {
    return (
      <div style={{display:'flex', flexDirection:'row'}}>
        <Container style={{display:'inline-block', width:'60%',marginTop:'15px'}}>
          <MyCarousel />
        </Container>
        <Container>
          <Description /> 
        </Container>
      </div>
    );
  } 

  if (screenType === "1-cols") {
    return (
      <div style={{display:'flex', flexDirection:'row'}}>
        <Container style={{display:'inline-block', width:'75%',marginTop:'15px'}}>
          <MyCarousel />
        </Container>
        <Container>
          <Description /> 
        </Container>
      </div>
    );
  }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Container style={{display:'inline-block', width:'95%'}}>
        <MyCarousel />
      </Container>
      <Container>
        <Description /> 
      </Container>
    </div>
  );
}

export default CS411Carousel;