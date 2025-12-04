// biome-ignore assist/source/organizeImports: manual sort for mocking
import navigationMocks from "utils/nextNavigationMock";
import mockGetPlaceholderImage from "./lib/getPlaceholderImage.mock";

import userEvent from "@testing-library/user-event";
import {
  MD_DEVICE,
  renderSnapshotWithLayout,
  renderWithLayout,
  resetMatchMedia,
  resolvedComponent,
  screen,
  waitFor,
  XS_DEVICE,
} from "test-utils";
import { vi } from "vitest";
import HomePage from "./page";

describe("The Home Page", () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  beforeEach(() => {
    // set pathname for the next/navigation mock
    navigationMocks.usePathname.mockImplementation(() => "/");
    mockGetPlaceholderImage.mockResolvedValue("blurred-image");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("has expected snapshot", async () => {
    const HomeResolved = await resolvedComponent(HomePage);
    const { container } = renderSnapshotWithLayout(<HomeResolved />);
    expect(container).toMatchSnapshot();
  });

  describe("User with MD Device", () => {
    beforeAll(() => {
      resetMatchMedia(MD_DEVICE);
    });

    test("can interact with navigation", async () => {
      const HomeResolved = await resolvedComponent(HomePage);
      renderWithLayout(<HomeResolved />);

      // The home link in the top left corner
      expect(
        screen.getAllByRole("link", {
          name: "Home",
        })[0]
      ).toBeVisible();

      expect(
        screen.getByRole("navigation", {
          name: "Main Navigation",
        })
      ).toBeVisible();

      const workLink = screen.getByRole("link", {
        name: "Work",
      });
      expect(workLink).not.toHaveAttribute("aria-current", "page");
      const homeLink = screen.getAllByRole("link", {
        name: "Home",
      })[1];
      expect(homeLink).toHaveAttribute("aria-current", "page");
    });
  });

  describe("User with XS Device", () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test("can interact with mobile navigation", async () => {
      const HomeResolved = await resolvedComponent(HomePage);
      renderWithLayout(<HomeResolved />);

      const user = userEvent.setup();
      const getDialog = () => screen.queryByTestId("mobile-navigation-dialog");

      // Dialog is not initially present in document
      expect(getDialog()).not.toBeInTheDocument();

      const openButton = screen.getByRole("button", {
        name: "Mobile Navigation Trigger",
      });
      await waitFor(() => expect(openButton).toHaveFocus());
      expect(openButton).toHaveAttribute("aria-expanded", "false");

      // Clicking the open button opens the dialog
      await user.click(openButton);
      expect(getDialog()).toBeVisible();
      expect(openButton).toHaveAttribute("aria-expanded", "true");

      const closeButton = screen.getByRole("button", {
        name: "Close Mobile Navigation",
      });
      await waitFor(() => expect(closeButton).toHaveFocus());

      expect(
        screen.getByRole("navigation", {
          name: "Main Navigation",
        })
      ).toBeVisible();

      const workLink = screen.getByRole("link", {
        name: "Work",
      });
      expect(workLink).not.toHaveAttribute("aria-current", "page");
      const homeLink = screen.getByRole("link", {
        name: "Home",
      });
      expect(homeLink).toHaveAttribute("aria-current", "page");

      // Clicking the close button closes the dialog
      await user.click(closeButton);
      await waitFor(() => expect(getDialog()).not.toBeInTheDocument());
      expect(openButton).toHaveFocus();
      expect(openButton).toHaveAttribute("aria-expanded", "false");
    });
  });
});
