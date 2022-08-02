import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./productCard";

test("renders Product card", () => {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };
  const productCardObj = {
    id: "test-product-card-id",
    name: "test product card name",
  };

  render(
    <ProductCard
      id={productCardObj.id}
      name={productCardObj.name}
      credits={100}
      buttonClicked={handleClick}
    />
  );
  const button = screen.getByText("Add to cart");
  fireEvent.click(button);
  expect(clicked).toBe(true);
  const credits = screen.getByText(/100 credits/i);
  expect(credits).toBeInTheDocument();
});
