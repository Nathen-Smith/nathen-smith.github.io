import React from 'react';
import useScreenType from "react-screentype-hook";
import TrackVisibility from 'react-on-screen';
import {values} from './skills';
import '../scss/style.scss';

const ShowSkills = () => {
  const screenType = useScreenType();
  var views = []
  values.forEach((value) => {
    views.push(
      <div style={screenType.isMobile ? {width:'100%'} : {width:'50%'}}>
        <TrackVisibility once>
        {({isVisible}) => {
          return (
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
          )
        }}
        </TrackVisibility>
      </div>
    );
  });
  return views;
}

export default ShowSkills;