/*
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Footer from './index';

describe('The Footer component', () => {
  test('has expected style rules and contains a nav and copy', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer') as HTMLDivElement;
    expect(footer).toBeVisible();
    expect(footer).toHaveStyleRule('color', '#E8EAE3');
    expect(footer).toHaveStyleRule('background-color', '#373833');

    const nav = screen.getByRole('navigation', {
      name: 'External Navigation',
    }) as HTMLDivElement;
    expect(nav).toBeVisible();

    const madeWithLoveCopy = screen.getByText(/Made with/i);
    expect(madeWithLoveCopy).toBeVisible();

    const copyRightCopy = screen.getByText(/Copyright/i);
    expect(copyRightCopy).toBeVisible();

    const sourceCopy = screen.getByText(/View Source Code/i);
    expect(sourceCopy).toBeVisible();
  });

  test('interacts with credits modal as expected', async () => {
    render(<Footer />);

    const viewCreditsButton = screen.getByRole('button', {
      name: /view credits/i,
    });

    fireEvent.click(viewCreditsButton);
    const closeButton = screen.getByRole('button', {
      name: /close/i,
    });
    await waitFor(() => expect(closeButton).toHaveFocus());

    const modal = screen.getByTestId('credits-modal');
    expect(modal).toBeVisible();

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Credits');

    fireEvent.click(closeButton);
    expect(modal).not.toBeVisible();
  });
});
