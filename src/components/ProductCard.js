import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ cardTitle, cardSubTitle, imgSrc }) => {
  const navigate = useNavigate();
  return (
    <Card
      as="button"
      onClick={() => navigate("/ProductPage/8")}
      style={{
        width: "18rem",
        backgroundColor: "rgb(228,228,228)",
        border: "none",
        borderRadius: "0",
      }}
    >
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {cardSubTitle}
        </Card.Subtitle>
        <Card.Img variant="bottom" src={imgSrc} alt="Matcha Starter Kit" />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
