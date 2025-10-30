import { vi } from 'vitest';

const mockGetPlaceholderImage = vi.fn();
vi.mock('./getPlaceholderImage', () => ({ default: mockGetPlaceholderImage }));

export default mockGetPlaceholderImage;
