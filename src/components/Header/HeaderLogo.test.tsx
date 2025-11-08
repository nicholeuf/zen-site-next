import { render, screen } from 'test-utils';
import HeaderLogo from './HeaderLogo';

describe('The HeaderLogo component', () => {
  test('logo has expected style rules', () => {
    render(<HeaderLogo width="60px" color="blue" activeColor="red" />);

    const logo = screen.getByTestId('header-logo') as HTMLDivElement;

    expect(logo).toBeVisible();
  });

  test('link has expected href and style rules', () => {
    render(<HeaderLogo width="60px" color="blue" activeColor="red" />);

    const link = screen.getByRole('link', {
      name: 'Home',
    }) as HTMLAnchorElement;

    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveStyleRule('text-decoration', 'none', {
      target: ':hover',
    });
  });
});
