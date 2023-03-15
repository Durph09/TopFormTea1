import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="pt-4 bg-white ">
        <Row>
          <Col sm={12} md={4}>
            <Link to="/aboutUs">
              <h3>Learn</h3>
            </Link>
            <hr />

            <ul>
              <li>Recipes</li>
              <li>Philosophy</li>
              <li>Advisors</li>
              <li>Ambassadors</li>
              <li>Reviews</li>
              <li>Trends</li>
            </ul>

            <p>Copyright Top Form Tea. All rights reserved.</p>

            <p className="disclaimer">
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat or
              prevent any disease.
            </p>
          </Col>

          <Col sm={12} md={4}>
            <Link to="/shop">
              {" "}
              <h3>Shop</h3>
            </Link>
            <hr />
            <ul>
              <li>Ritual Kits</li>
              <li>Morning</li>
              <li>Evening</li>
              <li>Merch</li>
              <li>Annual Plans</li>
              <li>Shop All</li>
            </ul>
            <p>We donate a % of earnings to health research</p>
          </Col>

          <Col sm={12} md={4}>
            <Link to="/aboutUs">
              <h3>Support</h3>
            </Link>
            <hr />
            <ul>
              <li>Careers</li>
              <li>Locations</li>
              <li>Order Lookup</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Affiliate</li>
            </ul>

            <p>Join our community</p>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
