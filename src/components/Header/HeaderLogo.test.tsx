/*
 * @jest-environment jsdom
 */

import { render, screen } from 'test-utils';
import HeaderLogo from './HeaderLogo';

describe('The HeaderLogo component', () => {
  test('logo has expected style rules', () => {
    render(<HeaderLogo width="60px" color="blue" activeColor="red" />);

    const logo = screen.getByTestId('header-logo') as HTMLDivElement;

    expect(logo).toBeVisible();
    expect(logo).toHaveStyleRule('width', '60px');
    expect(logo).toHaveStyleRule('cursor', 'pointer', { target: ':hover' });
  });

  test('link has expected href and style rules', () => {
    render(<HeaderLogo width="60px" color="blue" activeColor="red" />);

    const link = screen.getByRole('link', {
      name: 'Home',
    }) as HTMLAnchorElement;

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveStyleRule('color', 'blue');
    expect(link).toHaveStyleRule('color', 'red', { target: ':hover' });
    expect(link).toHaveStyleRule('text-decoration', 'none', {
      target: ':hover',
    });
  });
});
