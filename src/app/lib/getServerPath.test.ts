import getServerPath from './getServerPath';

describe('getServerPath', () => {
  test('returns path', async () => {
    // use the global test helper to set headers for the next/headers mock
    (global as any).__setTestHeaders({ 'x-next-pathname': '/work' });
    const serverPath = await getServerPath();
    expect(serverPath).toBe('/work');
  });
});
