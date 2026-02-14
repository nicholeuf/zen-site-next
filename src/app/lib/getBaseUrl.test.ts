import getBaseUrl from "./getBaseUrl";

describe("getBaseUrl", () => {
  test("uses VERCEL_PROJECT_PRODUCTION_URL for production target", () => {
    const baseUrl = getBaseUrl({
      vercelTargetEnv: "production",
      vercelProjectProductionUrl: "www.example.com",
      vercelUrl: "preview.vercel.app",
      nextPublicSiteUrl: "https://fallback.example.com",
    });

    expect(baseUrl).toBe("https://www.example.com");
  });

  test("uses VERCEL_URL for preview target", () => {
    const baseUrl = getBaseUrl({
      vercelTargetEnv: "preview",
      vercelProjectProductionUrl: "www.example.com",
      vercelUrl: "preview.vercel.app",
      nextPublicSiteUrl: "https://fallback.example.com",
    });

    expect(baseUrl).toBe("https://preview.vercel.app");
  });

  test("falls back to NEXT_PUBLIC_SITE_URL when target env is not production/preview", () => {
    const baseUrl = getBaseUrl({
      vercelTargetEnv: "development",
      nextPublicSiteUrl: "https://fallback.example.com",
    });

    expect(baseUrl).toBe("https://fallback.example.com");
  });

  test("keeps protocol if present", () => {
    const baseUrl = getBaseUrl({
      vercelTargetEnv: "production",
      vercelProjectProductionUrl: "https://www.example.com",
    });

    expect(baseUrl).toBe("https://www.example.com");
  });

  test("defaults to localhost when no values provided", () => {
    const baseUrl = getBaseUrl();

    expect(baseUrl).toBe(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    );
  });
});
