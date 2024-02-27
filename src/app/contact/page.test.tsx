/*
 * @jest-environment jsdom
 */
import {
  render,
  renderWithLayout,
  screen,
  renderSnapshotWithLayout,
} from 'test-utils';
// import userEvent from '@testing-library/user-event';

import ContactPage from './page';

describe('The Contact Page', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<ContactPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['contact-page'], ['footer']])(
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<ContactPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  test('works as expected', () => {
    render(<ContactPage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Contact');
  });
});
