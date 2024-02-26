/*
 * @jest-environment jsdom
 */
import {
  render,
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
} from 'test-utils';

import AboutPage from './page';

describe('The About Page', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<AboutPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['about-page'], ['footer']])(
    'contains the visible testid %i',
    (testid) => {
      renderWithLayout(<AboutPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  test('works as expected', () => {
    render(<AboutPage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('About');
  });
});
