import type {HTMLAttributes, ReactNode} from 'react';
import {cn} from '../cn';
import {Reveal} from '../motion/Reveal';

export type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Anchor id for in-page nav. */
  id?: string;
  /** Small tracked label above the title. */
  eyebrow?: ReactNode;
  title?: ReactNode;
  /** Supporting sentence under the title. */
  lede?: ReactNode;
  /** Constrain content to the 80rem reading column (default true). */
  container?: boolean;
  /** Header alignment. */
  align?: 'left' | 'center';
  children: ReactNode;
};

/**
 * Page section scaffold: consistent vertical rhythm, an animated header
 * (eyebrow / title / lede), and the shared max-width container. Everything
 * below the header is yours.
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  container = true,
  align = 'left',
  className,
  children,
  ...rest
}: SectionProps) {
  const hasHeader = eyebrow || title || lede;
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 px-6 py-20 sm:py-28', className)}
      {...rest}
    >
      <div className={cn(container && 'mx-auto max-w-7xl')}>
        {hasHeader && (
          <Reveal
            className={cn(
              'mb-12 flex max-w-2xl flex-col gap-4 sm:mb-16',
              align === 'center' && 'mx-auto items-center text-center',
            )}
          >
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-vx-accent-soft">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-grotesk text-3xl font-bold leading-[1.08] tracking-tight text-vx-text sm:text-5xl">
                {title}
              </h2>
            )}
            {lede && (
              <p className="text-base leading-relaxed text-vx-text-muted sm:text-lg">{lede}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
