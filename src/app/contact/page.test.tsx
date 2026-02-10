// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";

import { renderWithLayout, screen } from "test-utils";
import { vi } from "vitest";

import ContactPage from "./page";

describe("The Contact Page", () => {
  beforeEach(() => {
    navigationMocks.usePathname.mockImplementation(() => "/contact");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders the contact container", () => {
    renderWithLayout(<ContactPage />);
    expect(document.getElementById("contact-page")).toBeInTheDocument();
    // At this level, just test that the contact container is rendered.
    // The ContactPage component itself is tested in its own story, so we can
    // be confident that if the container is present, the content is as well.
  });
});
