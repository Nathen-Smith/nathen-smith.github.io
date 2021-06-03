import React from 'react';
import TrackVisibility from 'react-on-screen';
import fontawesome from '@fortawesome/fontawesome'
// import useScreenType from "react-screentype-hook";
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './links.css';
// import useScreenType from "../shared-hooks/useScreenType";

fontawesome.library.add(brands)

const links = [
  {
    link: "https://github.com/Nathen-Smith",
    icon: faGithub
  },
  {
    link: "https://www.linkedin.com/in/nathen-s-324378141",
    icon: faLinkedin
  },
  {
    link: "mailto:nathencsmith@gmail.com",
    icon: faEnvelope
  }
]

const Items = ({isVisible}) => {
  return (
    <div style={{marginLeft:'1000px', marginRight:'auto', display:'block',width:'320px'}}>
      <a href={links[0].link} >
        <FontAwesomeIcon icon={links[0].icon}
          style={{color:'black', width:'32px', height:'32px'}}
        />
      </a>
      <a href={links[1].link} >
        <FontAwesomeIcon icon={links[1].icon}
        style={{color:'black'}}
        />
      </a>
      <a href={links[2].link} >
        <FontAwesomeIcon icon={links[2].icon}
        style={{color:'black'}}
        />
      </a>
    </div>
  );
}

const LinksRow = () => {
  return (
    <TrackVisibility>
      <Items />
    </TrackVisibility>
  )
}

export default LinksRow;