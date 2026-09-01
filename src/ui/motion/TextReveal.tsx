import {useRef} from 'react';
import type {ReactNode} from 'react';
import {motion, useScroll, useTransform, type MotionValue} from 'motion/react';
import {cn} from '../cn';
import {SCROLL_OFFSET} from '../tokens';
import {useReducedMotion} from '../hooks';

type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';

export type TextRevealProps = {
  /** Plain text. It is split on whitespace; each word brightens in turn. */
  children: string;
  as?: Tag;
  className?: string;
  /** Dim level for not-yet-read words (0–1). */
  from?: number;
  /** Words rendered in the accent color. */
  highlight?: string[];
};

/**
 * Scroll-linked "read-through" reveal — words go from dim to bright as the
 * block passes through the viewport (the Synapse hero-paragraph effect).
 *
 * Accessibility: the full sentence is exposed via `aria-label`; the animated
 * word spans are `aria-hidden` so screen readers get one clean string.
 * Reduced-motion renders the text at full contrast, no scroll dependency.
 *
 * Keep inputs to a sentence or two — one `useTransform` runs per word.
 */
export function TextReveal({
  children,
  as = 'p',
  className,
  from = 0.12,
  highlight = [],
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: SCROLL_OFFSET.readThrough as never,
  });

  const text = (children ?? '').trim();
  const Tag = as;
  const highlightSet = new Set(highlight.map((w) => w.toLowerCase()));

  if (!text) return null;

  if (reduced) {
    return (
      <Tag className={className}>
        {text.split(/\s+/).map((word, i) => (
          <span
            key={i}
            className={highlightSet.has(word.toLowerCase()) ? 'text-vx-accent-soft' : undefined}
          >
            {word}
            {i < text.split(/\s+/).length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(/\s+/);

  return (
    <Tag
      ref={ref as never}
      aria-label={text}
      className={cn('flex flex-wrap gap-x-[0.28em] gap-y-1', className)}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            from={from}
            accent={highlightSet.has(word.toLowerCase())}
          >
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
  from,
  accent,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  from: number;
  accent?: boolean;
  key?: string | number;
}) {
  const opacity = useTransform(progress, range, [from, 1]);
  return (
    <motion.span
      aria-hidden
      style={{opacity}}
      className={cn('inline-block', accent && 'text-vx-accent-soft')}
    >
      {children}
    </motion.span>
  );
}
