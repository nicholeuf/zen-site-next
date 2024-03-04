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

import ContactPage from './page';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('The Contact Page', () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => '/contact');
    resetMatchMedia();
  });

  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<ContactPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('User with XS Device', () => {
    beforeAll(() => {
      resetMatchMedia(XS_DEVICE);
    });

    test('factors image by 3', () => {
      renderWithLayout(<ContactPage />);
      expect(screen.getByTestId('plant-image-factor-3')).toBeVisible();
    });
  });

  describe('User with SM Device', () => {
    beforeAll(() => {
      resetMatchMedia(SM_DEVICE);
    });

    test('factors image by 2', () => {
      renderWithLayout(<ContactPage />);
      expect(screen.getByTestId('plant-image-factor-2')).toBeVisible();
    });
  });
});
