/*
 * @jest-environment jsdom
 */
import { render, screen } from 'test-utils';
import Landing from './index';

describe('The Landing component', () => {
  test('has a background image', () => {
    render(<Landing />);

    const backgroundImage = screen.getByTestId('landing-background-image');
    expect(backgroundImage).toBeVisible();
  });

  test('has expected copy', () => {
    render(<Landing />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Hi, I'm Nichole");

    const subheading = screen.getByRole('heading', { level: 2 });
    expect(subheading).toBeVisible();
    expect(subheading).toHaveTextContent('Full-Stack Developer');

    const copy = screen.getByText(/Based in Orlando/i);
    expect(copy).toBeVisible();
  });
});
