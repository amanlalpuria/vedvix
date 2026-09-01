import {useEffect, useState} from 'react';
import {useReducedMotion as useMotionReducedMotion} from 'motion/react';

/**
 * `true` when the user asked the OS to minimise motion. Every animated
 * component in the kit checks this and falls back to a static, fully
 * legible state. Wrapped so callers get a plain boolean (never `null`).
 */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false;
}

/**
 * Subscribe to a media query. SSR-safe: returns `defaultState` until mounted.
 */
export function useMediaQuery(query: string, defaultState = false): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return defaultState;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** Below the `md` breakpoint (Tailwind default: 768px). */
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');

/** Coarse pointer / no real hover — disable pointer-driven effects. */
export const useIsTouch = () => useMediaQuery('(hover: none), (pointer: coarse)');

/** `true` after first client render — guards portals / measurements. */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
