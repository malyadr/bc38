import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Routes } from ".";
import { fireEvent } from "@storybook/testing-library";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/customTheme";

test("test to check whether bike fires an event when clicked ", () => {
  render(<Routes />);
  const bike = screen.getByTestId(/bike/i);
  fireEvent.click(bike);
});

test("test to check whether train fires an event when clicked ", () => {
  render(<Routes />);
  const train = screen.getByTestId(/train/i);
  fireEvent.click(train);
});

test("test to check whether car fires an event when clicked ", () => {
  render(<Routes />);
  const car = screen.getByTestId(/car/i);
  fireEvent.click(car);
  const Hoveredcar = screen.getByTestId(/carHovered/i);
  fireEvent.click(Hoveredcar);
});

test("test to check whether bus fires an event when clicked ", () => {
  render(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
  const bus = screen.getByTestId(/busss/i);
  fireEvent.click(bus);
  const Hoveredbus = screen.getByTestId(/busHovered/i);
  fireEvent.click(Hoveredbus);
});
