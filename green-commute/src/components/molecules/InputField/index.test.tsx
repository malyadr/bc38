import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { InputField } from ".";

test("test to check whether chip Component is present ", () => {
  render(
    <InputField
      text="some sample input field"
      variant={undefined}
      styles={{ width: "400px", height: "48px" }}
    />
  );
  const text = screen.getByPlaceholderText(/some sample input field/i);
  expect(text).toBeInTheDocument();
});
