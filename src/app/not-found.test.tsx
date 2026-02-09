import { renderWithLayout } from "test-utils";
import { describe, expect, test } from "vitest";

import NotFound from "./not-found";

describe("The Not Found (404) Route", () => {
  test("renders the not-found container", () => {
    renderWithLayout(<NotFound />);
    expect(document.getElementById("not-found")).toBeInTheDocument();
    // At this level, just test that the not-found container is rendered.
    // The NotFound component itself is tested in its own story, so we can
    // be confident that if the container is present, the content is as well.
  });
});
