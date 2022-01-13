import { navIconLinks } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row space-x-10 items-center justify-center">
        {navIconLinks.map((item) => (
          <a href={item.link} key={item.link} className="block w-100">
            <FontAwesomeIcon
              icon={item.icon}
              style={{ height: "100px", width: "100px" }}
              className="mx-auto"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
