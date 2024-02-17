/*
 * @jest-environment jsdom
 */
import { render, screen, renderSnapshotWithLayout } from 'test-utils';
import HomePage from './page';

describe('The Home Page component', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<HomePage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the visible landing page ', () => {
    render(<HomePage />);

    const landingComponent = screen.getByTestId('landing');
    expect(landingComponent).toBeVisible();
  });
});
