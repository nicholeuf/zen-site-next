import { render, screen, fireEvent, waitFor } from 'test-utils';
import { vi } from 'vitest';

import MobileNavigation from './MobileNavigation';

describe('MobileNavigation', () => {
  test('returns focus to open button when dialog closes', async () => {
    // use fake timers so we can advance past the setTimeout deterministically
    vi.useFakeTimers();

    render(<MobileNavigation activeColor="primary.main" />);

    const openButton = screen.getByLabelText(/Mobile Navigation Trigger/i);

    // open the dialog
    fireEvent.click(openButton);

    // wait for the close button to appear
    const closeButton = await screen.findByLabelText(
      /Close Mobile Navigation/i
    );

    // close the dialog
    fireEvent.click(closeButton);

    // advance timers so the setTimeout in the component runs
    vi.advanceTimersByTime(200);

    // wait for focus to return to the open button
    await waitFor(() => {
      expect(openButton).toHaveFocus();
    });

    vi.useRealTimers();
  });
});
