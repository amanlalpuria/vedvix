import {Children, useRef} from 'react';
import type {ReactNode} from 'react';
import {motion, useScroll, useSpring, useTransform, type MotionValue} from 'motion/react';
import {cn} from '../cn';
import {SCROLL_OFFSET, SPRING} from '../tokens';
import {useReducedMotion} from '../hooks';

export type CardDeckProps = {
  children: ReactNode;
  className?: string;
  /** Tailwind grid-cols classes for the resting layout. */
  columns?: string;
};

/**
 * A grid of cards that fan in with perspective as the block scrolls into
 * view — alternating cards swing from opposite sides and settle flat
 * (the Synapse "angled deck" moment).
 *
 * Reduced-motion → a plain responsive grid, no 3D. Card content stays fully
 * interactive throughout.
 */
export function CardDeck({
  children,
  className,
  columns = 'sm:grid-cols-2 lg:grid-cols-3',
}: CardDeckProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.enterExit as never,
  });
  const items = Children.toArray(children);

  if (reduced) {
    return <div className={cn('grid gap-6', columns, className)}>{items}</div>;
  }

  return (
    <div ref={ref} className={cn('[perspective:1400px]', className)}>
      <div className={cn('grid gap-6 [transform-style:preserve-3d]', columns)}>
        {items.map((child, i) => (
          <DeckCard key={i} progress={scrollYProgress} index={i}>
            {child}
          </DeckCard>
        ))}
      </div>
    </div>
  );
}

function DeckCard({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
  key?: string | number;
}) {
  const dir = index % 2 === 0 ? -1 : 1;
  // Settle over the first ~45% of the scroll window.
  const rotateY = useSpring(useTransform(progress, [0, 0.45], [dir * 16, 0], {clamp: true}), SPRING.glide);
  const y = useTransform(progress, [0, 0.45], [70 + index * 8, 0], {clamp: true});
  const opacity = useTransform(progress, [0.03, 0.32], [0, 1], {clamp: true});

  return (
    <motion.div style={{rotateY, y, opacity}} className="[transform-style:preserve-3d]">
      {children}
    </motion.div>
  );
}
