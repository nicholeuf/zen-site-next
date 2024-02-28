/*
 * @jest-environment jsdom
 */
import { renderSnapshot } from 'test-utils';

import ContactPage from './ContactPage';

describe('The Contact Page Component', () => {
  test('has expected snapshot when chat enabled', () => {
    const component = renderSnapshot(<ContactPage chatEnabled />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('has expected snapshot when chat is not enabled', () => {
    const component = renderSnapshot(<ContactPage chatEnabled={false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
