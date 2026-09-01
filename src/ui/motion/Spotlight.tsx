import type {CSSProperties, HTMLAttributes, ReactNode, PointerEvent as ReactPointerEvent} from 'react';
import {motion, useMotionTemplate, useMotionValue} from 'motion/react';
import {cn} from '../cn';
import {useReducedMotion, useIsTouch} from '../hooks';

/* ------------------------------------------------------------------ */
/* GlowOrb — decorative blurred light source. Purely presentational.   */
/* ------------------------------------------------------------------ */

export type GlowOrbProps = {
  color?: string;
  /** Diameter in px. */
  size?: number;
  /** Blur radius in px. */
  blur?: number;
  opacity?: number;
  /** Slow ambient drift (off under reduced-motion). */
  drift?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function GlowOrb({
  color = 'var(--color-vx-accent)',
  size = 460,
  blur = 130,
  opacity = 0.28,
  drift = true,
  className,
  style,
}: GlowOrbProps) {
  const reduced = useReducedMotion();
  const base: CSSProperties = {
    width: size,
    height: size,
    background: color,
    filter: `blur(${blur}px)`,
    opacity,
    borderRadius: '9999px',
    ...style,
  };

  if (reduced || !drift) {
    return (
      <div aria-hidden className={cn('pointer-events-none absolute', className)} style={base} />
    );
  }

  return (
    <motion.div
      aria-hidden
      className={cn('pointer-events-none absolute', className)}
      style={base}
      animate={{x: [0, 24, -12, 0], y: [0, -18, 12, 0], scale: [1, 1.06, 0.97, 1]}}
      transition={{duration: 20, repeat: Infinity, ease: 'easeInOut'}}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Spotlight — pointer-follow highlight over a container.              */
/* ------------------------------------------------------------------ */

export type SpotlightProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Highlight radius in px. */
  radius?: number;
  color?: string;
};

export function Spotlight({
  children,
  radius = 380,
  color = 'rgba(47, 90, 248, 0.18)',
  className,
  ...rest
}: SpotlightProps) {
  const reduced = useReducedMotion();
  const isTouch = useIsTouch();
  const off = reduced || isTouch;

  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mx}px ${my}px, ${color}, transparent 80%)`;

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (off) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <div
      className={cn('group relative', className)}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        mx.set(-9999);
        my.set(-9999);
      }}
      {...rest}
    >
      {!off && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{background}}
        />
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sparkle — the 4-point "neural" star with a soft bloom.              */
/* ------------------------------------------------------------------ */

export function Sparkle({size = 120, className}: {size?: number; className?: string}) {
  const reduced = useReducedMotion();
  return (
    <div
      aria-hidden
      className={cn('relative', className)}
      style={{width: size, height: size}}
    >
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{background: 'radial-gradient(circle, rgba(96,128,250,0.55), transparent 62%)'}}
      />
      <motion.svg
        viewBox="0 0 100 100"
        className="relative h-full w-full"
        animate={reduced ? undefined : {rotate: 360}}
        transition={{duration: 26, repeat: Infinity, ease: 'linear'}}
      >
        <path
          d="M50 3C54 34 66 46 97 50C66 54 54 66 50 97C46 66 34 54 3 50C34 46 46 34 50 3Z"
          fill="#fff"
        />
      </motion.svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Equalizer — tiny animated bars for "live / listening" states.       */
/* ------------------------------------------------------------------ */

export function Equalizer({
  bars = 5,
  playing = true,
  className,
}: {
  bars?: number;
  playing?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const still = reduced || !playing;
  return (
    <div className={cn('flex items-end gap-[3px]', className)} aria-hidden>
      {Array.from({length: bars}).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-vx-accent-soft"
          animate={still ? {height: 5} : {height: [5, 16, 9, 20, 7]}}
          transition={{
            duration: 1.1,
            repeat: still ? 0 : Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 0.11,
          }}
        />
      ))}
    </div>
  );
}
