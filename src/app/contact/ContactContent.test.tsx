import { render, screen } from "test-utils";
import { CONTACT_EMAIL, getEmailHref, LINKEDIN_URL } from "@/app/lib/constants";
import ContactContent from "./ContactContent";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe("The Contact Page Component", () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => "/contact");
  });

  test("has expected content when chat enabled", () => {
    render(<ContactContent chatEnabled />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Contact"
    );
    expect(screen.getByTestId("contact-copy")).toHaveTextContent(
      "Email is the best way to reach me. You can also connect on LinkedIn, or send a message in the chat and I’ll see it on Slack. I look forward to hearing from you!"
    );
    expect(
      screen.getByRole("link", {
        name: `Send email to Nichole at ${CONTACT_EMAIL}`,
      })
    ).toHaveAttribute("href", getEmailHref());
    expect(
      screen.getByRole("link", {
        name: /connect on linkedin/i,
      })
    ).toHaveAttribute("href", LINKEDIN_URL);
  });

  test("has expected content when chat is not enabled", () => {
    render(<ContactContent chatEnabled={false} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Contact"
    );
    expect(screen.getByTestId("contact-copy")).toHaveTextContent(
      "Email is the best way to reach me. You can also connect on LinkedIn. I look forward to hearing from you!"
    );
    expect(
      screen.getByRole("link", {
        name: /send email to nichole at/i,
      })
    ).toHaveAttribute("href", getEmailHref());
    expect(
      screen.getByRole("link", {
        name: /connect on linkedin/i,
      })
    ).toHaveAttribute("href", LINKEDIN_URL);
  });
});
