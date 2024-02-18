/*
 * @jest-environment jsdom
 */
import { render, screen } from 'test-utils';
import Header from './index';

describe('The Header component', () => {
  test(' has expected style rules and contains a logo and nav', () => {
    render(<Header />);

    const header = screen.getByTestId('header') as HTMLDivElement;
    expect(header).toBeVisible();
    expect(header).toHaveStyleRule('position', 'fixed');
    expect(header).toHaveStyleRule('border', '8px solid');
    expect(header).toHaveStyleRule('border-color', '#373833');
    expect(header).toHaveStyleRule('background-color', '#E8EAE3');

    const logo = screen.getByTestId('header-logo') as HTMLDivElement;
    expect(logo).toBeVisible();

    const nav = screen.getByTestId('header-nav') as HTMLDivElement;
    expect(nav).toBeVisible();
  });
});
