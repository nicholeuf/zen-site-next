import { renderSnapshotWithLayout, resetMatchMedia } from "test-utils";

import ContactPage from "./page";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe("The Contact Page", () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => "/contact");
    resetMatchMedia();
  });

  test("has expected snapshot", async () => {
    const { container } = renderSnapshotWithLayout(<ContactPage />);
    expect(container).toMatchSnapshot();
  });
});
