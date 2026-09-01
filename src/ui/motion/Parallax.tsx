import {useRef} from 'react';
import type {HTMLAttributes, ReactNode} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'motion/react';
import {SCROLL_OFFSET, SPRING} from '../tokens';
import {useReducedMotion} from '../hooks';

export type ParallaxProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /**
   * Travel factor. Positive = moves slower than scroll (recedes),
   * negative = moves faster (leads). ~0.15–0.4 reads as depth; higher
   * gets gimmicky.
   */
  speed?: number;
  axis?: 'y' | 'x';
  /** Spring-smooth the motion (default) vs. lock it to scroll. */
  smooth?: boolean;
};

/**
 * Scroll parallax for a single element. Wrap decorative layers (glow orbs,
 * screenshots, background art) — not primary reading content, which should
 * not move under the reader. No-ops under reduced-motion.
 */
export function Parallax({
  children,
  speed = 0.25,
  axis = 'y',
  smooth = true,
  style,
  ...rest
}: ParallaxProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.enterExit as never,
  });

  const distance = 120 * speed;
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smoothed = useSpring(raw, SPRING.glide);
  const value = smooth ? smoothed : raw;

  if (reduced) {
    return (
      <div style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{...style, [axis]: value}}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
