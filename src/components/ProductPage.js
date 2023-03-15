import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { PRODUCTS } from "./ProductsObj";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { ShopContext } from "./shopContext";
import { useNavigate } from "react-router-dom";

function ProductPage(props) {
  const navigate = useNavigate();

  let { id } = useParams();

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const product = PRODUCTS.find((item) => item.id == id);

  const {
    productName: productName,
    prodDesc: prodDesc,
    productImage: productImage,
    price: price,
    headline: headline,
    tasteDesc: tasteDesc,
    feelDesc: feelDesc,
  } = product;
  console.log(product);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={productImage} alt={productName} fluid />

          <Button variant="link" onClick={handleShow}>
            Taste Descriptiom
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{productName}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Image src={productImage} alt={productName} fluid />
              <h4>Taste Description:</h4>
              {tasteDesc}
              <p className="pt-2">{prodDesc}</p>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col md={6}>
          <h1>{productName}</h1>
          <p>{prodDesc}</p>

          <p>{tasteDesc}</p>
          <p>{feelDesc}</p>
          <p>Price: ${price}</p>
          <Button variant="primary" onClick={() => addToCart(id)}>
            Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </Button>
          <Button
            variant="primary"
            className="m-3"
            onClick={() => navigate("/shop")}
          >
            Keep Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
