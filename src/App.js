import React from 'react';
import ShowSkills from './components/ShowSkills'

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
