/**
 * Brand palette in JS form — mirrors the `--color-vx-*` custom properties
 * declared in `src/index.css`. Prefer the Tailwind classes (`bg-vx-bg`,
 * `text-vx-accent`, …) in markup; use these hexes only where a raw string
 * is required (canvas, inline SVG gradients, motion `style` colors, charts).
 *
 * Source of truth: the official Vedvix logo system
 * (`D:/Projects/Design Vedvix Logo`).
 */
export const BRAND = {
  bg: '#060B1A',
  bgRaised: '#0B1327',
  ink: '#0D1520',
  accent: '#2F5AF8',
  accentSoft: '#6080FA',
  accentContrast: '#FFFFFF',
  text: '#EEF1FA',
  textMuted: '#9AA3C4',
  textSubtle: '#616C92',
  success: '#33D69F',
  warning: '#F5B544',
  danger: '#FB5E6B',
} as const;

/** CSS var references — safe to hand to `style={{ color }}` etc. */
export const VAR = {
  bg: 'var(--color-vx-bg)',
  bgRaised: 'var(--color-vx-bg-raised)',
  accent: 'var(--color-vx-accent)',
  accentSoft: 'var(--color-vx-accent-soft)',
  text: 'var(--color-vx-text)',
  textMuted: 'var(--color-vx-text-muted)',
  border: 'var(--color-vx-border)',
  font: 'var(--font-grotesk)',
} as const;

/** Geometry of the Vedvix mark, shared by `<VedvixMark>` and exports. */
export const MARK_GEOMETRY = {
  viewBox: '0 0 120 128',
  armPoints: '16,16 60,92 104,16',
  armWidth: 18,
  nodePoints: '60,106 70,114 60,122 50,114',
} as const;
