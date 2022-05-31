import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import JobSearch from "./index";
import React from "react";

it("renders Job Search Bar", () => {
  render(<JobSearch />);
  const testIcon = screen.getByTestId("jobsearch");
  expect(testIcon).toBeInTheDocument();
});

it("detects onChange for Skills Textfield", () => {
  render(<JobSearch />);
  const wrapper = screen.getByTestId("skills");
  fireEvent.change(wrapper, {
    target: {
      value: "3",
    },
  });
  expect(wrapper).toBeInTheDocument();
});

it("renders Job Search Bar", () => {
  render(<JobSearch />);
  const wrapper = screen.getByTestId("location");
  fireEvent.change(wrapper, {
    target: {
      value: "3",
    },
  });
  expect(wrapper).toBeInTheDocument();
});
