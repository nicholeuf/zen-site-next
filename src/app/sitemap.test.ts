import sitemap from './sitemap';

describe('The sitemap file', () => {
  test('generates as expected', () => {
    const output = sitemap();
    expect(output).toMatchObject([
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
        lastModified: expect.any(Date),
        changeFrequency: 'always',
        priority: expect.any(Number),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
        lastModified: expect.any(Date),
        changeFrequency: 'always',
        priority: expect.any(Number),
      },

      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/work`,
        lastModified: expect.any(Date),
        changeFrequency: 'always',
        priority: expect.any(Number),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
        lastModified: expect.any(Date),
        changeFrequency: 'always',
        priority: expect.any(Number),
      },
    ]);
  });
});
