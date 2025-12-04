import { render, screen } from "test-utils";
import Navigation from "./Navigation";

describe("Navigation item integration", () => {
  test("renders IconButton as an anchor with IconButton classes", () => {
    render(<Navigation />);

    const linkedin = screen.getByRole("link", {
      name: /LinkedIn/i,
    }) as HTMLAnchorElement;
    expect(linkedin).toBeVisible();
    // MUI attaches IconButton classes to the rendered anchor when using component prop
    expect(linkedin.className).toMatch(/MuiIconButton-root/);
  });
});
