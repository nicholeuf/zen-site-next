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
  resolvedComponent,
} from 'test-utils';
import AboutPage from './page';

const mockUsePathname = jest.fn();
const mockGetPlaceholderImage = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

jest.mock('../lib/getPlaceholderImage', () => () => mockGetPlaceholderImage());

describe('The About Page', () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => '/about');
    mockGetPlaceholderImage.mockImplementation(() => 'blurred-image');

    resetMatchMedia();
  });

  test('has expected snapshot', async () => {
    const AboutResolved = await resolvedComponent(AboutPage);
    const component = renderSnapshotWithLayout(<AboutResolved />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['about-page'], ['footer']])(
    'contains the visible testid %p',
    async (testid) => {
      const AboutResolved = await resolvedComponent(AboutPage);
      renderWithLayout(<AboutResolved />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  describe('User on Desktop', () => {
    test('has a 3-column layout', async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

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

    test('has a 1-column layout', async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

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

    test('has a 2-column layout', async () => {
      const AboutResolved = await resolvedComponent(AboutPage);
      render(<AboutResolved />);

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
