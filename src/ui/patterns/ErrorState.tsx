import type {ReactNode} from 'react';
import {AlertTriangle, RotateCw} from 'lucide-react';
import {cn} from '../cn';
import {Button} from '../primitives/Button';

export type ErrorStateProps = {
  title?: ReactNode;
  description?: ReactNode;
  /** Wire up a retry button. */
  onRetry?: () => void;
  retryLabel?: string;
  /** Swap the default warning glyph. */
  icon?: ReactNode;
  compact?: boolean;
  className?: string;
};

/**
 * Failure panel. Announces politely via `role="alert"`, states what happened
 * in plain language, and — when recovery is possible — puts a retry within
 * reach. Keep `description` human; log the stack elsewhere.
 */
export function ErrorState({
  title = 'Something went wrong',
  description = "We couldn't load this. Please try again.",
  onRetry,
  retryLabel = 'Try again',
  icon,
  compact = false,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center justify-center rounded-[var(--radius-vx-lg)] border border-vx-danger/25 text-center',
        'bg-vx-danger/[0.05]',
        compact ? 'px-5 py-10' : 'px-6 py-16',
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-vx-danger/12 text-vx-danger">
        {icon ?? <AlertTriangle size={22} />}
      </div>
      <h3 className="font-grotesk text-base font-semibold text-vx-text">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-vx-text-muted">{description}</p>
      )}
      {onRetry && (
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={onRetry}
          leftIcon={<RotateCw size={15} />}
        >
          {retryLabel}
        </Button>
      )}
    </div>
  );
}
