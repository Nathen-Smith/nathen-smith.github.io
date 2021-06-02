import React from 'react';
import ShowSkills from './components/ShowSkills'
import Links from './components/Links'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
// import useScreenType from "react-screentype-hook";
import useScreenType from "./shared-hooks/useScreenType";

fontawesome.library.add(brands)

const Layout = () => {
  const screenType = useScreenType();
  if (screenType === "3-cols") {
    return (
      <div>
        <h1 style={{fontSize:'60px'}}>Hi.</h1>
        <h2>I'm Nathen Smith.</h2>
        <h3 style={{height:'1000px'}}>Scroll down:)</h3>
        <div style={{width:'50%',margin:'auto',padding:'10px'}}>
          <ShowSkills />
          <div style={{display:'block'}}>
            <Links />
          </div>
        </div>
      </div>
    );
  } 
  return (
    <div>
      <h1 style={{fontSize:'120px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      <h3 style={{height:'1000px'}}>Scroll down:)</h3>
      <div style={{margin:'auto',padding:'30px'}}>
        <ShowSkills />
        <Links />
      </div>
    </div> 
  );

}

const App = () => {
  return (
    <div style={{background:'#292c33'}}>
      <Layout />
      <br/>
    </div>
  );
}

export default App;
