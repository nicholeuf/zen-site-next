/*
 * @jest-environment jsdom
 */
import {
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
  resetMatchMedia,
  XS_DEVICE,
  SM_DEVICE,
} from 'test-utils';

const mockUsePathname = jest.fn();

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

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('has expected content and factors image by 2', () => {
      // mock usePathname to return a 404 page
      mockUsePathname.mockImplementation(() => '/figs');

      renderWithLayout(<NotFound />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Sorry'
      );

      expect(screen.getByTestId('not-found-copy')).toHaveTextContent(
        'The page /figs could not be found. Would you like to go to the Home Page?'
      );

      expect(screen.getByTestId('plant-image-factor-2')).toBeVisible();
    });
  });

  describe('User with SM Device', () => {
    beforeAll(() => {
      resetMatchMedia(SM_DEVICE);
    });

    test('has expected content and factors image by 1', () => {
      // mock usePathname to return a 404 page
      mockUsePathname.mockImplementation(() => '/figs');

      renderWithLayout(<NotFound />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Sorry'
      );

      expect(screen.getByTestId('not-found-copy')).toHaveTextContent(
        'The page /figs could not be found. Would you like to go to the Home Page?'
      );

      expect(screen.getByTestId('plant-image-factor-1')).toBeVisible();
    });
  });
});
