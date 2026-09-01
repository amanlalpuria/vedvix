import type {ElementType, HTMLAttributes, ReactNode} from 'react';
import {motion} from 'motion/react';
import {DURATION, EASE} from '../tokens';
import {useReducedMotion} from '../hooks';

export type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Semantic tag to render (`div`, `section`, `li`, `h2`, …). */
  as?: ElementType;
  /** Start offset in px; the element slides up from here. */
  y?: number;
  /** Adds a short blur-in for a softer, more "expensive" feel. */
  blur?: boolean;
  /** Seconds to wait before animating (stagger by hand). */
  delay?: number;
  duration?: number;
  /** Fraction of the element that must be visible to trigger. */
  amount?: number;
  /** Animate only the first time it enters (default) or every time. */
  once?: boolean;
};

/**
 * Scroll-triggered entrance. The workhorse of the kit — wrap any block that
 * should fade + rise into view. Respects reduced-motion (renders immediately,
 * no transform). Content is always in the DOM, so it degrades safely if the
 * IntersectionObserver never fires.
 */
export function Reveal({
  children,
  as = 'div',
  y = 24,
  blur = true,
  delay = 0,
  duration = DURATION.base,
  amount = 0.3,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Tag = as as ElementType;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = (motion as never as Record<string, ElementType>)[as as string] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)'}}
      whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={{once, amount}}
      transition={{duration, ease: EASE.out, delay}}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
