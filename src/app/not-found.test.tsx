/*
 * @jest-environment jsdom
 */
import {
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
  resetMatchMedia,
  XS_DEVICE,
} from 'test-utils';

const mockUsePathname = jest.fn();

// Navigation accessibility resource
// http://web-accessibility.carnegiemuseums.org/code/navigation/
// https://www.erwinhofman.com/blog/build-web-accessible-hamburger-dropdown-menus/

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

import NotFound from './not-found';

describe('The Not Found (404) Page', () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  test('has expected snapshot', () => {
    // mock usePathname to return a 404 page
    mockUsePathname.mockImplementation(() => '/figs');

    const component = renderSnapshotWithLayout(<NotFound />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['not-found-page'], ['footer']])(
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<NotFound />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('has expected content', () => {
      // mock usePathname to return a 404 page
      mockUsePathname.mockImplementation(() => '/figs');

      renderWithLayout(<NotFound />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Not Found'
      );

      expect(screen.getByText(/Could not find the page/i)).toHaveTextContent(
        /\/figs/
      );
    });
  });
});
