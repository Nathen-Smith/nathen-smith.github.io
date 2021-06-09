import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './links.css';
import useScreenType from "../shared-hooks/useScreenType";
import { InView } from 'react-intersection-observer';

fontawesome.library.add(brands)

const links = [
  {
    link: "https://github.com/Nathen-Smith",
    icon: faGithub
  },
  {
    link: "https://www.linkedin.com/in/nathen-s-324378141/",
    icon: faLinkedin
  },
  {
    link: "mailto:nathencsmith@gmail.com",
    icon: faEnvelope
  }
]

const Links = () => {
  const screenType = useScreenType();
  if (screenType === "3-cols" || screenType === "2-cols") {
    // row view
    return (
      <InView triggerOnce={true}>
        {({ ref, inView }) => (
          <div ref={ref} style={{marginLeft:'auto', marginRight:'auto', display:'block',width:'540px'}}>
            {links.map((link, i) => 
              <a href={link.link} key={i}>
                <FontAwesomeIcon icon={link.icon}
                  style={inView ? {animation: 'bounceIn 1.2s linear 1',animationDelay: '0.2s',color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'50px',marginLeft:'50px',transition:'2s',backgroundColor:'transparent'} : {color: 'transparent', width:'80px', height: '80px', display:'inline',marginRight:'50px',marginLeft:'50px', backgroundColor:'transparent'}}
                />
              </a>
            )}
          </div>
        )}
      </InView>
    )
  }
  // column view
  return (
    <div>
      {links.map((link, i) => 
        <InView as="div" triggerOnce={true} key={i}>
          {({ ref, inView }) => (
            <a href={link.link} ref={ref}>
              <FontAwesomeIcon icon={link.icon}
                style={inView ? {animation: 'bounceIn 1.2s linear 1',animationDelay: '0.2s',color: 'white', width:'140px', height: '140px', display:'block',marginRight:'auto',marginLeft:'auto',marginBottom:'5px',transition:'2s'} : {color: 'transparent', width:'140px', height: '140px', display:'block',marginRight:'auto',marginLeft:'auto',marginBottom:'5px'}}
              />
            </a>
          )}
        </InView>
      )}
    </div>
  );
}

export default Links;