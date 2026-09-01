import {useState} from 'react';
import {cn} from '../cn';

export type AvatarProps = {
  src?: string;
  /** Used for `alt` and to derive initials when there's no image. */
  name?: string;
  /** Diameter in px. */
  size?: number;
  className?: string;
  /** Allowed for list rendering; this codebase has no `@types/react` JSX
   *  managed-attributes, so `key` must be declared explicitly. */
  key?: string | number;
};

function initialsFrom(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  const letters = (parts[0][0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] ?? '' : '');
  return letters.toUpperCase();
}

/**
 * User image with graceful degradation: broken/missing `src` falls back to
 * initials, and missing `name` falls back to a neutral placeholder ring.
 */
export function Avatar({src, name = '', size = 40, className}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  const initials = initialsFrom(name);

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
        'bg-white/[0.08] font-medium text-vx-text-muted ring-2 ring-vx-bg',
        className,
      )}
      style={{width: size, height: size, fontSize: Math.round(size * 0.36)}}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : initials ? (
        <span aria-hidden>{initials}</span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="currentColor" aria-hidden>
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.5 0-8 1.8-8 4.2V20h16v-1.8c0-2.4-4.5-4.2-8-4.2Z" />
        </svg>
      )}
    </span>
  );
}

export type Person = {id?: string | number; name: string; src?: string};

export type AvatarStackProps = {
  people: Person[];
  /** Show at most this many; the rest collapse into a `+N` chip. */
  max?: number;
  size?: number;
  className?: string;
  /** Accessible name for the group, e.g. "Trusted by 4,000+ teams". */
  label?: string;
};

export function AvatarStack({people, max = 4, size = 34, className, label}: AvatarStackProps) {
  const shown = people.slice(0, max);
  const overflow = people.length - shown.length;

  return (
    <div
      className={cn('flex items-center', className)}
      role="group"
      aria-label={label ?? `${people.length} people`}
    >
      <div className="flex -space-x-2.5">
        {shown.map((person, i) => (
          <Avatar key={person.id ?? i} src={person.src} name={person.name} size={size} />
        ))}
        {overflow > 0 && (
          <span
            className="relative inline-flex items-center justify-center rounded-full bg-white/[0.1] font-semibold text-vx-text ring-2 ring-vx-bg"
            style={{width: size, height: size, fontSize: Math.round(size * 0.32)}}
            aria-hidden
          >
            +{overflow}
          </span>
        )}
      </div>
    </div>
  );
}
