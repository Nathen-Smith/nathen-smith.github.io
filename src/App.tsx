import React, { useState } from "react";

import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import useScreenType from "./shared-hooks/useScreenType";
import { InView, useInView } from "react-intersection-observer";

import ShowSkills from "./components/ShowSkills";
import Links from "./components/Links";
import CS411Carousel from "./components/projects/CS411Carousel";
import CS225Carousel from "./components/projects/CS225Carousel";
import ECE391 from "./components/projects/ECE391";
import ReactGuide from "./components/projects/ReactGuide";
import BackgroundImg from "./photos/background.jpg";
import { Experience } from "./components/Experience";
import { Classes } from "./components/Classes";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./scss/style.scss";
import { Databoard } from "./components/projects/Databoard";

fontawesome.library.add(brands);

interface layoutProps {
  type: string;
}

const Layout: React.FC<layoutProps> = ({ type }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  });
  var height = window.innerHeight;
  if (height < 600) {
    height = 600;
  } else if (height > 1000) {
    height = 1000;
  }
  return (
    <div>
      {type === "lg" && (
        // <Navbar
        //   collapseOnSelect
        //   bg={inView ? "dark" : "light"}
        //   expand="md"
        //   sticky="top"
        //   variant={inView ? "dark" : "light"}
        //   style={{ transition: "0.5s linear" }}
        // >
        //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //   <Navbar.Collapse id="responsive-navbar-nav">
        //     <Nav className="ml-auto">
        //       <Nav.Link href="#about">About</Nav.Link>
        //       <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        //       <Nav.Link href="#contact">Contact</Nav.Link>
        //       <Nav.Link href="https://github.com/Nathen-Smith">
        //         <FontAwesomeIcon
        //           icon={faGithub}
        //           size="lg"
        //           className={inView ? "navbar-dark" : "navbar-light"}
        //         ></FontAwesomeIcon>
        //       </Nav.Link>
        //       <Nav.Link href="https://www.linkedin.com/in/nathen-s-324378141">
        //         <FontAwesomeIcon
        //           icon={faLinkedinIn}
        //           size="lg"
        //           className={inView ? "navbar-dark" : "navbar-light"}
        //         ></FontAwesomeIcon>
        //       </Nav.Link>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
        <div>placeholder </div>
      )}
      <div className="container" ref={ref} style={{ height }}>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-white text-9xl">Hi.</p>
            <p className="text-white text-3xl">I'm Nathen Smith.</p>
            <br />
            <p className="light">Computer Engineer at UIUC</p>
            <p className="light">Experienced Full Stack Developer</p>
            <p className="light">React and Python Enthusiast</p>
            <p className="light">Badminton Player</p>
            <br />
            {type === "sm" && (
              <a href="#about" className="btn btn-light btn-sm">
                <span style={{ fontWeight: 600 }}>MORE ABOUT ME</span>
              </a>
            )}
          </div>
          <img
            src="/assets/me.jpg"
            alt="portrait"
            className="rounded-full w-2/3"
            style={type === "sm" ? { display: "none" } : {}}
          />
        </div>
      </div>
      {/* </InView> */}

      <div id="about" style={{ height: "56px" }}></div>
      <h2 className="title">about me</h2>
      <hr className="title" />

      <div className="intro">
        <div
          className={
            type === "lg"
              ? "container grid grid-cols-2"
              : "container grid grid-cols-1"
          }
        >
          <div>
            <p className="text-white mx-1 mb-2 text-2xl">Background </p>
            <p className="background-text mb-2 mx-1">
              I am a Senior studying Computer Engineering at the University of
              Illinois at Urbana-Champaign. Detail-oriented software developer
              where I enjoy fostering a positive development environment,
              designing scalable solutions and ensuring responsive, intuitive
              user experiences.
            </p>
            <p className="text-white mx-1 mb-2 text-2xl">Relevant Coursework</p>
            <Classes />
          </div>

          <div className="container">
            <ShowSkills />
          </div>
        </div>
        <div className="container">
          <p className="text-white mb-2 mx-1 text-2xl">Work Experience</p>
          <Experience />
        </div>
      </div>

      <div className="bg-black">
        <div className="block max-w-screen-2xl bg-curved-container m-0 mx-auto rounded-tl-6xl rounded-tr-6xl">
          <div id="portfolio" style={{ height: "56px" }}></div>
          <div className="container">
            <h2 className="title">work I'm proud of</h2>
            <hr className="title" />
            <Databoard />
            <br />
            <CS411Carousel />
            <br />
            <CS225Carousel />
            <br />
            <div
              style={
                type === "lg"
                  ? {
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "15px",
                      marginRight: "15px",
                      marginBottom: height * 0.1,
                    }
                  : { display: "flex", flexDirection: "column" }
              }
            >
              <ECE391 />
              <ReactGuide />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <div id="contact" style={{ height: "56px" }}></div>
        <h2 className="title">get in touch!</h2>
        <hr className="title" />
        <div style={{ display: "block" }}>
          <Links />
        </div>
        {type === "lg" && (
          <div>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export const App = () => {
  const screenType = useScreenType();
  // window.history.replaceState(null, null, ' '); // https://stackoverflow.com/a/49373716/15128146

  if (screenType === "3-cols" || screenType === "2-cols") {
    return <Layout type="lg" />;
  }

  return <Layout type="sm" />;
};
