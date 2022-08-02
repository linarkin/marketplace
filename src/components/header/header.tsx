import * as React from "react";
import { HeaderStyled, CartIconWrapper } from "./header.styled";
import { useCreditsStore, useCartStore } from "store";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface HeaderProps {
  openSideBar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSideBar }) => {
  const { credits, reset } = useCreditsStore();
  const { cartCount } = useCartStore();

  return (
    <HeaderStyled>
      <div>
        Credits:
        <b>{credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b> (
        <span onClick={() => reset()}>Reset</span>)
      </div>

      <CartIconWrapper onClick={openSideBar}>
        <ShoppingCartOutlinedIcon /> ({cartCount})
      </CartIconWrapper>
    </HeaderStyled>
  );
};

export default Header;
