import {cn} from '../cn';

export type SpinnerProps = {
  /** Diameter in px. */
  size?: number;
  /** Stroke width in px. */
  weight?: number;
  className?: string;
  /** Accessible label. Pass `null` to hide from the a11y tree (e.g. when a
   *  parent already announces "loading"). */
  label?: string | null;
};

/**
 * Indeterminate loading indicator. Announces itself via `role="status"`
 * unless `label` is `null`. Uses the CSS `animate-spin` utility so it keeps
 * spinning even while JS is busy.
 */
export function Spinner({size = 16, weight = 3, className, label = 'Loading'}: SpinnerProps) {
  return (
    <span
      className={cn('inline-flex', className)}
      role={label === null ? undefined : 'status'}
      aria-hidden={label === null ? true : undefined}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="animate-spin"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.22" strokeWidth={weight} />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="currentColor"
          strokeWidth={weight}
          strokeLinecap="round"
        />
      </svg>
      {label !== null && <span className="sr-only">{label}</span>}
    </span>
  );
}
