import { vi } from 'vitest';
import '@testing-library/jest-dom';

type LinkProps = {
  children: unknown;
};

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
}));

vi.mock('next/link', () => {
  return {
    default: (props: LinkProps) => props.children,
  };
});
