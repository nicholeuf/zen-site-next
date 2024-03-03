import getWidthByDeviceType from './getWidthByDeviceType';

describe('The getWidthByDeviceType function', () => {
  test('returns 0px for mobile', () => {
    const width = getWidthByDeviceType('mobile');
    expect(width).toBe('0px');
  });

  test('returns 768px for tablet', () => {
    const width = getWidthByDeviceType('tablet');
    expect(width).toBe('768px');
  });

  test('returns 1024px for desktop', () => {
    const width = getWidthByDeviceType('desktop');
    expect(width).toBe('1024px');
  });
});
