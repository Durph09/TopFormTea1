import React, { useContext } from "react";
import { ShopContext } from "./shopContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { style } = props;

  return (
    <Card style={style} className="border-0">
      <Card.Img variant="top" src={productImage} className="w-100 h-100" />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>

        <Card.Text> ${price}</Card.Text>

        <InputGroup className="mb-3">
          <Button
            onClick={() => removeFromCart(id)}
            variant="outline-secondary"
          >
            -
          </Button>
          <Form.Control
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            aria-label="Number of items in your cart"
          />
          <Button variant="outline-secondary" onClick={() => addToCart(id)}>
            {" "}
            +
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
