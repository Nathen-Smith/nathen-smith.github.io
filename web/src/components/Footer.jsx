import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navIconLinks } from '../constants';

const Footer = () => (
  <div>
    <div className="flex flex-row space-x-10 items-center justify-center">
      {navIconLinks.map((item) => (
        <a href={item.link} key={item.link} className="block w-100">
          <FontAwesomeIcon
            icon={item.icon}
            style={{ height: '100px', width: '100px' }}
            className="mx-auto"
          />
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
