import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import teaFarm from "../components/assets/teaFarm.jpg";
import usOrganic from "../components/assets/usOrganic.jpeg";

const AboutUs = () => {
  return (
    <Container fluid>
      <Image
        alt="organic tea farm"
        src={teaFarm}
        fluid
        className="mx-auto d-block"
      />
      <h1>Nice To Meet You</h1>
      <main>
        <Row>
          <Col md={6}></Col>
          <Col sm={12} md={6} className="p-2">
            <p>
              Welcome to Top Form Tea, a company specializing in organic tea
              that nurtures the mind, body, and soul. Our mission is to provide
              high-quality tea that not only tastes delicious but also promotes
              wellness and vitality.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4}></Col>
          <Col md={4} sm={12} className="p-2">
            <h3 className="fst-italic">
              We understand that tea is not just a beverage, but a way of life.
            </h3>{" "}
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row>
          <Col md={6}></Col>
          <Col md={6} sm={12} className="p-2">
            <p>
              {" "}
              Our teas are carefully crafted to support your health and
              well-being, with each sip delivering a soothing and rejuvenating
              experience. We are passionate about sharing our love for tea with
              others and creating a positive impact on the world. That's why we
              are committed to sustainable and ethical practices in every aspect
              of our business, from sourcing to packaging and everything in
              between. We take pride in our commitment to quality, and we are
              confident that you will taste the difference in every cup of Top
              Form Tea. We look forward to serving you and helping you nourish
              your mind, body, and soul.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="text-center">
            {" "}
            <Image
              fluid
              src={usOrganic}
              alt="us organic"
              className="d-none d-md-block d-xxl-none"
            />{" "}
          </Col>
          <Col md={4} sm={12} className="p-2">
            <h3 className="fst-italic">
              That's why we source only the finest organic ingredients from
              around the world to create our unique blends.
            </h3>{" "}
          </Col>
          <Col md={4} sm={0}></Col>
        </Row>

        <Row>
          <Col md={6} sm={0}></Col>
          <Col md={6} sm={12} className="p-2">
            <p>
              {" "}
              We are passionate about sharing our love for tea with others and
              creating a positive impact on the world. That's why we are
              committed to sustainable and ethical practices in every aspect of
              our business, from sourcing to packaging and everything in
              between. We take pride in our commitment to quality, and we are
              confident that you will taste the difference in every cup of Top
              Form Tea. Whether you're looking for a morning boost, a mid-day
              pick-me-up, or a relaxing evening ritual, we have a blend that's
              perfect for you. Thank you for choosing Top Form Tea. We look
              forward to serving you and helping you nourish your mind, body,
              and soul.
            </p>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default AboutUs;
