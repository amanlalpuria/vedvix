import type {HTMLAttributes, ReactNode} from 'react';
import {motion} from 'motion/react';
import {DURATION, EASE} from '../tokens';
import {useReducedMotion} from '../hooks';

type GroupProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Seconds between each child. */
  gap?: number;
  /** Seconds before the first child. */
  delay?: number;
  amount?: number;
  once?: boolean;
};

/**
 * Orchestrates a cascade. Put `<StaggerItem>`s (or your own `variants`
 * children keyed to `hidden` / `show`) inside. Reduced-motion renders a
 * plain container with everything visible.
 */
export function Stagger({
  children,
  gap = 0.08,
  delay = 0,
  amount = 0.3,
  once = true,
  ...rest
}: GroupProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div {...rest}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once, amount}}
      variants={{
        hidden: {},
        show: {transition: {staggerChildren: gap, delayChildren: delay}},
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  y?: number;
};

export function StaggerItem({children, y = 20, ...rest}: ItemProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div {...rest}>{children}</div>;

  return (
    <motion.div
      variants={{
        hidden: {opacity: 0, y, filter: 'blur(6px)'},
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {duration: DURATION.base, ease: EASE.out},
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
