import React from "react";
import { Container } from "react-bootstrap";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCircle } from "@fortawesome/free-solid-svg-icons";
import "../../scss/style.scss";

fontawesome.library.add(brands);

const ReactGuide = () => {
  return (
    <Container>
      <a
        href="https://github.com/Nathen-Smith/react-guide"
        className="project-link"
        style={{ textDecoration: "none" }}
      >
        <h4 className="project-title text-xl">
          React Guide
          {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/> */}
        </h4>
      </a>
      <FontAwesomeIcon
        icon={faCircle}
        style={{ color: "#61DBFB", marginLeft: "5px" }}
      />
      <FontAwesomeIcon
        icon={faCircle}
        style={{ color: "#F0DB4F", marginLeft: "5px" }}
      />
      <hr />
      <p className="project-text">
        A beginner-friendly guide on how to make a React app from scratch,
        complete with tips for JavaScript, HTML, CSS and general guidance for
        approaching and building a responsive app with clean code so that you Do
        not Repeat Yourself (DRY). Developed after building a full stack web
        application, HippoCampus, and this website.
      </p>
    </Container>
  );
};

export default ReactGuide;
