import {useCallback, useRef, useState} from 'react';
import type {HTMLAttributes, ReactNode} from 'react';
import {motion, useAnimationFrame, useMotionValue} from 'motion/react';
import {cn} from '../cn';
import {useReducedMotion} from '../hooks';

export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Pixels per second. */
  speed?: number;
  direction?: 'left' | 'right';
  /** Gap between the repeated track copies, in px. */
  gap?: number;
  pauseOnHover?: boolean;
};

/**
 * Seamless infinite marquee driven by `useAnimationFrame` (deterministic,
 * pausable — unlike a CSS keyframe). Renders one visible track plus one
 * `aria-hidden` copy for the loop. Pauses on hover and on keyboard focus
 * within, so users can read/reach links. Reduced-motion renders a static,
 * horizontally-scrollable row.
 */
export function Marquee({
  children,
  speed = 60,
  direction = 'left',
  gap = 56,
  pauseOnHover = true,
  className,
  ...rest
}: MarqueeProps) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (reduced || paused) return;
    const width = trackRef.current?.offsetWidth ?? 0;
    if (!width) return;
    const step = (speed * delta) / 1000;
    let next = x.get() + (direction === 'left' ? -step : step);
    if (next <= -width) next += width;
    if (next >= 0) next -= width;
    x.set(next);
  });

  const pause = useCallback(() => pauseOnHover && setPaused(true), [pauseOnHover]);
  const resume = useCallback(() => pauseOnHover && setPaused(false), [pauseOnHover]);

  if (reduced) {
    return (
      <div className={cn('no-scrollbar overflow-x-auto', className)} {...rest}>
        <div className="flex w-max" style={{gap}}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('vx-mask-fade-x relative flex overflow-hidden', className)}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      {...rest}
    >
      <motion.div style={{x}} className="flex w-max shrink-0">
        <div ref={trackRef} className="flex shrink-0 items-center" style={{gap, paddingRight: gap}}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{gap, paddingRight: gap}} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
