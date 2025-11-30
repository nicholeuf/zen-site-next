// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";

import {
  renderSnapshotWithLayout,
  renderWithLayout,
  resetMatchMedia,
  screen,
  XS_DEVICE,
} from "test-utils";

import { vi } from "vitest";

import NotFound from "./not-found";

describe("The Not Found (404) Page", () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  beforeEach(() => {
    navigationMocks.usePathname.mockReturnValue("/figs");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("has expected snapshot", async () => {
    const { container } = renderSnapshotWithLayout(<NotFound />);
    expect(container).toMatchSnapshot();
  });

  describe("User with XS Device", () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test("has expected content and factors image by 2", () => {
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/figs");

      renderWithLayout(<NotFound />);

      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "Sorry"
      );

      expect(screen.getByTestId("not-found-copy")).toHaveTextContent(
        "The page /figs could not be found. Would you like to go to the Home Page?"
      );
    });
  });
});
