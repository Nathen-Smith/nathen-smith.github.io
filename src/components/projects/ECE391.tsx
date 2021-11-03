import React from "react";
import { Container } from "react-bootstrap";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "../../scss/style.scss";

fontawesome.library.add(brands);

const ECE391 = () => {
  return (
    <Container>
      <a
        href="https://github.com/Nathen-Smith/Operating-System"
        className="project-link"
        style={{ textDecoration: "none" }}
      >
        <h4 className="project-title text-xl">
          Unix-like Operating System
          {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/> */}
        </h4>
      </a>
      <hr />
      <p className="project-text">
        Designed and tested various aspects of an operating system in a team of
        four such as system calls, virtual memory, interrupts and exceptions, a
        GUI, and a filesystem starting from only a bootloader. Maintained a
        clean workflow with version control and publishing issues and how they
        were resolved. Written in C and x86 Assembly.
        <br />
        <br />I added support for interrupts and exceptions through reading
        documentation, handled edge cases in the GUI such as newlines,
        backspaces, and cases with system calls, and debugged system calls and
        the preemptive multitasking.
      </p>
    </Container>
  );
};

export default ECE391;
