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
        <div style={{width:'50%',margin:'auto',padding:'10px'}}>
          <ShowSkills />
          <div style={{display:'block'}}>
            <Links />
          </div>
        </div>
      </div>
    );
  } 
  // else if (!screenType.isMobile) {
    return (
      <div style={{margin:'auto',padding:'10px'}}>
      <ShowSkills />
      <Links />
    </div>
      
      
    );
  // }
}

const App = () => {
  // const screenType = useScreenType();
  return (
    <div style={{background:'#292c33'}}>
      <h1 style={{fontSize:'60px'}}>Hi.</h1>
      <h2>I'm Nathen Smith.</h2>
      <h3 style={{height:'1000px'}}>Scroll down>:)</h3>
      {/* <div style={screenType.isMobile ? {width:'100%'} : {width:'50%'}}>
        <ShowSkills />
        <Links />
      </div> */}
      {/* {screenType.isMobile ? 
      <div>ok</div> : <div>notok</div>
      } */}
      {/* <Links /> */}
      <Layout />
      <br/>
    </div>
  );
}

export default App;
