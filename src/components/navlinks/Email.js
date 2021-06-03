import {links} from './links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navlinks.css'

const Email = () => {
  return (
    <li>
    <a href={links[2].link} >
      <FontAwesomeIcon icon={links[2].icon}
      className="navlink"
      style={{width:'24px', height:'24px'}}
      />
    </a>
    </li>
  )
}

export default Email;