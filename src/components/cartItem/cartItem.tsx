import * as React from "react";
import { CartItemStyled, QuantityElement, Credits } from "./cartItem.styled";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface cartItemProps {
  id: string;
  name: string;
  credits: number;
  quantity: number;
  removeItem: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  increaseQuantity: (id: string) => void;
}

const CartItem: React.FC<cartItemProps> = ({
  id,
  name,
  credits,
  quantity,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <CartItemStyled>
      <div>{name}</div>
      <QuantityElement>
        Quantity:
        <IconButton size="large" onClick={() => decreaseQuantity(id)}>
          <RemoveIcon />
        </IconButton>
        {quantity}
        <IconButton size="large" onClick={() => increaseQuantity(id)}>
          <AddIcon />
        </IconButton>
      </QuantityElement>
      <Credits>{credits * quantity} credits</Credits>

      <Button variant="outlined" color="error" onClick={() => removeItem(id)}>
        Remove
      </Button>
    </CartItemStyled>
  );
};

export default CartItem;
