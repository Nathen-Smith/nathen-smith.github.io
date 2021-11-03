import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../../scss/style.scss";
import CS225_1 from "./CS225Photos/1_Intro.jpg";
import CS225_2 from "./CS225Photos/2_data.jpg";
import CS225_3 from "./CS225Photos/3_graph.jpg";
import CS225_4 from "./CS225Photos/4_dijkstra.jpg";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCircle } from "@fortawesome/free-solid-svg-icons";
import useScreenType from "../../shared-hooks/useScreenType";

fontawesome.library.add(brands);

const items = [CS225_1, CS225_2, CS225_3, CS225_4];

const MyCarousel = () => {
  return (
    <Carousel
      interval={null}
      style={{ display: "inline-block" }}
      nextIcon={
        <div className="dark">
          <span aria-hidden="true" className="carousel-control-next-icon" />
        </div>
      }
      prevIcon={
        <div className="dark">
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        </div>
      }
    >
      {items.map((item, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={item} alt="CS225" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
const Description = () => {
  return (
    <div>
      <div className="project-header">
        <a
          href="https://github.com/Nathen-Smith/Influence-of-Twitter-Users"
          className="project-link"
          style={{ textDecoration: "none" }}
        >
          <h4 className="project-title text-xl font-semibold">
            Influence of Twitter Users
            {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" style={{marginLeft:'5px', marginBottom:'5px',opacity:'0.6'}}/> */}
          </h4>
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="cpp"
          style={{ marginRight: "-8px" }}
        />
      </div>
      <hr />
      <p className="project-text">
        Integrated a Twitter dataset into a directed graph data structure by
        parsing related files for an inputted ego node and assigning edge
        weights based off the intersection of features of the respective nodes,
        written in C++. Applied Dijkstra’s Algorithm and Betweenness Centrality
        to determine chains of influence and how influential a user is.
        <br />
        <br />I deduced methods to create a correct graph for the dataset,
        implemented the algorithms as described above, developed tests for the
        constructed graph such as cycle detection, verifying the correctness of
        our implementations of the algorithms.
      </p>
    </div>
  );
};

const CS225Carousel = () => {
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
          <MyCarousel />
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
          <MyCarousel />
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
        <MyCarousel />
      </Container>
      <Container>
        <Description />
      </Container>
    </div>
  );
};

export default CS225Carousel;
