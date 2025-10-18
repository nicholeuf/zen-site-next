/*
 * @jest-environment jsdom
 */
import { renderWithLayout, screen, renderSnapshotWithLayout } from 'test-utils';
import userEvent from '@testing-library/user-event';

import WorkPage from './page';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('The Work Page', () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => '/work');
  });

  test('has expected snapshot', async () => {
    const { container } = renderSnapshotWithLayout(<WorkPage />);
    expect(container).toMatchSnapshot();
  });

  test.each([['header'], ['work-page'], ['footer']])(
    'contains the visible testid %p',
    (testid) => {
      renderWithLayout(<WorkPage />);
      const component = screen.getByTestId(testid);
      expect(component).toBeVisible();
    }
  );

  test('works as expected', async () => {
    const user = userEvent.setup();

    renderWithLayout(<WorkPage />);

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

    await user.click(imperfectTab);

    const imperfectHeading2 = screen.getByRole('heading', { level: 2 });
    expect(imperfectHeading2).toBeVisible();
    expect(imperfectHeading2).toHaveTextContent(
      'Imperfect Foods | Full-Stack Developer'
    );

    const footer = screen.getByTestId('footer') as HTMLDivElement;
    expect(footer).toBeVisible();
    expect(footer).toHaveStyleRule('color', '#f8faf3');
    expect(footer).toHaveStyleRule('background-color', '#373833');

    const nav = screen.getByTestId('footer-nav') as HTMLDivElement;
    expect(nav).toBeVisible();

    const madeWithLoveCopy = screen.getByText(/Made with/i);
    expect(madeWithLoveCopy).toBeVisible();

    const copyRightCopy = screen.getByText(/Copyright/i);
    expect(copyRightCopy).toBeVisible();

    const sourceCopy = screen.getByText(/View Source Code/i);
    expect(sourceCopy).toBeVisible();
  });
});
