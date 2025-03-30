import getDeviceType from './getDeviceType';

const mockHeaders = jest.fn();

jest.mock('next/headers', () => ({
  headers() {
    return mockHeaders();
  },
}));

describe('The getDeviceType function', () => {
  test('returns mobile for iphone user agent', async () => {
    mockHeaders.mockImplementation(() => ({
      get: () =>
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
    }));
    const deviceType = await getDeviceType();
    expect(deviceType).toBe('mobile');
  });

  test('returns desktop for null user agent', async () => {
    mockHeaders.mockImplementation(() => ({
      get: () => null,
    }));
    const deviceType = await getDeviceType();
    expect(deviceType).toBe('desktop');
  });
});
