import React from "react";
import { render } from "@testing-library/react";
import App from "./components/App";

test("renders learn carbon link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn carbon/i);
  expect(linkElement).toBeInTheDocument();
});
