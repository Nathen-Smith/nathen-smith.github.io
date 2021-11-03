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
      <div className="project-header">
        <a
          href="https://github.com/Nathen-Smith/react-guide"
          className="project-link"
          style={{ textDecoration: "none" }}
        >
          <h4 className="project-title text-xl font-semibold">
            React Guide
            {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/> */}
          </h4>
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react"
          style={{ marginRight: "-8px" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="js"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="html5"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="html5"
        />
      </div>

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
