import { vi } from 'vitest';

// All static import statements in ES modules are hoisted to the top of the file,
// so any code that is defined before the imports will actually be executed after
// imports are evaluated.
const headerMocks = vi.hoisted(() => ({
  get: vi.fn(),
  has: vi.fn(),
  set: vi.fn(),
}));

vi.mock('next/headers', async () => ({
  headers() {
    return headerMocks;
  },
}));

export default headerMocks;
