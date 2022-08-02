import * as React from "react";
import { CartSideBarStyled, Title, Credits } from "./cartSideBar.styled";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useCartStore, useCreditsStore } from "store";
import { useEffect, useState } from "react";
import { CartItem } from "components/cartItem";
import Drawer from "@mui/material/Drawer";
import { ProductItemProp } from "types/product";

interface CartSidebarProps {
  containerRef?: React.RefObject<HTMLInputElement>;
  width?: string;
  toggleStatus?: boolean;
  handleDrawerToggle?: () => void;
}

const CartSideBar: React.FC<CartSidebarProps> = ({
  containerRef,
  width = "30%",
  toggleStatus,
  handleDrawerToggle,
}) => {
  const { cart, removeFromCart, emptyCart, addItemToCart } = useCartStore();
  const { credits, removeCredits } = useCreditsStore();

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const container = window !== undefined ? () => document.body : undefined;

  const handleBuy = () => {
    if (totalPrice <= credits) {
      removeCredits(totalPrice);
      emptyCart();
    }
  };

  useEffect(() => {
    if (totalPrice <= credits) {
      setErrorMessage("");
    } else {
      setErrorMessage("You don't have enough credits!");
    }
  }, [totalPrice, credits]);

  useEffect(() => {
    const total = cart.reduce((sum: number, currentValue: ProductItemProp) => {
      return (sum +=
        cart.find((cartItem: ProductItemProp) => cartItem.id === currentValue.id).metadata
          ?.blockPricingStrategy?.credits * currentValue.quantity);
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const cartContent = (
    <CartSideBarStyled>
      <Title>Cart</Title>
      <div>
        {!cart || cart.length === 0 ? (
          <>Cart is empty</>
        ) : (
          cart.map((item: ProductItemProp) => {
            return (
              <CartItem
                id={item.id}
                name={item.name}
                credits={
                  item.metadata?.blockPricingStrategy?.credits
                    ? item.metadata?.blockPricingStrategy?.credits
                    : 0
                }
                quantity={item.quantity}
                removeItem={(id) => removeFromCart(id, true)}
                decreaseQuantity={(id) => removeFromCart(id)}
                increaseQuantity={() => addItemToCart(item)}
                key={item.id}
              />
            );
          })
        )}
      </div>
      <Credits>
        Total: <b>{totalPrice} credits</b>
      </Credits>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <br />
      <Button
        variant="contained"
        onClick={handleBuy}
        color="secondary"
        size="large"
        disabled={errorMessage !== "" ? true : false}
      >
        Buy now
      </Button>
    </CartSideBarStyled>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={toggleStatus}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          style: {
            width: "80%",
            position: "absolute",
            maxWidth: "initial",
            border: "none",
          },
        }}
        anchor="right"
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
        }}
      >
        {cartContent}
      </Drawer>

      <Drawer
        variant="permanent"
        ModalProps={{
          container: containerRef?.current,
        }}
        PaperProps={{
          style: {
            width: width,
            position: "absolute",
            maxWidth: "initial",
            border: "none",
          },
        }}
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
        open
        anchor="right"
      >
        {cartContent}
      </Drawer>
    </>
  );
};

export default CartSideBar;
