import { Container } from "react-bootstrap";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCircle } from "@fortawesome/free-solid-svg-icons";
import useScreenType from "../../shared-hooks/useScreenType";
fontawesome.library.add(brands);

const DataboardVideo = () => {
  return (
    <video autoPlay muted loop>
      <source src="/assets/video.mp4" type="video/mp4" />
    </video>
  );
};

const Description = () => {
  return (
    <div>
      {/* <a style={{display: "table-cell"}} href="someLink" target="_blank">text</a> */}
      <div className="project-header">
        <a
          href="https://github.com/Nathen-Smith/data-dashboard"
          className="project-link"
          style={{ textDecoration: "none" }}
        >
          <h4 className="project-title text-xl font-semibold">
            Realtime Data Dashboard
            {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{ marginLeft: '5px', marginBottom: '5px', opacity: '0.6' }} /> */}
          </h4>
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="firebase"
          style={{ marginRight: "-8px" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="firebase"
        />
        <img
          src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"
          alt="firebase"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
          alt="firebase"
        />
      </div>
      <hr />
      <p className="project-text">
        A scalable full stack web application that monitors changes in a movies
        database in real time by using Firebase’s long polling method
        onSnapshot. The stack is React, TypeScript, Firebase, Python.
      </p>
      <br />
      <p className="project-text">
        I Achieved fast re-rendering by designing high performance algorithms to
        compute and display statistics of the monitored selection of the
        database, documented design, implementation, usage, scalability,
        deployment, and bottlenecks
      </p>
    </div>
  );
};

export const Databoard = () => {
  const screenType = useScreenType();
  if (screenType === "3-cols" || screenType === "2-cols") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        <Container
          style={{ display: "inline-block", width: "70%", marginTop: "15px" }}
        >
          <video autoPlay muted loop>
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
        </Container>
        <Container>
          <Description />
        </Container>
      </div>
    );
  }

  if (screenType === "1-cols") {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container
          style={{ display: "inline-block", width: "75%", marginTop: "15px" }}
        >
          <video autoPlay muted loop>
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
        </Container>
        <Container>
          <Description />
        </Container>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container style={{ display: "inline-block", width: "95%" }}>
        <video autoPlay muted loop>
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </Container>
      <Container>
        <Description />
      </Container>
    </div>
  );
};
