import robots from "./robots";

describe("The robots file", () => {
  test("generates as expected", () => {
    const output = robots();
    expect(output).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    });
  });
});
