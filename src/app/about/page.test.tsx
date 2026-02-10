// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";
import mockGetPlaceholderImage from "../lib/getPlaceholderImage.mock";

import { within } from "@testing-library/dom";
import {
  renderWithLayout,
  resetMatchMedia,
  resolvedComponent,
  screen,
} from "test-utils";
import { vi } from "vitest";
import AboutPage from "./page";

describe("The About Page", () => {
  describe("Navigation", () => {
    beforeEach(() => {
      resetMatchMedia();
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/about");
      mockGetPlaceholderImage.mockResolvedValue("blurred-image");
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    test("can interact with navigation", async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      renderWithLayout(<AboutResolved />);

      const mainNav = screen.getByRole("navigation", {
        name: "Main Navigation",
      });

      expect(mainNav).toBeVisible();

      const aboutLink = within(mainNav).getByRole("link", {
        name: "About",
      });
      expect(aboutLink).toHaveAttribute("aria-current", "page");
      const homeLink = within(mainNav).getByRole("link", {
        name: "Home",
      });
      expect(homeLink).not.toHaveAttribute("aria-current", "page");
    });
  });
});
