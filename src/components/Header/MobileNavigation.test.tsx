import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "test-utils";

import MobileNavigation from "./MobileNavigation";

describe("MobileNavigation", () => {
  test("returns focus to open button when dialog closes", async () => {
    render(<MobileNavigation activeColor="primary.main" />);
    const openButton = screen.getByLabelText(/Mobile Navigation Trigger/i);
    fireEvent.click(openButton);

    const closeButton = await screen.findByLabelText(
      /Close Mobile Navigation/i
    );
    const dialog = screen.getByTestId("mobile-navigation-dialog");

    fireEvent.click(closeButton);

    // Wait for the dialog to be removed from the DOM after its exit transition
    await waitForElementToBeRemoved(dialog);

    expect(openButton).toHaveFocus();
  });
});
