import {useRef} from 'react';
import type {ReactNode} from 'react';
import {motion, useScroll, useSpring, useTransform, type MotionValue} from 'motion/react';
import {cn} from '../cn';
import {SCROLL_OFFSET, SPRING} from '../tokens';
import {useReducedMotion} from '../hooks';

export type GalleryScatterProps = {
  /** Each entry becomes a floating tile. */
  items: ReactNode[];
  className?: string;
  columns?: string;
};

/**
 * A field of tiles that drift at different rates as you scroll and idle-float
 * in place — the Synapse "scattered gallery in dark space" look. Built on a
 * real responsive grid, so layout stays sane at every width.
 *
 * Reduced-motion → a static grid.
 */
export function GalleryScatter({
  items,
  className,
  columns = 'sm:grid-cols-2 lg:grid-cols-3',
}: GalleryScatterProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.enterExit as never,
  });

  if (reduced) {
    return (
      <div className={cn('grid gap-6', columns, className)}>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn('grid gap-6', columns, className)}>
      {items.map((item, i) => (
        <ScatterTile key={i} progress={scrollYProgress} index={i}>
          {item}
        </ScatterTile>
      ))}
    </div>
  );
}

function ScatterTile({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  children: ReactNode;
  key?: string | number;
}) {
  const depth = (index % 3) - 1; // -1, 0, 1 → back, mid, front
  const parallax = useSpring(
    useTransform(progress, [0, 1], [depth * 70, depth * -70]),
    SPRING.glide,
  );
  const floatRange = 4 + Math.abs(depth) * 3;

  return (
    <motion.div style={{y: parallax}}>
      <motion.div
        animate={{y: [0, -floatRange, 0]}}
        transition={{
          duration: 6 + index * 0.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
