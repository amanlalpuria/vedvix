import {StrictMode, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The UI-kit showcase stays reachable at `/#showcase`; everything else is
// the marketing site with its own history routes (see `router.tsx`).
const ShowcasePage = lazy(() => import('./showcase/ShowcasePage.tsx'));
const isShowcase = () => window.location.hash.replace(/^#\/?/, '') === 'showcase';
const Root = isShowcase() ? ShowcasePage : App;

window.addEventListener('hashchange', () => {
  if (isShowcase() !== (Root === ShowcasePage)) window.location.reload();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div role="status" className="grid min-h-screen place-items-center bg-vx-bg text-vx-text">Loading showcase…</div>}>
      <Root />
    </Suspense>
  </StrictMode>,
);
