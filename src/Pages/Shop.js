import { PRODUCTS } from "../components/ProductsObj";
import { ProdCard } from "../components/productLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Shop = () => {
  return (
    <Container>
      <Row>
        <h1>Shop All Products</h1>
        {PRODUCTS.map((product) => (
          <Col md={4} sm={1}>
            {" "}
            <ProdCard data={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
