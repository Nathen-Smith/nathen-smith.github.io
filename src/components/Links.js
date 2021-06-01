import React from 'react';
import TrackVisibility from 'react-on-screen';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../scss/style.scss';
import './links.css'

fontawesome.library.add(brands)


const Links = () => {
  // const screenType = useScreenType();
  return (
      <TrackVisibility once>
        {({isVisible}) => {
          return (
            <div>
              <FontAwesomeIcon icon={faGithub}
              style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white'} : {color: 'white'}}
              />
              <FontAwesomeIcon icon={faLinkedin}
              style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white'} : {color: 'white'}}
              />
            </div>
          )
        }}
      </TrackVisibility>
  )
 
}

export default Links;