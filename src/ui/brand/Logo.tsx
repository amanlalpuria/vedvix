import {motion} from 'motion/react';
import {cn} from '../cn';
import {MARK_GEOMETRY} from '../theme';
import {useReducedMotion} from '../hooks';

export type VedvixMarkProps = {
  /** Width in px; height scales to the 120:128 artwork ratio. */
  size?: number;
  /** Color of the two V-arms. */
  armColor?: string;
  /** Color of the diamond node. */
  nodeColor?: string;
  /** Draw the arms on mount (self-drawing stroke). */
  animated?: boolean;
  className?: string;
  /** If set, the mark is exposed as an image with this label; otherwise it's
   *  decorative (`aria-hidden`). */
  title?: string;
};

/**
 * The Vedvix symbol — two V-arms converging into a precision node.
 * Vector, font-free, theme-able. Geometry matches the official logo system.
 */
export function VedvixMark({
  size = 32,
  armColor = 'currentColor',
  nodeColor = 'var(--color-vx-accent-soft)',
  animated = false,
  className,
  title,
}: VedvixMarkProps) {
  const reduced = useReducedMotion();
  const height = Math.round((size * 128) / 120);
  const shouldDraw = animated && !reduced;

  return (
    <svg
      width={size}
      height={height}
      viewBox={MARK_GEOMETRY.viewBox}
      fill="none"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <motion.polyline
        points={MARK_GEOMETRY.armPoints}
        stroke={armColor}
        strokeWidth={MARK_GEOMETRY.armWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="none"
        initial={shouldDraw ? {pathLength: 0} : false}
        animate={shouldDraw ? {pathLength: 1} : undefined}
        transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
      />
      <motion.polygon
        points={MARK_GEOMETRY.nodePoints}
        fill={nodeColor}
        initial={shouldDraw ? {opacity: 0, scale: 0.4} : false}
        animate={shouldDraw ? {opacity: 1, scale: 1} : undefined}
        transition={{delay: 0.75, duration: 0.35, ease: [0.34, 1.56, 0.64, 1]}}
        style={{transformOrigin: '60px 114px'}}
      />
    </svg>
  );
}

export type VedvixLogoProps = {
  /** Height driver for the symbol; the wordmark scales with it. */
  size?: number;
  armColor?: string;
  nodeColor?: string;
  wordColor?: string;
  animated?: boolean;
  className?: string;
};

/** Horizontal lockup: symbol + `VEDVIX` wordmark (Space Grotesk, tracked). */
export function VedvixLogo({
  size = 26,
  armColor = 'currentColor',
  nodeColor = 'var(--color-vx-accent-soft)',
  wordColor = 'currentColor',
  animated = false,
  className,
}: VedvixLogoProps) {
  return (
    <span className={cn('inline-flex items-center', className)} style={{gap: Math.round(size * 0.34)}}>
      <VedvixMark size={size} armColor={armColor} nodeColor={nodeColor} animated={animated} />
      <span
        className="font-grotesk font-semibold leading-none"
        style={{
          color: wordColor,
          fontSize: Math.round(size * 0.62),
          letterSpacing: '0.13em',
        }}
      >
        VEDVIX
      </span>
    </span>
  );
}
