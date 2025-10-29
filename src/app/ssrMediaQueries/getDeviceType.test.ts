import getDeviceType from './getDeviceType';

describe('The getDeviceType function', () => {
  test('returns mobile for iphone user agent', async () => {
    // set a mobile user-agent for the headers mock
    (global as any).__setTestHeaders({
      'user-agent':
        'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
    });
    const deviceType = await getDeviceType();
    expect(deviceType).toBe('mobile');
  });

  test('returns desktop for null user agent', async () => {
    (global as any).__setTestHeaders({ 'user-agent': null });
    const deviceType = await getDeviceType();
    expect(deviceType).toBe('desktop');
  });
});
