/*
 * @jest-environment jsdom
 */
import { renderWithLayout, screen, renderSnapshotWithLayout } from 'test-utils';

import WorkPage from './page';

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
