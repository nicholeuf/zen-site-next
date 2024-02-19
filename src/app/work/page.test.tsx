/*
 * @jest-environment jsdom
 */
import { renderWithLayout, screen, renderSnapshotWithLayout } from 'test-utils';

import WorkPage from './page';

// Test TODO
// Work header nav element is underlined
// h1 is correct
// each panel can be clicked and the expected elments are on the page
// keyboard events work

describe('The Work Page', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<WorkPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.each([['header'], ['work-page'], ['footer']])(
    'contains the visible testid %i',
    (testid) => {
      renderWithLayout(<WorkPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );
});
