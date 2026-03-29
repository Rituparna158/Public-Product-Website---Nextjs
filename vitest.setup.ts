import { vi } from "vitest";
 
type LinkProps = {
  children: unknown;
};
 
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
}));
 
vi.mock("next/link", () => {
  return {
    default: (props: LinkProps) => props.children,
  };
});