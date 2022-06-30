import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { CommonRoutes } from ".";

test("test to check whether chip Component is present ", () => {
  render(<CommonRoutes from={"abc"} to={"xyz"} />);
  const text = screen.getByText(/Common Routes/i);
  expect(text).toBeInTheDocument();
});
