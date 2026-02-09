// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";

import { renderWithLayout, screen } from "test-utils";
import { vi } from "vitest";

import WorkPage from "./page";

describe("The Work Page", () => {
  beforeEach(() => {
    navigationMocks.usePathname.mockImplementation(() => "/work");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test.each([
    ["header"],
    ["work-page"],
    ["footer"],
  ])("contains the visible testid %p", (testid) => {
    renderWithLayout(<WorkPage />);
    const component = screen.getByTestId(testid);
    expect(component).toBeVisible();
  });
});
