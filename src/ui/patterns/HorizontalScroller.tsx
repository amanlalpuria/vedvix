import {Children, useCallback, useEffect, useRef, useState} from 'react';
import type {PointerEvent as ReactPointerEvent, ReactNode} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {cn} from '../cn';

export type HorizontalScrollerProps = {
  children: ReactNode;
  /** Accessible name for the scroll region. */
  label: string;
  /** Gap between items, in px. */
  gap?: number;
  /** Class applied to each item wrapper (e.g. `w-[300px]`). */
  itemClassName?: string;
  /** Show the prev/next controls (still keyboard + drag scrollable without). */
  controls?: boolean;
  className?: string;
};

/**
 * Snap-scrolling horizontal rail — the "selected work" carousel.
 *
 * - Scrollbar hidden; edges fade to signal more content.
 * - Focusable region: ArrowLeft/ArrowRight page by ~80% width.
 * - Drag-to-scroll with the pointer (disabled after a real drag so child
 *   clicks still register).
 * - Prev/Next buttons disable at the ends.
 */
export function HorizontalScroller({
  children,
  label,
  gap = 24,
  itemClassName,
  controls = true,
  className,
}: HorizontalScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({active: false, moved: false, startX: 0, startLeft: 0});

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    sync();
    el.addEventListener('scroll', sync, {passive: true});
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', sync);
      ro.disconnect();
    };
  }, [sync]);

  const page = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({left: direction * el.clientWidth * 0.8, behavior: 'smooth'});
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = {active: true, moved: false, startX: event.clientX, startLeft: el.scrollLeft};
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.active) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <div className={cn('group/scroller relative', className)}>
      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            page(1);
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            page(-1);
          }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={(event) => {
          if (drag.current.moved) {
            event.preventDefault();
            event.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className={cn(
          'no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth',
          'cursor-grab pb-2 active:cursor-grabbing',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent focus-visible:ring-offset-4 focus-visible:ring-offset-vx-bg',
        )}
        style={{gap}}
      >
        {Children.map(children, (child, i) => (
          <div key={i} className={cn('shrink-0 snap-start', itemClassName)}>
            {child}
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-vx-bg to-transparent transition-opacity duration-300',
          atStart && 'opacity-0',
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-vx-bg to-transparent transition-opacity duration-300',
          atEnd && 'opacity-0',
        )}
      />

      {controls && (
        <>
          <RailButton side="left" disabled={atStart} onClick={() => page(-1)} />
          <RailButton side="right" disabled={atEnd} onClick={() => page(1)} />
        </>
      )}
    </div>
  );
}

function RailButton({
  side,
  disabled,
  onClick,
}: {
  side: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'left' ? 'Scroll left' : 'Scroll right'}
      className={cn(
        'absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full sm:flex',
        'vx-glass text-vx-text shadow-[var(--shadow-vx-card)] transition-all duration-200',
        'hover:border-vx-accent/40 hover:text-vx-accent-soft',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent focus-visible:ring-offset-2 focus-visible:ring-offset-vx-bg',
        'disabled:pointer-events-none disabled:opacity-0',
        side === 'left' ? 'left-3' : 'right-3',
      )}
    >
      {side === 'left' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}
