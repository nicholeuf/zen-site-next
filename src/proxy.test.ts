import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import proxy from './proxy';

describe('Proxy', () => {
  test('returns expected in the x-next-pathname header', async () => {
    const req = new NextRequest('http://localhost/work');
    const res = await proxy(req, {} as NextFetchEvent);

    // for some reason the header is appended with x-middleware-request-
    expect(res?.headers.get('x-middleware-request-x-next-pathname')).toEqual(
      '/work'
    );
  });
});
