import type {ReactNode} from 'react';
import {cn} from '../cn';

export type EmptyStateProps = {
  /** Icon node (e.g. a `lucide-react` icon at ~22px). */
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Primary action(s) — usually a `<Button>`. */
  action?: ReactNode;
  /** Tighten spacing for use inside smaller panels. */
  compact?: boolean;
  className?: string;
};

/**
 * The "nothing here yet" panel. Neutral, reassuring, always offers a next
 * step when one exists. Use for zero-result lists, fresh accounts, cleared
 * filters — not for errors (use `ErrorState`).
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  compact = false,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-[var(--radius-vx-lg)] border border-dashed border-vx-border text-center',
        'bg-white/[0.015]',
        compact ? 'px-5 py-10' : 'px-6 py-16',
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] text-vx-text-muted">
          {icon}
        </div>
      )}
      <h3 className="font-grotesk text-base font-semibold text-vx-text">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-vx-text-muted">{description}</p>
      )}
      {action && <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{action}</div>}
    </div>
  );
}
