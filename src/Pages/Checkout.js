import { useContext, useState } from "react";
import { ShopContext } from "../components/shopContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Cart } from "../components/Cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [lgShow, setLgShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLgShow(true);
  };

  return (
    <Container>
      <Cart />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Name" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalAddress">
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Address" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className="m-4">
              Place Order
            </Button>
            <Button onClick={() => navigate("/shop")} className="m-4">
              Back to Shopping
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      ></div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Thank you for testing our store
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We appreciate you taking the time to testing right to the end.
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Checkout;
