import getServerPath from './getServerPath';

const mockHeaders = jest.fn();

jest.mock('next/headers', () => ({
  headers() {
    return mockHeaders();
  },
}));

describe('getServerPath', () => {
  test('returns path', async () => {
    mockHeaders.mockImplementation(() => ({
      get: () => '/work',
    }));
    const serverPath = await getServerPath();
    expect(serverPath).toBe('/work');
  });
});
