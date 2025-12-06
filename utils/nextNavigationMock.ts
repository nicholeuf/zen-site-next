import { vi } from "vitest";

// All static import statements in ES modules are hoisted to the top of the file,
// so any code that is defined before the imports will actually be executed after
// imports are evaluated.
const navigationMocks = vi.hoisted(() => ({
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => new URLSearchParams()),
  useRouter: vi.fn(() => ({
    replace: vi.fn(),
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  })),
  useParams: vi.fn(() => ({})),
}));

vi.mock("next/navigation", async () => navigationMocks);

export default navigationMocks;
