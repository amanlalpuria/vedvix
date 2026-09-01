import type {HTMLAttributes, ReactNode} from 'react';
import {cn} from '../cn';

type BadgeVariant = 'brand' | 'neutral' | 'success' | 'warning' | 'danger' | 'outline';
type BadgeSize = 'sm' | 'md';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Leading status dot. */
  dot?: boolean;
  children: ReactNode;
};

const variants: Record<BadgeVariant, string> = {
  brand: 'bg-vx-accent/15 text-vx-accent-soft ring-1 ring-inset ring-vx-accent/30',
  neutral: 'bg-white/[0.06] text-vx-text-muted ring-1 ring-inset ring-vx-border',
  success: 'bg-vx-success/12 text-vx-success ring-1 ring-inset ring-vx-success/30',
  warning: 'bg-vx-warning/12 text-vx-warning ring-1 ring-inset ring-vx-warning/30',
  danger: 'bg-vx-danger/12 text-vx-danger ring-1 ring-inset ring-vx-danger/30',
  outline: 'text-vx-text-muted ring-1 ring-inset ring-vx-border',
};

const sizes: Record<BadgeSize, string> = {
  sm: 'h-5 px-2 text-[0.6875rem]',
  md: 'h-6 px-2.5 text-xs',
};

const dotColor: Record<BadgeVariant, string> = {
  brand: 'bg-vx-accent-soft',
  neutral: 'bg-vx-text-subtle',
  success: 'bg-vx-success',
  warning: 'bg-vx-warning',
  danger: 'bg-vx-danger',
  outline: 'bg-vx-text-subtle',
};

/** Compact status / category label. */
export function Badge({variant = 'neutral', size = 'md', dot, className, children, ...rest}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide whitespace-nowrap',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', dotColor[variant])} aria-hidden />}
      {children}
    </span>
  );
}
