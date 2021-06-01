import React from 'react';
import TrackVisibility from 'react-on-screen';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './links.css';

fontawesome.library.add(brands)

const Links = () => {
  // const screenType = useScreenType();
  return (
      <TrackVisibility once>
        {({isVisible}) => {
          return (
            <div>
              <a href="https://github.com/Nathen-Smith">
                <FontAwesomeIcon icon={faGithub}
                style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px'} : {color: 'white', width:'80px', height: '80px'}}
                />
              </a>
              <a href="https://www.linkedin.com/in/nathen-s-324378141/">
                <FontAwesomeIcon icon={faLinkedin}
                style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px'} : {color: 'white', width:'80px', height: '80px'}}
                />
              </a>
              
            </div>
          )
        }}
      </TrackVisibility>
  )
 
}

export default Links;