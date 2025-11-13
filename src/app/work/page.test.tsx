import userEvent from "@testing-library/user-event";
import { renderSnapshotWithLayout, renderWithLayout, screen } from "test-utils";
import navigationMocks from "utils/nextNavigationMock";
import { vi } from "vitest";
import constants from "../styles/constants";
import WorkPage from "./page";

describe("The Work Page", () => {
  beforeEach(() => {
    navigationMocks.usePathname.mockImplementation(() => "/work");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("has expected snapshot", async () => {
    const { container } = renderSnapshotWithLayout(<WorkPage />);
    expect(container).toMatchSnapshot();
  });

  test.each([["header"], ["work-page"], ["footer"]])(
    "contains the visible testid %p",
    (testid) => {
      renderWithLayout(<WorkPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  test("works as expected", async () => {
    const user = userEvent.setup();

    renderWithLayout(<WorkPage />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Work");

    const portfolioHeading2 = screen.getByRole("heading", { level: 2 });
    expect(portfolioHeading2).toBeVisible();
    expect(portfolioHeading2).toHaveTextContent("thecodingyogi.me | Developer");

    const imperfectTab = screen.getByRole("tab", { name: "Imperfect Foods" });
    expect(imperfectTab).toBeVisible();

    await user.click(imperfectTab);

    const imperfectHeading2 = screen.getByRole("heading", { level: 2 });
    expect(imperfectHeading2).toBeVisible();
    expect(imperfectHeading2).toHaveTextContent(
      "Imperfect Foods | Full-Stack Developer"
    );

    const footer = screen.getByTestId("footer") as HTMLDivElement;
    expect(footer).toBeVisible();
    expect(footer).toHaveStyleRule("color", constants.colors.cream);
    expect(footer).toHaveStyleRule("background-color", constants.colors.carob);

    const nav = screen.getByTestId("footer-nav") as HTMLDivElement;
    expect(nav).toBeVisible();

    const madeWithLoveCopy = screen.getByText(/Made with/i);
    expect(madeWithLoveCopy).toBeVisible();

    const copyRightCopy = screen.getByText(/Copyright/i);
    expect(copyRightCopy).toBeVisible();

    const sourceCopy = screen.getByText(/View Source Code/i);
    expect(sourceCopy).toBeVisible();
  });
});
