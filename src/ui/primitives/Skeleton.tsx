import type {CSSProperties, HTMLAttributes} from 'react';
import {cn} from '../cn';

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  /** Any CSS length. Defaults to the `--radius-vx` scale via the class. */
  radius?: string | number;
  circle?: boolean;
};

/**
 * Content placeholder with a shimmer sweep (`.vx-skeleton`, defined in
 * `index.css`; the sweep is removed under reduced-motion). Always give it an
 * explicit height — via `className` (`h-4`) or `style`.
 */
export function Skeleton({className, radius, circle, style, ...rest}: SkeletonProps) {
  const resolved: CSSProperties = {
    borderRadius: circle ? '9999px' : radius ?? undefined,
    ...style,
  };
  return (
    <div
      aria-hidden
      className={cn('vx-skeleton', !radius && !circle && 'rounded-[10px]', className)}
      style={resolved}
      {...rest}
    />
  );
}

/** Multi-line text placeholder; the last line is shortened. */
export function SkeletonText({
  lines = 3,
  className,
  lastLineWidth = '60%',
}: {
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}) {
  return (
    <div className={cn('space-y-2.5', className)}>
      {Array.from({length: lines}).map((_, i) => (
        <Skeleton
          key={i}
          className="h-3.5"
          style={{width: i === lines - 1 && lines > 1 ? lastLineWidth : '100%'}}
        />
      ))}
    </div>
  );
}
