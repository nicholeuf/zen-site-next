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

import NotFound from './not-found';

describe('The Not Found (404) Page', () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  test('has expected snapshot', async () => {
    // mock usePathname to return a 404 page
    (global as any).__setTestPathname('/figs');

    const { container } = renderSnapshotWithLayout(<NotFound />);
    expect(container).toMatchSnapshot();
  });

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('has expected content and factors image by 2', () => {
      // mock usePathname to return a 404 page

      (global as any).__setTestPathname('/figs');

      renderWithLayout(<NotFound />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Sorry'
      );

      expect(screen.getByTestId('not-found-copy')).toHaveTextContent(
        'The page /figs could not be found. Would you like to go to the Home Page?'
      );
    });
  });
});
