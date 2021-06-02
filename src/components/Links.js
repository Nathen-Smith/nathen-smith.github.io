import React from 'react';
import TrackVisibility from 'react-on-screen';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './links.css';

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

const Links = () => {
  // const screenType = useScreenType();
  var views = []
  links.forEach((link) => {
    views.push(
      <div>
      <TrackVisibility once>
        {({isVisible}) => {
          return (
            <a href={link.link}>
              <FontAwesomeIcon icon={link.icon}
                style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px'} : {color: 'white', width:'80px', height: '80px'}}
              />
            </a>
          )
        }}
      </TrackVisibility>
      </div>
    );
  });
  return views;
 
}

export default Links;