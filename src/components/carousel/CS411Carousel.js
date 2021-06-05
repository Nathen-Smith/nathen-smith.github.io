// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../../scss/style.scss'
import CS411_1 from './CS411Photos/1-login.jpg'
import CS411_2 from './CS411Photos/2-user.jpg'
import CS411_3 from './CS411Photos/3-skills.jpg'
import CS411_4 from './CS411Photos/4-liked.jpg'
import CS411_5 from './CS411Photos/5-likes.jpg'

function CS411Carousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div>    
    <Carousel 
    // activeIndex={index} onSelect={handleSelect} 
    style={{width:'40%'}} 
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
      <Carousel.Item>
        <img className="d-block w-100" src={CS411_1} alt="CS411_1"/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
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

    </div>

  );
}

export default CS411Carousel;