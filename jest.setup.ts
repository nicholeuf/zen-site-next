import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';
import { matchers } from '@emotion/jest';

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);
