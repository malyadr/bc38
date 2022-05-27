import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { JobCard } from ".";

test("test to check whether chip Component is present ", () => {
  render(
    <JobCard src={""} role={""} companyName={""} location={""} time={""} />
  );
  //   const text = screen.getByText(/Common Routes/i);
  //   expect(text).toBeInTheDocument();
});
