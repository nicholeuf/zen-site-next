// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";
import mockGetPlaceholderImage from "../lib/getPlaceholderImage.mock";

import { within } from "@testing-library/dom";
import {
  render,
  renderSnapshotWithLayout,
  renderWithLayout,
  resetMatchMedia,
  resolvedComponent,
  SM_DEVICE,
  XS_DEVICE,
  screen,
} from "test-utils";
import { vi } from "vitest";
import AboutPage from "./page";

describe("The About Page", () => {
  describe("Snapshot", () => {
    beforeEach(() => {
      resetMatchMedia();
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/about");
      mockGetPlaceholderImage.mockResolvedValue("blurred-image");
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    test("has expected snapshot", async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      const { container } = renderSnapshotWithLayout(<AboutResolved />);
      expect(container).toMatchSnapshot();
    });
  });

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

  describe("User on Desktop", () => {
    beforeEach(() => {
      resetMatchMedia();
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/about");
      mockGetPlaceholderImage.mockResolvedValue("blurred-image");
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    test("has a 3-column layout", async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent("About");

      const photoGrid = screen.queryByTestId("about-photos-3-column-layout");
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole("img", {
        name: "Na Pali Coast Tour in Kauai, HI (2019)",
      });
      expect(napaliPhoto).toBeVisible();
    });
  });

  describe("User with XS Device", () => {
    beforeEach(() => {
      resetMatchMedia(XS_DEVICE);
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/about");
      mockGetPlaceholderImage.mockResolvedValue("blurred-image");
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    test("has a 1-column layout", async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent("About");

      const photoGrid = screen.queryByTestId("about-photos-1-column-layout");
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole("img", {
        name: "Na Pali Coast Tour in Kauai, HI (2019)",
      });
      expect(napaliPhoto).toBeVisible();
    });
  });

  describe("User with SM Device", () => {
    beforeEach(() => {
      resetMatchMedia(SM_DEVICE);
      // set pathname for the next/navigation mock
      navigationMocks.usePathname.mockImplementation(() => "/about");
      mockGetPlaceholderImage.mockResolvedValue("blurred-image");
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    test("has a 2-column layout", async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent("About");

      const photoGrid = screen.queryByTestId("about-photos-2-column-layout");
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole("img", {
        name: "Na Pali Coast Tour in Kauai, HI (2019)",
      });
      expect(napaliPhoto).toBeVisible();
    });
  });
});
