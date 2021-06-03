import {links} from './links.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navlinks.css'

const LinkedIn = () => {
  return (
    <li>
      <a href={links[1].link} >
        <FontAwesomeIcon icon={links[1].icon}
        className="navlink"
        style={{width:'24px', height:'24px',background:'white'}}
        />
      </a>
      </li>
  )
}

export default LinkedIn;