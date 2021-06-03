import {links} from './links.js';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navlinks.css'

const Github = () => {
  return (
    <a href={links[0].link} >
      <FontAwesomeIcon icon={links[0].icon}
      className="navlink"
      // style={{color:'black'}}
        // style={isVisible ? {transform: 'scale(1)',animation: 'bounceIn 1s linear 1',animationDelay: '0.1s',color: 'white', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px',transition:'2s'} : {color: '#292c33', width:'80px', height: '80px', display:'inline',marginRight:'5px',marginLeft:'5px'}}
      />
    </a>
  )
}

export default Github;