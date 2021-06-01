import React from 'react';
import TrackVisibility from 'react-on-screen';
import './scss/style.scss';
import useScreenType from "react-screentype-hook";
import {values} from './components/skills'

const ShowSkills = () => {
  const screenType = useScreenType();
  var views = []
  values.forEach((value) => {
    views.push(
      <div>
        <TrackVisibility once>
        {({isVisible}) => {
          return (
          <div style={screenType.isMobile ? {width:'100%'} : {width:'50%'}}>
            <div className="skillbar">
              <div className="skillbar-title" style={isVisible ? value.active : value.before}>
                <span>
                  {value.text}
                </span>
              </div>
              <div className="skill-bar-percent" style={isVisible ? {transition:'3s linear',color:'black',visibility:'visible'}:{}}>
                {value.rating}
              </div>
            </div>
          </div>
          )
        }}
        </TrackVisibility>
      </div>
    );
  });
  return views;
}

const App = () => {
  return (
    <div style={{background:'#292c33'}}>
      <h1 style={{fontSize:'60px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      <h3 style={{height:'1000px'}}>Scroll down to see skills</h3>
      <ShowSkills />
      <h2 style={{height:"100px"}}>epic</h2>
    </div>

  );
}

export default App;
