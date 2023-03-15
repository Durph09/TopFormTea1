import { useContext } from "react";
import { ShopContext } from "./shopContext";
import { PRODUCTS } from "./ProductsObj";
import { CartItem } from "./CartItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} style={{ width: "10rem" }} />;
          }
        })}
      </Row>

      {totalAmount > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4>Subtotal: ${totalAmount}</h4>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </Container>
  );
};