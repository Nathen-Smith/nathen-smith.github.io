import React from 'react';
import ShowSkills from './components/ShowSkills'
import Links from './components/Links'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)

const App = () => {
  return (
    <div style={{background:'#292c33'}}>
      <h1 style={{fontSize:'60px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      <h3 style={{height:'1000px'}}>Scroll down to see skills</h3>
      <ShowSkills />
      <Links />
      <br/>
    </div>
  );
}

export default App;
