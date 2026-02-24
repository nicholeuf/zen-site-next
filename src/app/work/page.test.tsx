// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";

import { renderWithLayout, screen } from "test-utils";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

import WorkPage from "./page";

describe("The Work Page", () => {
  beforeEach(() => {
    navigationMocks.usePathname.mockImplementation(() => "/work");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("allows user to switch between work experience tabs", async () => {
    const user = userEvent.setup();
    renderWithLayout(<WorkPage />);
    const imperfectTab = screen.getByRole("tab", { name: "Imperfect Foods" });
    await user.click(imperfectTab);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Imperfect Foods | Full-Stack Developer"
    );
  });
});
