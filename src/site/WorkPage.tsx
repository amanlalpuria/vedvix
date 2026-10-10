import {useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {cn, GlowOrb, Reveal} from '../ui';
import {CATEGORIES, PROJECTS} from '../data/projects';
import type {Category} from '../data/projects';
import {ContactCTA} from './HomePage';
import {Eyebrow, GridBackdrop, ProjectCard, usePageMeta} from './shared';
import {WORK_SEO} from './seo';

export default function WorkPage() {
  usePageMeta(WORK_SEO.title, WORK_SEO.description, '/work');
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const counts = useMemo(() => {
    const map = new Map<Category, number>();
    PROJECTS.forEach((p) => p.categories.forEach((c) => map.set(c, (map.get(c) ?? 0) + 1)));
    return map;
  }, []);

  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40 sm:pt-48">
        <GridBackdrop />
        <GlowOrb className="-left-40 -top-40" size={560} opacity={0.28} />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Our work</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-grotesk text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
              Products in the hands of real users.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vx-text-muted sm:text-xl">
              Marketplaces, AI platforms, mobile apps and the cloud underneath them. Each one designed, engineered and launched by Vedvix.
            </p>
          </Reveal>

          <div role="group" aria-label="Filter projects by category" className="mt-12 flex flex-wrap gap-2">
            {(['All', ...CATEGORIES] as const).map((c) => {
              const active = filter === c;
              const count = c === 'All' ? PROJECTS.length : counts.get(c) ?? 0;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(c)}
                  className={cn(
                    'inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors',
                    active
                      ? 'border-vx-accent bg-vx-accent text-white'
                      : 'border-vx-border text-vx-text-muted hover:border-vx-border-strong hover:text-vx-text',
                  )}
                >
                  {c}
                  <span className={cn('tabular-nums text-xs', active ? 'text-white/75' : 'text-vx-text-subtle')}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-8" aria-label="Vedvix product development case studies">
        <motion.ul layout className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, scale: 0.97}}
                transition={{duration: 0.35}}
                className={cn(p.featured && filter === 'All' && 'md:col-span-2')}
              >
                <ProjectCard project={p} index={i} size={p.featured && filter === 'All' ? 'lg' : 'md'} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>

      <ContactCTA title="Want yours on this page next?" />
    </>
  );
}
