import getServerPath from './getServerPath';
import { headers } from 'test-utils';

describe('getServerPath', () => {
  test('returns path', async () => {
  // set headers for the next/headers mock using Storybook's headers mock
  headers().set('x-next-pathname', '/work');
    const serverPath = await getServerPath();
    expect(serverPath).toBe('/work');
  });
});
