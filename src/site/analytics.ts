import {useEffect} from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const gtmId = import.meta.env.VITE_GTM_ID?.trim();
const ga4Id = import.meta.env.VITE_GA4_ID?.trim();
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
let initialized = false;

function addScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function initializeAnalytics() {
  if (initialized) return;
  initialized = true;

  if (gtmId) {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
    addScript('vedvix-gtm', `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
  } else if (ga4Id) {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', ga4Id, {send_page_view: false});
    addScript('vedvix-ga4', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  }

  if (metaPixelId) {
    const queue: unknown[][] = [];
    const fbq = (...args: unknown[]) => queue.push(args);
    Object.assign(fbq, {queue, push: fbq, loaded: true, version: '2.0'});
    window.fbq = fbq;
    addScript('vedvix-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', metaPixelId);
  }
}

export function trackEvent(eventName: string, parameters: Record<string, string | number | boolean> = {}) {
  initializeAnalytics();
  if (gtmId) {
    window.dataLayer?.push({...parameters, event: eventName});
  } else if (ga4Id) {
    window.gtag?.('event', eventName, parameters);
  }

  if (metaPixelId) {
    if (eventName === 'page_view') {
      window.fbq?.('track', 'PageView');
    } else if (eventName === 'generate_lead') {
      window.fbq?.('track', 'Lead', parameters);
    } else if (eventName === 'contact_click') {
      window.fbq?.('track', 'Contact', parameters);
    } else {
      window.fbq?.('trackCustom', eventName, parameters);
    }
  }
}

export function usePageTracking(path: string) {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      trackEvent('page_view', {
        page_path: path,
        page_title: document.title,
        page_location: window.location.href,
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [path]);
}

export function trackContactClick(method: 'email' | 'phone' | 'contact', placement: string) {
  const eventName = method === 'contact' ? 'contact_cta_click' : 'contact_click';
  trackEvent(eventName, {
    contact_method: method,
    placement,
    page_path: window.location.pathname,
  });
}

export function trackLeadSubmission(formName: string) {
  trackEvent('generate_lead', {
    form_name: formName,
    page_path: window.location.pathname,
  });
}
