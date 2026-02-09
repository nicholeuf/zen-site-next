import { renderWithLayout } from "test-utils";
import { describe, expect, test } from "vitest";

import NotFound from "./not-found";

describe("The Not Found (404) Route", () => {
  test("renders the not-found container", () => {
    renderWithLayout(<NotFound />);

    expect(document.getElementById("not-found")).toBeInTheDocument();
  });
});
