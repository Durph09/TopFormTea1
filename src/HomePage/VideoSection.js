import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import matchaDraw from "../components/assets/matchaDraw.mp4";
import matchaPancakeStraw from "../components/assets/MatchaPancakeStraw.mp4";

const VideoSection = () => {
  return (
    <Container fluid className="text-center  bg-white">
      <Row className="pt-4">
        <h4>Feed your mind body and soul</h4>
      </Row>
      <Row>
        <Col md={12} lg={4} sm={12}>
          <video width="320" height="320" controls>
            <source src={matchaPancakeStraw} type="video/mp4" />
          </video>
        </Col>
        <Col md={12} lg={4} sm={12} className="d-flex align-items-center ">
          <p>
            Everything—from how we treat the planet, to how we treat each other,
            to how we treat ourselves—starts from within. We want to give you
            permission to try something new, even if it’s just a new state of
            mind. Because if you can change your mind, you can change anything.
          </p>
        </Col>
        <Col md={12} lg={4} sm={12}>
          <video width="320" height="320" controls>
            <source src={matchaDraw} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoSection;
