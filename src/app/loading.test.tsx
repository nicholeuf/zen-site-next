/*
 * @jest-environment jsdom
 */
import { renderSnapshotWithLayout } from 'test-utils';

import Loading from './loading';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('The Loading Page', () => {
  beforeAll(() => {
    mockUsePathname.mockImplementation(() => '/contact');
  });

  test('has expected snapshot', async () => {
    const { container } = renderSnapshotWithLayout(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
