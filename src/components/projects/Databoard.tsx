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
      <div className="project-header text-xl">
        <a
          href="https://github.com/Nathen-Smith/data-dashboard"
          className="project-link"
          style={{ textDecoration: "none" }}
        >
          <h4 className="project-title">
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
        The system was implemented using React and TypeScript with package
        react-firebase-hooks for ease of integrating Firestore snapshot, and
        supporting re-rendering when there are changes in the snapshot.As for
        the database, I chose Python to easily parse movies_metadata.csv as
        strings line by line and obtain the right types through the eval()
        function, which correctly extracts Booleans, Arrays, Dictionaries,
        etc.After obtaining the right data and its types, a dictionary is
        created through dict(zip(keys, values)) and is added as a single movie
        document in the movies collection through admin SDK functionality.
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
