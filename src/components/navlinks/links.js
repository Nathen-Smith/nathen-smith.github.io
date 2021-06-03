import fontawesome from '@fortawesome/fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import brands from '@fortawesome/fontawesome-free-brands'

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

export {links};