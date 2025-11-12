import { alpha } from '@mui/material/styles';
import { render, screen } from 'test-utils';
import constants from '../../app/styles/constants';
import Header from './index';

describe('The Header component', () => {
  test(' has expected style rules and contains a logo and nav', () => {
    render(<Header />);

    const header = screen.getByTestId('header') as HTMLDivElement;
    expect(header).toBeVisible();
    expect(header).toHaveStyleRule('position', 'fixed');
    expect(header).toHaveStyleRule(
      'border-bottom',
      `3px solid ${constants.colors.carob}`
    );
    expect(header).toHaveStyleRule(
      'background-color',
      alpha(constants.colors.cream, 0.85)
    );

    const logo = screen.getByTestId('header-logo') as HTMLDivElement;
    expect(logo).toBeVisible();

    const nav = screen.getByTestId('header-nav') as HTMLDivElement;
    expect(nav).toBeVisible();
  });
});
