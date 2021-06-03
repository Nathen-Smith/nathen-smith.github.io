import React from 'react';
// import useScreenType from "react-screentype-hook";
import TrackVisibility from 'react-on-screen';
import {values} from './skills';
import '../scss/style.scss';
import useScreenType from "../shared-hooks/useScreenType";

const ShowSkills = () => {
  const screenType = useScreenType();
  var views = []
  values.forEach((value) => {
    views.push(
        <TrackVisibility once key={value.text}>
        {({isVisible}) => {
          return (
            <div className="container" style={screenType==="3-cols"? {} : {transform: 'scaleY(2)',height:'100px', marginBottom:'10px'}}>
              <div className="skillbar">
                <div className="skillbar-title" style={isVisible ? value.active : value.before}>
                  <span style={screenType==="3-cols"? {} : {transform: 'scaleY(0.5)',fontSize:'24px'}}>
                    {value.text}
                  </span>
                </div>
              </div>
            </div>
          )
        }}
        </TrackVisibility>
    );
  });
  return views;
}

export default ShowSkills;