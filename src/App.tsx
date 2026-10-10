import {MotionConfig} from 'motion/react';
import {getProject} from './data/projects';
import {Link, usePath, useScrollOnRouteChange} from './router';
import {Layout} from './site/Layout';
import HomePage from './site/HomePage';
import WorkPage from './site/WorkPage';
import ProjectPage from './site/ProjectPage';
import {Eyebrow, usePageMeta} from './site/shared';
import {usePageTracking} from './site/analytics';

function NotFound() {
  usePageMeta(
    'Page not found | Vedvix',
    'This page does not exist. Browse Vedvix case studies or head back home.',
    '/404',
    {noindex: true},
  );
  return (
    <section className="grid min-h-[80vh] place-items-center px-6 pt-32 text-center">
      <div>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-grotesk text-5xl font-bold tracking-tight sm:text-7xl">This page didn&rsquo;t ship.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-vx-text-muted">The link may be old or mistyped. Our work is still here.</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/" className="inline-flex h-12 items-center rounded-full bg-vx-accent px-6 font-medium text-white">Home</Link>
          <Link href="/work" className="inline-flex h-12 items-center rounded-full border border-vx-border px-6 font-medium">See our work</Link>
        </div>
      </div>
    </section>
  );
}

function Page({path}: {path: string}) {
  if (path === '/') return <HomePage />;
  if (path === '/work') return <WorkPage />;
  const match = path.match(/^\/work\/([a-z0-9-]+)$/);
  const project = match ? getProject(match[1]) : undefined;
  if (project) return <ProjectPage key={project.slug} project={project} />;
  return <NotFound />;
}

export default function App() {
  const path = usePath();
  useScrollOnRouteChange(path);
  usePageTracking(path);
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Page path={path} />
      </Layout>
    </MotionConfig>
  );
}
