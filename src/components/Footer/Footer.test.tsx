/*
 * @jest-environment jsdom
 */
import { render, screen } from 'test-utils';
import Footer from './index';

describe('The Footer component', () => {
  test('has expected style rules and contains a nav and copy', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer') as HTMLDivElement;
    expect(footer).toBeVisible();
    expect(footer).toHaveStyleRule('color', '#E8EAE3');
    expect(footer).toHaveStyleRule('background-color', '#373833');

    const nav = screen.getByTestId('footer-nav') as HTMLDivElement;
    expect(nav).toBeVisible();

    const copy = screen.getByTestId('footer-copy') as HTMLDivElement;
    expect(copy).toBeVisible();
    expect(copy).toHaveStyleRule('text-align', 'center');

    const madeWithLoveCopy = screen.getByText(/Made with/i);
    expect(madeWithLoveCopy).toBeVisible();

    const copyRightCopy = screen.getByText(/Copyright/i);
    expect(copyRightCopy).toBeVisible();
  });
});
