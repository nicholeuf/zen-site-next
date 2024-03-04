/*
 * @jest-environment jsdom
 */
import { renderSnapshotWithLayout } from 'test-utils';

import Loading from './loading';

describe('The Loading Page', () => {
  test('has expected snapshot', () => {
    const component = renderSnapshotWithLayout(<Loading />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
