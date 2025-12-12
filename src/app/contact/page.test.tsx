// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";

import { renderSnapshotWithLayout, resetMatchMedia } from "test-utils";
import { vi } from "vitest";

import ContactPage from "./page";

describe("The Contact Page", () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  beforeEach(() => {
    navigationMocks.usePathname.mockReturnValue("/contact");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("has expected snapshot", async () => {
    const { container } = renderSnapshotWithLayout(<ContactPage />);
    expect(container).toMatchSnapshot();
  });
});
