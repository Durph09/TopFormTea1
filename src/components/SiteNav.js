import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import cart from "./assets/cart.png";
import tftLogo from "./assets/tftlogo1.png";
import { Link } from "react-router-dom";
import { CartBadge } from "./CartBadge";
import { Cart } from "./Cart";
import { useNavigate } from "react-router-dom";

import "../App.css";

function SiteNav() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const expand = false;
  const navbarbgStart = "rgba(166, 166, 166, 0.39)";
  const navbarbgTrans = "rgba(184, 182, 174, 1)";
  const [navBarBackground, setNavBarBackground] = useState(navbarbgStart);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroPosition = hero.offsetTop + hero.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroPosition) {
        setNavBarBackground(navbarbgTrans);
      } else {
        setNavBarBackground(navbarbgStart);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: navBarBackground,
        zIndex: "4",
        height: "54px",
      }}
      expand={expand}
    >
      <Container fluid>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          onClick={handleShow}
        />

        <Navbar.Brand as={Link} to="/">
          <img
            className="LogoAnamation"
            src={tftLogo}
            width="70"
            height="70"
            alt="Top Form Tea logo"
            style={{ position: "absolute", top: "5px", right: "45%" }}
          />
        </Navbar.Brand>

        <div style={{ position: "relative" }} onClick={handleShowCart}>
          <img style={{ maxHeight: "45px" }} src={cart} alt="shopping cart" />
          <div style={{ position: "absolute", top: "-10px", right: "-10px" }}>
            <CartBadge />
          </div>
        </div>
        <Offcanvas show={showCart} onHide={handleCloseCart}>
          <Offcanvas.Header closeButton onClick={handleCloseCart}>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart />

            <Button onClick={() => {navigate("/shop");
            handleCloseCart()}} size="sm" className="m-4">
              Shop
            </Button>
            <Button
              className="m-4"
              onClick={() => {
                navigate("/checkout");
                handleCloseCart()
              }}
              size="sm"
            >
              Checkout
            </Button>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={show} onHide={handleClose}
        >
          <Offcanvas.Header closeButton onClick={handleClose}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Site Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop">
                Shop All
              </Nav.Link>

              <Nav.Link as={Link} to="/AboutUs">
                About Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default SiteNav;
