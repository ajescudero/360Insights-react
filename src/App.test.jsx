import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const linkElement = screen.getByText(/List of People/i);
  expect(linkElement).toBeInTheDocument();
});
