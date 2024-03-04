/*
 * @jest-environment jsdom
 */
import { render, screen } from 'test-utils';

import ContactPage from './ContactPage';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('The Contact Page Component', () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => '/contact');
  });

  test('has expected content when chat enabled', () => {
    render(<ContactPage chatEnabled />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Contact'
    );
    expect(screen.getByTestId('contact-copy')).toHaveTextContent(
      'Please connect with me on LinkedIn or send a message in chat. I look forward to hearing from you!'
    );
  });

  test('has expected content when chat is not enabled', () => {
    render(<ContactPage chatEnabled={false} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Contact'
    );
    expect(screen.getByTestId('contact-copy')).toHaveTextContent(
      'Please connect with me on LinkedIn. I look forward to hearing from you!'
    );
  });
});
