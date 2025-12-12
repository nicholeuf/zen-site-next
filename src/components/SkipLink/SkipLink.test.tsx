import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import navigationMocks from "utils/nextNavigationMock";
import { vi } from "vitest";
import SkipLink from "./index";

const mockReplace = vi.fn();
const mockPathname = "/test-path";

const addMainContent = () => {
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  mainContent.tabIndex = -1;
  document.body.appendChild(mainContent);

  return mainContent;
};

describe("SkipLink", () => {
  beforeEach(() => {
    mockReplace.mockClear();
    navigationMocks.useRouter.mockReturnValue({
      replace: mockReplace,
      push: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
    });
    navigationMocks.usePathname.mockReturnValue(mockPathname);
  });

  afterEach(() => {
    document.body.innerHTML = "";
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

  it("moves focus to main content and removes hash when clicked", async () => {
    const user = userEvent.setup();
    const mainContent = addMainContent();
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Click the link
    await user.click(link);

    expect(mainContent).toHaveFocus();

    // Wait for setTimeout to execute
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Verify router.replace is called to remove hash from URL
    expect(mockReplace).toHaveBeenCalledWith(mockPathname, { scroll: false });
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
    const mainContent = addMainContent();
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Focus and activate with keyboard
    link.focus();
    await user.keyboard("{Enter}");

    // Wait for setTimeout
    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(mainContent).toHaveFocus();
    expect(mockReplace).toHaveBeenCalled();
  });

  it("is positioned fixed for reliable visibility", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: /skip to main content/i });

    // Verify it uses fixed positioning
    expect(link).toHaveStyle({ position: "fixed" });
  });
});
