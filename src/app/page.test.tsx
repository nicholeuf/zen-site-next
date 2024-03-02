/*
 * @jest-environment jsdom
 */
import {
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
  resetMatchMedia,
  XS_DEVICE,
  MD_DEVICE,
  waitFor,
} from 'test-utils';
import userEvent from '@testing-library/user-event';

const mockUsePathname = jest.fn();

// Navigation accessibility resource
// http://web-accessibility.carnegiemuseums.org/code/navigation/
// https://www.erwinhofman.com/blog/build-web-accessible-hamburger-dropdown-menus/

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

  describe('User with MD Device', () => {
    beforeAll(() => {
      resetMatchMedia(MD_DEVICE);
    });

    test('can interact with navigation', async () => {
      // mock usePathname to return the home page route
      mockUsePathname.mockImplementation(() => '/');

      renderWithLayout(<HomePage />);

      // The home link in the top left corner
      expect(
        screen.getAllByRole('link', {
          name: 'Home',
        })[0]
      ).toBeVisible();

      expect(
        screen.getByRole('navigation', {
          name: 'Main Navigation',
        })
      ).toBeVisible();

      const workLink = screen.getByRole('link', {
        name: 'Work',
      });
      expect(workLink).not.toHaveAttribute('aria-current', 'page');
      const homeLink = screen.getAllByRole('link', {
        name: 'Home',
      })[1];
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('can interact with mobile navigation', async () => {
      // mock usePathname to return the home page route
      mockUsePathname.mockImplementation(() => '/');

      renderWithLayout(<HomePage />);

      const user = userEvent.setup();
      const getDialog = () => screen.queryByTestId('mobile-navigation-dialog');

      // Dialog is not initially present in document
      expect(getDialog()).not.toBeInTheDocument();

      const openButton = screen.getByRole('button', {
        name: 'Mobile Navigation Trigger',
      });
      await waitFor(() => expect(openButton).toHaveFocus());
      expect(openButton).toHaveAttribute('aria-expanded', 'false');

      // Clicking the open button opens the dialog
      await user.click(openButton);
      expect(getDialog()).toBeVisible();
      expect(openButton).toHaveAttribute('aria-expanded', 'true');

      const closeButton = screen.getByRole('button', {
        name: 'Close Mobile Navigation',
      });
      await waitFor(() => expect(closeButton).toHaveFocus());

      expect(
        screen.getByRole('navigation', {
          name: 'Main Navigation',
        })
      ).toBeVisible();

      const workLink = screen.getByRole('link', {
        name: 'Work',
      });
      expect(workLink).not.toHaveAttribute('aria-current', 'page');
      const homeLink = screen.getByRole('link', {
        name: 'Home',
      });
      expect(homeLink).toHaveAttribute('aria-current', 'page');

      // Clicking the close button closes the dialog
      await user.click(closeButton);
      await waitFor(() => expect(getDialog()).not.toBeInTheDocument());
      expect(openButton).toHaveFocus();
      expect(openButton).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
