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
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<WorkPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  test('works as expected', () => {
    // const user = userEvent.setup();

    render(<WorkPage />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Work');

    const portfolioHeading2 = screen.getByRole('heading', { level: 2 });
    expect(portfolioHeading2).toBeVisible();
    expect(portfolioHeading2).toHaveTextContent(
      'The Coding Yogi | Owner, Developer'
    );

    const imperfectTab = screen.getByRole('tab', { name: 'Imperfect Foods' });
    expect(imperfectTab).toBeVisible();

    // TODO https://github.com/nicholeuf/zen-site-next/issues/30
    // await user.click(imperfectTab);

    // const imperfectHeading2 = screen.getByRole('heading', { level: 2 });
    // expect(imperfectHeading2).toBeVisible();
    // expect(imperfectHeading2).toHaveTextContent(
    //   'Portfolio Site | Owner, Developer'
    // );

    // const footer = screen.getByTestId('footer') as HTMLDivElement;
    // expect(footer).toBeVisible();
    // expect(footer).toHaveStyleRule('color', '#E8EAE3');
    // expect(footer).toHaveStyleRule('background-color', '#373833');

    // const nav = screen.getByTestId('footer-nav') as HTMLDivElement;
    // expect(nav).toBeVisible();

    // const madeWithLoveCopy = screen.getByText(/Made with/i);
    // expect(madeWithLoveCopy).toBeVisible();

    // const copyRightCopy = screen.getByText(/Copyright/i);
    // expect(copyRightCopy).toBeVisible();

    // const sourceCopy = screen.getByText(/View Source Code/i);
    // expect(sourceCopy).toBeVisible();
  });
});
