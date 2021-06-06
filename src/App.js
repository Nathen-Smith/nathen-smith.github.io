import React from 'react';
import ShowSkills from './components/ShowSkills';
import Links from './components/Links';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import useScreenType from "./shared-hooks/useScreenType";
import './scss/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/MyNavbar'
import CS411Carousel from './components/carousel/CS411Carousel'
import CS225Carousel from './components/carousel/CS225Carousel'
import { Container } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

fontawesome.library.add(brands)



const Layout = () => {
  const screenType = useScreenType();

  if (screenType === "3-cols" || screenType === "2-cols") {
    return (  
      <div>
        <MyNavbar />
        {/* <div id="intro"> */}
          <h1 style={{fontSize:'140px'}}>Hi.</h1>
          <h2>I'm Nathen Smith.</h2>
        {/* </div> */}
        {/* <div id="portfolio"> */}
          <CS411Carousel />
          <CS225Carousel />
        {/* </div> */}

        <a href="https://drive.google.com/file/d/1fPxuV9Q4mVLP5TB0HwfCs-AQ0Ckda4Pa/view?usp=sharing" className="document-link" style={{textDecoration:'none'}}>
          <p className='document-link'>
            My Resume
            </p>
        </a>

        <h3 style={{height:'1000px'}}>Scroll down:)</h3>

        <div style={{display:'flex', flexDirection:'row'}}>
          <Container>
            <p className="project-text" style={{color:'white'}}>
              Hello I am under the water pls hepl me
            </p>
          </Container>
          <Container>
            <ShowSkills />
          </Container>
        </div>


        <div style={{width:'60%',margin:'auto',padding:'10px'}}>
          {/* <div id="about"> */}
            {/* <ShowSkills /> */}
          {/* </div> */}
          <div id="contact" style={{display:'block'}}>
            <Links />
          </div>
        </div>
      </div>
    );
  }

  if (screenType === "1-cols") {
    return (  
      <div>
      <div>
      <MyNavbar />
      <h1 style={{fontSize:'100px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      {/* <div id="portfolio"> */}
        <CS411Carousel />
        <CS225Carousel />
      {/* </div> */}
      <a href="https://drive.google.com/file/d/1fPxuV9Q4mVLP5TB0HwfCs-AQ0Ckda4Pa/view?usp=sharing" className="document-link" style={{textDecoration:'none'}}>
        <p className='document-link'>
          My Resume
          </p>
      </a>

      


      {/* </div> */}

      <h3 style={{height:'1000px'}}>Scroll down:)</h3>
      <div style={{margin:'auto',padding:'16px'}}>
        {/* <div id="about"> */}
          <ShowSkills />
        {/* </div> */}
        <div id="contact">
          <Links />
        </div>
      </div>
      </div>
    </div> 
    );
  }

  return (
    <div>
      <div>
      <MyNavbar />
      <h1 style={{fontSize:'100px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      {/* <div id="portfolio"> */}
        <CS411Carousel />
        <CS225Carousel />
      {/* </div> */}
      <a href="https://drive.google.com/file/d/1fPxuV9Q4mVLP5TB0HwfCs-AQ0Ckda4Pa/view?usp=sharing" className="document-link" style={{textDecoration:'none'}}>
        <p className='document-link'>
          My Resume
          </p>
      </a>

      


      {/* </div> */}

      <h3 style={{height:'1000px'}}>Scroll down:)</h3>
      <div style={{margin:'auto',padding:'16px'}}>
        {/* <div id="about"> */}
          <ShowSkills />
        {/* </div> */}
        <div id="contact">
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
