/*
 * @jest-environment jsdom
 */
import { render, screen } from 'test-utils';
import Header from './index';
import constants from '../../app/styles/constants';

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
    expect(header).toHaveStyleRule('background-color', constants.colors.cream);

    const logo = screen.getByTestId('header-logo') as HTMLDivElement;
    expect(logo).toBeVisible();

    const nav = screen.getByTestId('header-nav') as HTMLDivElement;
    expect(nav).toBeVisible();
  });
});
