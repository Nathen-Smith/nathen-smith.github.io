import React from 'react';
import TrackVisibility from 'react-on-screen';
import fontawesome from '@fortawesome/fontawesome'
import useScreenType from "react-screentype-hook";
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

const LinksRow = ({isVisible}) => {
  return (
    <div style={{marginLeft:'auto', marginRight:'auto', display:'block',width:'270px'}}>
    <a href={links[0].link} >
                <FontAwesomeIcon icon={links[0].icon}
                  style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'} : {color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'}}
                />
              </a>
              <a href={links[1].link} >
              <FontAwesomeIcon icon={links[1].icon}
                style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'} : {color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'}}
              />
            </a>
            <a href={links[2].link} >
                <FontAwesomeIcon icon={links[2].icon}
                  style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'} : {color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'}}
                />
              </a></div>
  );
}

const Links = () => {
  const screenType = useScreenType();
  var views = []
  if (screenType.isMobile) {
    links.forEach((link) => {
      views.push(
        <TrackVisibility once>
          {({isVisible}) => {
            return (
              <a href={link.link} >
                <FontAwesomeIcon icon={link.icon}
                  style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'block',marginRight:'auto',marginLeft:'auto',marginBottom:'5px'} : {color: 'white', width:'80px', height: '80px', display:'block',marginRight:'auto',marginLeft:'auto',marginBottom:'5px'}}
                />
              </a>
            )
          }}
        </TrackVisibility>
      );
    });
    return views;
  } else if (!screenType.isMobile) {
    return (
      <TrackVisibility once>
        <LinksRow />      
      </TrackVisibility>
            
    )
    // links.forEach((link) => {
    //   views.push(
    //     <TrackVisibility once>
    //       {({isVisible}) => {
    //         return (
    //           <a href={link.link} >
    //             <FontAwesomeIcon icon={link.icon}
    //               style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 0.7s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'block',marginRight:'auto',marginLeft:'auto'} : {color: 'white', width:'80px', height: '80px', display:'block',marginRight:'auto',marginLeft:'auto'}}
    //             />
    //           </a>
    //         )
    //       }}
    //     </TrackVisibility>
    //   );
    // });
    // return views;
  }

}

export default Links;