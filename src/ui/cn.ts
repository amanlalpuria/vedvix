/**
 * cn — tiny className composer.
 *
 * Accepts strings, numbers, arrays and `{ "class": boolean }` maps (clsx-style),
 * flattens them, and drops exact duplicate tokens keeping the *last* occurrence's
 * position. It intentionally does NOT resolve Tailwind conflicts (e.g. `p-2 p-4`);
 * the components in this kit keep base classes minimal and always append the
 * caller's `className` last, so conflicts are rare. If your app needs full
 * conflict resolution, swap this for `clsx` + `tailwind-merge`:
 *
 *   import { twMerge } from "tailwind-merge";
 *   export const cn = (...a: ClassValue[]) => twMerge(clsx(a));
 */
export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const parts: string[] = [];

  const walk = (value: ClassValue): void => {
    if (!value && value !== 0) return;
    if (typeof value === 'string' || typeof value === 'number') {
      parts.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (typeof value === 'object') {
      for (const key in value) {
        if (value[key]) parts.push(key);
      }
    }
  };

  inputs.forEach(walk);

  const tokens = parts.join(' ').split(/\s+/).filter(Boolean);
  const seen = new Set<string>();
  const out: string[] = [];
  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (seen.has(token)) continue;
    seen.add(token);
    out.unshift(token);
  }
  return out.join(' ');
}
