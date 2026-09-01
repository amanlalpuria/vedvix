import type {Transition} from 'motion/react';

/**
 * Motion tokens — a single vocabulary for timing and physics so every
 * animation in the kit feels like it came from the same hand.
 *
 * Guideline: entrances/among-the-fold use `DURATION.base` + `EASE.out`.
 * Anything the pointer or scroll drives should be a spring, not a tween.
 */

type Cubic = [number, number, number, number];

export const DURATION = {
  fast: 0.18,
  base: 0.5,
  slow: 0.8,
  slower: 1.1,
} as const;

export const EASE: Record<'out' | 'inOut' | 'in' | 'emphasized', Cubic> = {
  /** Decelerate — the default for things entering the screen. */
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  in: [0.55, 0, 1, 0.45],
  /** A little overshoot — good for playful accents. */
  emphasized: [0.34, 1.56, 0.64, 1],
};

export const SPRING = {
  /** General-purpose, gentle. */
  soft: {type: 'spring', stiffness: 140, damping: 22, mass: 0.7},
  /** Snappy UI feedback (toggles, taps). */
  snappy: {type: 'spring', stiffness: 320, damping: 30},
  /** Long, floaty travel for parallax and decks. */
  glide: {type: 'spring', stiffness: 55, damping: 18},
} as const satisfies Record<string, Transition>;

/** z-index scale — keep overlays predictable. */
export const Z = {
  base: 0,
  raised: 10,
  sticky: 40,
  overlay: 50,
  modal: 60,
  toast: 70,
  cursor: 10000,
} as const;

/**
 * `useScroll` offsets, named by intent. First value = when the target's
 * named edge meets the viewport's named edge on the way IN.
 */
export const SCROLL_OFFSET = {
  /** 0 when target enters bottom, 1 when it leaves the top. */
  enterExit: ['start end', 'end start'],
  /** 0 when target's top hits viewport bottom, 1 when its top hits center. */
  revealTop: ['start end', 'start center'],
  /** Tight window for word-by-word text reveals. */
  readThrough: ['start 0.85', 'start 0.35'],
} as const;
