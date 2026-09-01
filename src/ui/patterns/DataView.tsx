import type {ReactNode} from 'react';
import {cn} from '../cn';
import {SkeletonText} from '../primitives/Skeleton';
import {EmptyState} from './EmptyState';
import {ErrorState} from './ErrorState';

export type DataViewProps<T> = {
  /** The resolved data. `null` / `undefined` counts as empty. */
  data: T | null | undefined;
  isLoading?: boolean;
  /** An Error, a message string, or falsy. */
  error?: unknown;
  /** Retry handler, forwarded to the error state. */
  onRetry?: () => void;
  /** Override the empty check (default: null/undefined or empty array). */
  isEmpty?: (data: T) => boolean;
  /** Custom slots — sensible defaults are provided. */
  loadingFallback?: ReactNode;
  emptyFallback?: ReactNode;
  errorFallback?: ReactNode;
  className?: string;
  /** Render-prop for the happy path. */
  children: (data: T) => ReactNode;
};

function toMessage(error: unknown): string {
  if (!error) return '';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return 'Unexpected error';
}

/**
 * One place to resolve the four states every async slice of UI has:
 * loading → error → empty → success. Keeps screens consistent and stops
 * "flash of empty" / unhandled-error bugs.
 *
 * ```tsx
 * <DataView data={projects} isLoading={isLoading} error={error} onRetry={refetch}>
 *   {(rows) => <ProjectGrid rows={rows} />}
 * </DataView>
 * ```
 */
export function DataView<T>({
  data,
  isLoading,
  error,
  onRetry,
  isEmpty,
  loadingFallback,
  emptyFallback,
  errorFallback,
  className,
  children,
}: DataViewProps<T>) {
  const wrap = (node: ReactNode) => <div className={className}>{node}</div>;

  if (isLoading) {
    return wrap(
      loadingFallback ?? (
        <div
          className="rounded-[var(--radius-vx-lg)] border border-vx-border bg-white/[0.02] p-6"
          aria-busy="true"
          aria-live="polite"
        >
          <span className="sr-only">Loading…</span>
          <SkeletonText lines={4} />
        </div>
      ),
    );
  }

  if (error) {
    return wrap(
      errorFallback ?? <ErrorState description={toMessage(error) || undefined} onRetry={onRetry} />,
    );
  }

  const empty =
    data == null ||
    (Array.isArray(data) && data.length === 0) ||
    (isEmpty ? isEmpty(data) : false);

  if (empty) {
    return wrap(emptyFallback ?? <EmptyState title="Nothing here yet" />);
  }

  return wrap(children(data as T));
}

/** Grid of `Skeleton` cards — a common `loadingFallback`. */
export function SkeletonGrid({
  count = 6,
  className,
  cardClassName,
}: {
  count?: number;
  className?: string;
  cardClassName?: string;
}) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {Array.from({length: count}).map((_, i) => (
        <div
          key={i}
          className={cn(
            'rounded-[var(--radius-vx-lg)] border border-vx-border bg-white/[0.02] p-6',
            cardClassName,
          )}
        >
          <div className="vx-skeleton mb-4 h-10 w-10 rounded-xl" />
          <SkeletonText lines={3} />
        </div>
      ))}
    </div>
  );
}
