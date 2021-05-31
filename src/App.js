import React from 'react';
import TrackVisibility from 'react-on-screen';
import './scss/style.scss';

var show = false;

const ComponentToTrack = ({ isVisible }) => {
  var style = {}
  if (isVisible && !show) {
    style = {background: 'red', transition: '0.4s', width: '100px'};
    show = true;
  } else if (show) {
    style = {background: 'red', width: '100px'};
  } else if (!isVisible){
    style = {background: 'blue', width: '50px'};
  }

  return <div className="skillbar" style={style}>Hello</div>;
}

const App = () => {
  return (
    <div>
      Hello
      <h2 style={{height:"1000px"}}>pls</h2>
      <TrackVisibility>
        <ComponentToTrack />
      </TrackVisibility>
      <h2 style={{height:"100px"}}>pls</h2>
    </div>

  );
}

export default App;
