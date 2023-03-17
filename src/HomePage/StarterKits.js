import "../App.css";
import Container from "react-bootstrap/Container";
import ProductCarousel from "./ProductCarousel";

const StarterKits = ({ windowWidth }) => {
  return (
    <Container fluid className="bg-white w-100">
      <h2>Try a starter kit</h2>
      <p>
        {" "}
        <span style={{ backgroundColor: "rgb(228,228,228)" }}>
          Best way to get started
        </span>
      </p>

      <ProductCarousel windowWidth={windowWidth} />
      {windowWidth}
    </Container>
  );
};

export default StarterKits;
