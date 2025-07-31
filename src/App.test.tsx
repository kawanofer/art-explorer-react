import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App component", () => {
  it("renders the app component", () => {
    render(<App />);
    const linkElement = screen.getByRole("link", { name: /Home/i });
    expect(linkElement).toBeInTheDocument();
  });
});
