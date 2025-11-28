import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SkipLink from "./index";

describe("SkipLink", () => {
  beforeEach(() => {
    // Mock window.history.replaceState
    window.history.replaceState = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders a skip link with correct text", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
  });

  it("has correct href attribute", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: /skip to main content/i });
    expect(link).toHaveAttribute("href", "#main-content");
  });

  it("is visually hidden by default (positioned off-screen)", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Check that it's positioned off-screen
    expect(link).toHaveStyle({
      position: "fixed",
      left: "-9999px",
    });
  });

  it("removes hash from URL when clicked", async () => {
    const user = userEvent.setup();
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Click the link
    await user.click(link);

    // Wait for setTimeout to execute
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Verify hash is removed from URL
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      "",
      window.location.pathname
    );
  });

  it("is keyboard accessible with Tab key", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink />
        <button>Other focusable element</button>
      </div>
    );

    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Tab to the skip link (it should be the first focusable element)
    await user.tab();

    expect(link).toHaveFocus();
  });

  it("can be activated with Enter key", async () => {
    const user = userEvent.setup();
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Focus and activate with keyboard
    link.focus();
    await user.keyboard("{Enter}");

    // Wait for setTimeout
    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(window.history.replaceState).toHaveBeenCalled();
  });

  it("is positioned fixed for reliable visibility", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Verify it uses fixed positioning
    expect(link).toHaveStyle({ position: "fixed" });
  });
});
