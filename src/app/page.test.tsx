/*
 * @jest-environment jsdom
 */
import {
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
  resetMatchMedia,
  XS_DEVICE,
  fireEvent,
  waitFor,
  act,
} from 'test-utils';
import userEvent from '@testing-library/user-event';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

import HomePage from './page';

describe('The Home Page', () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<HomePage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['landing'], ['footer']])(
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<HomePage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('can interact with mobile navigation', async () => {
      // mock usePathname to return the home page route
      mockUsePathname.mockImplementation(() => '/');

      act(() => {
        renderWithLayout(<HomePage />);
      });

      const user = userEvent.setup();
      const getDialog = () => screen.queryByTestId('mobile-navigation-dialog');

      // Dialog is not initially present in documnet
      expect(getDialog()).not.toBeInTheDocument();

      // Clicking the open button opens the dialog
      await user.click(
        screen.getByRole('button', {
          name: 'open',
        })
      );
      expect(getDialog()).toBeVisible();
      expect(
        screen.getByRole('link', {
          name: 'Work',
        })
      ).toBeVisible();

      // Clicking the close button closes the dialog
      await user.click(
        screen.getByRole('button', {
          name: 'close',
        })
      );
      await waitFor(() => expect(getDialog()).not.toBeInTheDocument());
    });
  });
});
