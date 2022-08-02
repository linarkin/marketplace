import * as React from "react";
import { CardStyled, Title, Credits, ImageWrapper } from "./productCard.styled";
import Button from "@mui/material/Button";

interface ProductCardProps {
  id: string;
  name: string;
  credits: number;
  imageUrl?: string;
  buttonClicked: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  credits,
  imageUrl,
  buttonClicked,
}) => {
  return (
    <>
      <CardStyled>
        <ImageWrapper>
          <img src={imageUrl} alt="" />
        </ImageWrapper>
        <Title>{name}</Title>
        <Credits>
          <b>{credits} credits</b>
        </Credits>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => buttonClicked(id)}
        >
          Add to cart
        </Button>
      </CardStyled>
    </>
  );
};

export default ProductCard;
