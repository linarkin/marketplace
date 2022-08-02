import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { CartSideBar } from "components/cartSideBar";

test("renders App", () => {
  render(<App />);
  const headerText = screen.getByText(/Credits:/i);
  expect(headerText).toBeInTheDocument();
});
