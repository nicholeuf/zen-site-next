/*
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import SimpleIcon from './SimpleIcon';

describe('The SimpleIcon component', () => {
  test('alt, width, and height contain correct default value', () => {
    render(<SimpleIcon slug="github" />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toBe('');
    expect(testImage.src).toMatch(
      /^(.*)url=https(.*)cdn.simpleicons.org(.*)github(.*)$/
    );
    expect(testImage.width).toBe(24);
    expect(testImage.height).toBe(24);
  });

  test('src contains color, width & height when provided', () => {
    render(<SimpleIcon slug="google" color="4285F4" width="16" height="16" />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toMatch(
      /^(.*)url=https(.*)cdn.simpleicons.org(.*)google(.*)4285F4(.*)$/
    );
    expect(testImage.width).toBe(16);
    expect(testImage.height).toBe(16);
  });

  test('src contains color and darkModeColor when provided', () => {
    render(<SimpleIcon slug="apple" color="black" darkModeColor="white" />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.src).toMatch(
      /^(.*)url=https(.*)cdn.simpleicons.org(.*)apple(.*)black(.*)white(.*)$/
    );
  });
});
