import { render, screen } from "test-utils";
import NavigationItem from "./NavigationItem";

describe("The NavigationItem component", () => {
  test("inactive state has expected attributes and style rules", () => {
    render(
      <NavigationItem
        name="Work"
        color="blue"
        activeColor="red"
        href="/work"
        isActive={false}
      />
    );

    const link = screen.getByRole("link", {
      name: "Work",
    }) as HTMLAnchorElement;

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/work");
    expect(link).not.toHaveStyleRule("border-bottom", "4px solid");
    expect(link).not.toHaveStyleRule("border-bottom-color", "red");
    expect(link).toHaveStyleRule("color", "blue");
    expect(link).toHaveStyleRule("color", "red", { target: ":hover" });
    expect(link).toHaveStyleRule("text-decoration", "none", {
      target: ":hover",
    });
  });

  test("active state has expected attributes and style rules", () => {
    render(
      <NavigationItem
        name="About"
        color="blue"
        activeColor="red"
        href="/about"
        isActive
      />
    );

    const link = screen.getByRole("link", {
      name: "About",
    }) as HTMLAnchorElement;

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveStyleRule("color", "blue");
    expect(link).toHaveStyleRule("color", "red", { target: ":hover" });
    expect(link).toHaveStyleRule("text-decoration", "none", {
      target: ":hover",
    });
  });
});
