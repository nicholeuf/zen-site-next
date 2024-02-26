/*
 * @jest-environment jsdom
 */
import { renderWithLayout, screen, renderSnapshotWithLayout } from 'test-utils';
import HomePage from './page';

describe('The Home Page', () => {
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
});
