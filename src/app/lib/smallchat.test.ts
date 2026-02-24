import { isChatEnabled } from "./smallchat";

describe("SmallChat Enabled", () => {
  it("should be enabled when value is 'true'", () => {
    expect(isChatEnabled("true")).toBe(true);
  });

  it("should be disabled when value is 'false'", () => {
    expect(isChatEnabled("false")).toBe(false);
  });

  it("should be disabled when value is undefined", () => {
    expect(isChatEnabled(undefined)).toBe(false);
  });

  it("should be disabled when value is an empty string", () => {
    expect(isChatEnabled("")).toBe(false);
  });

  it("should be enabled when value is 'TRUE' (case-insensitive)", () => {
    expect(isChatEnabled("TRUE")).toBe(true);
  });
});
