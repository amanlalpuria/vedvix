import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ShowcasePage from './showcase/ShowcasePage.tsx';
import './index.css';

// Lightweight hash routing so the component showcase is reachable at
// `/#showcase` without pulling in a router dependency. The marketing
// site remains the default at `/`.
const route = window.location.hash.replace(/^#\/?/, '');
const Root = route === 'showcase' ? ShowcasePage : App;

// Switching in/out of the showcase re-renders from a clean slate.
window.addEventListener('hashchange', () => {
  const next = window.location.hash.replace(/^#\/?/, '');
  if ((next === 'showcase') !== (route === 'showcase')) window.location.reload();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
