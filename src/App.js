import React from 'react';
import TrackVisibility from 'react-on-screen';
import './scss/style.scss';
import useScreenType from "react-screentype-hook";
import {values} from './components/skills'


const ComponentToTrack = ({ isVisible }) => {
  const screenType = useScreenType();

  return (
    
    <div>{values.map((value, i)=> 
      <div style={screenType.isMobile ? {width:'100%'} : {width:'50%'}}>
      <div className="skillbar" >
        <div key={i} className="skillbar-title" style={isVisible ? value.active : value.before}>
          <span>
            {value.text}
          </span>
        </div>
        <div className="skill-bar-percent"
         style={isVisible ? {transition:'3s linear',color:'black',visibility:'visible'}:{}}
         >
          {value.rating}
        </div>
      </div>
      </div>
    )}</div>
  ) 
}

const App = () => {
  return (
    <div style={{background:'#292c33'}}>
      <h1 style={{fontSize:'60px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      <h3 style={{height:'1000px'}}>Scroll down to see skills</h3>
      <TrackVisibility once>
        <ComponentToTrack />
      </TrackVisibility>
      <h2 style={{height:"100px"}}>epic</h2>
    </div>

  );
}

export default App;
