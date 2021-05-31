import React from 'react';
import TrackVisibility from 'react-on-screen';
import './scss/style.scss';
import useScreenType from "react-screentype-hook";

const values = [
  {
    text: "JavaScript",
    rating: "Intermediate",
    before: {width: '0%', background: 'red'},
    active: {transition: '3s', background: 'red', width: '80%' }
  },
  {
    text: "two",
    css: { color: 'white' },
    active: { color: 'blue', transition: '1s' }
    // active: styles.active
  },
];
// var show = false;

const ComponentToTrack = ({ isVisible }) => {
  // var style = {}
  const screenType = useScreenType();

  return (
    
    <div>{values.map(
      (value, i) => 
      <div className="skillbar" style={screenType.isMobile ? {width:'100%'} : {width:'20%'}}>
        <div key={i} className="skillbar-title" style={isVisible ? value.active : value.before}>
          <span>
            {value.text}
          </span>
        </div>
        <div className="skill-bar-percent" style={isVisible ? {transition:'3s linear',color:'black'} : {color:'white'}}>
            {value.rating}
        </div>
      </div>

    )}</div>
  ) 
}

const App = () => {
  return (
    <div style={{background:'#292c33'}}>
      Hello
      <h2 style={{height:"1000px"}}>pls</h2>
      <TrackVisibility once>
        <ComponentToTrack />
      </TrackVisibility>
      <h2 style={{height:"100px"}}>pls</h2>
    </div>

  );
}

export default App;
