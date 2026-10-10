import {useEffect, useSyncExternalStore} from 'react';
import type {AnchorHTMLAttributes, MouseEvent} from 'react';

/**
 * Minimal history router. The site has three routes (`/`, `/work`,
 * `/work/:slug`), so a dependency isn't worth it. The build emits a static
 * HTML file for each route (see `vite.config.ts`) so deep links work on
 * GitHub Pages.
 */

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('popstate', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('popstate', listener);
  };
}

function normalize(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

const getPath = () => normalize(window.location.pathname);

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => '/');
}

/** Scroll to an in-page anchor, offset by the sticky nav via `scroll-mt-*`. */
export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace(/^#/, '');
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({behavior, block: 'start'});
  return true;
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin);
  const samePath = normalize(url.pathname) === getPath();

  if (samePath && url.hash) {
    history.pushState(null, '', url.pathname + url.hash);
    scrollToHash(url.hash);
    return;
  }

  history.pushState(null, '', url.pathname + url.hash);
  listeners.forEach((l) => l());
}

/** After a route change: jump to the requested anchor, or to the top. */
export function useScrollOnRouteChange(path: string) {
  useEffect(() => {
    const {hash} = window.location;
    if (hash) {
      // Wait a frame so the new page's sections exist.
      requestAnimationFrame(() => {
        if (!scrollToHash(hash, 'auto')) window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {href: string};

/** Internal link: client-side navigation, normal behaviour for modified clicks. */
export function Link({href, onClick, ...rest}: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank'
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };
  return <a href={href} onClick={handleClick} {...rest} />;
}
