import "../App.css";
import redTea from "../components/assets/redTea.jpg";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Container } from "react-bootstrap";

const Certs = () => {
  return (
    
    <Container fluid className="certsbackground d-flex align-items-center">
      <Row className="align-items-center w-100">
      <Col xs={12} md={4} className="text-center"><h2>On the inside that counts</h2></Col>
      <Col className="text-center" xs={12} md={2} ><h5>Organic</h5></Col>
      <Col className="text-center" xs={12} md={2} ><h5>JAS Cert</h5></Col>
      <Col  className="text-center" xs={12} md={2} ><h5>Vegan</h5></Col>
      <Col className="text-center" xs={12} md={2} ><h5>Fair Trade</h5></Col></Row>
    </Container>
  );
};

export default Certs;
