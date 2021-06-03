import {links} from './links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navlinks.css';

const Github = () => {
  return (
    <li>
    <a href={links[0].link} >
      <FontAwesomeIcon icon={links[0].icon}
      className="navlink"
      style={{width:'24px', height:'24px'}}
      />
    </a>
    </li>
  )
}

export default Github;