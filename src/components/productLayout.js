import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ShopContext } from "./shopContext";
import { useNavigate } from "react-router-dom";

export const ProdCard = (props) => {
  const { id, productName, price, productImage, prodDesc } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const navigate = useNavigate();

  return (
    <Card className="w-100 h-100 border-0">
      <Button variant="link" onClick={() => navigate(`/ProductPage/${id}`)}>
        {" "}
        <Card.Img
          variant="top"
          src={productImage}
          alt={`${productName} product image`}
        />
      </Button>

      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>{prodDesc}</Card.Text>
        <Card.Text> ${price}</Card.Text>
        <Button
          style={{ zIndex: "3" }}
          variant="primary"
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
        </Button>
      </Card.Body>
    </Card>
  );
};
