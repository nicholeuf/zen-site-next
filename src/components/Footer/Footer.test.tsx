import { render, screen } from "test-utils";
import constants from "../../app/styles/constants";
import Footer from "./index";

describe("The Footer component", () => {
  test("is visible and has expected style rules", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer") as HTMLDivElement;
    expect(footer).toBeVisible();
    expect(footer).toHaveStyleRule("color", constants.colors.cream);
    expect(footer).toHaveStyleRule("background-color", constants.colors.carob);

    // The Footer stories have more comprehensive tests, so at this level we
    // just want to confirm that the component renders with the expected styles.
    // The stories test the component's behavior and interactions.
  });
});
