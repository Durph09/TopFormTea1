import { useContext } from "react";
import { ShopContext } from "./shopContext";
import Badge from "react-bootstrap/Badge";

export const CartBadge = () => {
  const { cartItems } = useContext(ShopContext);
  const cartItemCount = Object.values(cartItems).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return (
    <Badge pill variant="danger">
      {cartItemCount}
    </Badge>
  );
};
