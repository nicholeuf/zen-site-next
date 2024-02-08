/*
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Logo from "./index";

describe("The Logo component", () => {
  test("contains title and subtitle", () => {
    render(<Logo />);

    const title = screen.getByText("Nichole Frey");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("Full-Stack Developer");
    expect(subtitle).toBeInTheDocument();
  });
});
