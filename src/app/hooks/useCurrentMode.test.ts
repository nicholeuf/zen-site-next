import { useColorScheme } from "@mui/material/styles";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useCurrentMode } from "./useCurrentMode"; // adjust path

// Mock the entire module
vi.mock("@mui/material/styles", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    // @ts-ignore
    ...actual,
    useColorScheme: vi.fn(),
  };
});

describe("useCurrentMode", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns light mode when mode is light", () => {
    (useColorScheme as any).mockReturnValue({
      mode: "light",
      systemMode: "light",
    });

    const { result } = renderHook(() => useCurrentMode());

    expect(result.current).toBe("light");
  });

  it("returns dark mode when mode is dark", () => {
    (useColorScheme as any).mockReturnValue({
      mode: "dark",
      systemMode: "dark",
    });

    const { result } = renderHook(() => useCurrentMode());

    expect(result.current).toBe("dark");
  });

  it("returns system mode correctly", async () => {
    (useColorScheme as any).mockReturnValue({
      mode: "system",
      systemMode: "dark",
    });

    const { result } = renderHook(() => useCurrentMode());

    await waitFor(() => {
      expect(result.current).toBe("dark");
    });
  });

  it("defaults to light when values are undefined", () => {
    (useColorScheme as any).mockReturnValue({
      mode: undefined,
      systemMode: undefined,
    });

    const { result } = renderHook(() => useCurrentMode());

    expect(result.current).toBe("light");
  });
});
