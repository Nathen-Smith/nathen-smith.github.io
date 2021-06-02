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
      // <div style={screenType.isMobile ? {width:'100%'} : {width:'50%'}}>
        <TrackVisibility once>
        {({isVisible}) => {
          return (
            <div className="container" style={screenType==="3-cols"? {} : {transform: 'scaleY(2)',height:'100px', marginBottom:'10px'}}>
            <div className="skillbar">
              <div className="skillbar-title" style={isVisible ? value.active : value.before}>
                <span style={screenType==="3-cols"? {} : {transform: 'scaleY(0.5)',fontSize:'24px'}}>
                  {value.text}
                </span>
              </div>
              {/* <div className="skill-bar-percent" style={isVisible ? {transition:'3s linear',color:'black',visibility:'visible'}:{}}>
                {value.rating}
              </div> */}
            </div>
            </div>
          )
        }}
        </TrackVisibility>
      // </div>
    );
  });
  return views;
}

export default ShowSkills;