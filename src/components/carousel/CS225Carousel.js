// import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../../scss/style.scss'
import CS225_1 from './CS225Photos/1_Intro.jpg'
import CS225_2 from './CS225Photos/2_data.jpg'
import CS225_3 from './CS225Photos/3_graph.jpg'
import CS225_4 from './CS225Photos/4_dijkstra.jpg'


function CS225Carousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div>    
    
    <Carousel style={{width:'40%'}}>
  <Carousel.Item>
  <img className="d-block w-100" src={CS225_1} alt="CS225_1"/>

    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={CS225_2} alt="CS225_2"/>


    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={CS225_3} alt="CS225_3"/>


    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={CS225_4} alt="CS225_4"/>


    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    </div>

  );
}

export default CS225Carousel;