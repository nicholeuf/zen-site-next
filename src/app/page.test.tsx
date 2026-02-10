// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";
import mockGetPlaceholderImage from "./lib/getPlaceholderImage.mock";

import { renderWithLayout, resolvedComponent, screen } from "test-utils";
import { vi } from "vitest";
import HomePage from "./page";

describe("The Home Page", () => {
  beforeEach(() => {
    // set pathname for the next/navigation mock
    navigationMocks.usePathname.mockImplementation(() => "/");
    mockGetPlaceholderImage.mockResolvedValue("blurred-image");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
  test.each([
    ["header"],
    ["landing"],
    ["footer"],
  ])("contains the visible testid %p", async (testid) => {
    const HomeResolved = await resolvedComponent(HomePage);
    renderWithLayout(<HomeResolved />);
    // renderWithLayout(<HomePage />);
    const component = screen.getByTestId(testid);
    expect(component).toBeVisible();
  });
});
