import { vi } from 'vitest';

import headerMocks from 'utils/nextHeaderMock';
import getServerPath from './getServerPath';

describe('getServerPath', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('returns path', async () => {
    // mock next/headers response to return /work
    headerMocks.get.mockReturnValue('/work');
    const serverPath = await getServerPath();
    expect(serverPath).toBe('/work');
  });
});
