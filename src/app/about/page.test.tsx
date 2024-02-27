/*
 * @jest-environment jsdom
 */
import {
  render,
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
  resetMatchMedia,
  XS_DEVICE,
  SM_DEVICE,
} from 'test-utils';

import AboutPage from './page';

describe('The About Page', () => {
  beforeAll(() => {
    resetMatchMedia();
  });

  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<AboutPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['about-page'], ['footer']])(
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<AboutPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  describe('User on Desktop', () => {
    test('has a 3-column layout', () => {
      render(<AboutPage />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent('About');

      const photoGrid = screen.queryByTestId('about-photos-3-column-layout');
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole('img', {
        name: 'Na Pali Coast Tour in Kauai, HI (2019)',
      });
      expect(napaliPhoto).toBeVisible();
    });
  });

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('has a 1-column layout', () => {
      render(<AboutPage />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent('About');

      const photoGrid = screen.queryByTestId('about-photos-1-column-layout');
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole('img', {
        name: 'Na Pali Coast Tour in Kauai, HI (2019)',
      });
      expect(napaliPhoto).toBeVisible();
    });
  });

  describe('User with SM Device', () => {
    beforeAll(() => {
      resetMatchMedia(SM_DEVICE);
    });

    test('has a 2-column layout', () => {
      render(<AboutPage />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeVisible();
      expect(heading).toHaveTextContent('About');

      const photoGrid = screen.queryByTestId('about-photos-2-column-layout');
      expect(photoGrid).toBeVisible();

      const napaliPhoto = screen.getByRole('img', {
        name: 'Na Pali Coast Tour in Kauai, HI (2019)',
      });
      expect(napaliPhoto).toBeVisible();
    });
  });
});
