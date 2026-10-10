import type {CSSProperties} from 'react';
import {ArrowLeft, ArrowRight, ArrowUpRight, Check} from 'lucide-react';
import {cn, GlowOrb, Reveal, Stagger, StaggerItem} from '../ui';
import {Link} from '../router';
import {PROJECTS} from '../data/projects';
import type {CaseStudy, Highlight, Panel, Project} from '../data/projects';
import {ContactCTA} from './HomePage';
import {GridBackdrop, PhoneFrame, ScreenFrame, usePageMeta, WebpImage} from './shared';

/** Project accent as a CSS variable, so every tinted element follows it. */
const accentVars = (p: Project) => ({'--p-accent': p.accent} as CSSProperties);

function Kicker({children}: {children: string}) {
  return <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--p-accent)]">{children}</span>;
}

function H2({children, className}: {children: string; className?: string}) {
  return <h2 className={cn('font-grotesk text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl', className)}>{children}</h2>;
}

/* ----------------------------------------------------------------- Header */

function ProjectHero({project}: {project: Project}) {
  const m = project.metadata;
  const meta = [
    ['Client', m.client],
    ['Year', m.year],
    ['Services', m.service],
    ...(m.location ? [['Location', m.location]] : []),
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-36 sm:pt-44">
      <GridBackdrop />
      <GlowOrb className="-right-40 -top-32" size={560} color={project.accent} opacity={0.22} />
      <div className="relative mx-auto max-w-7xl">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-vx-text-muted transition-colors hover:text-vx-text">
          <ArrowLeft size={16} /> All work
        </Link>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-4">
            {project.logo && <img src={project.logo} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl" />}
            <div className="flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span key={c} className="rounded-full border border-vx-border px-3 py-1 text-xs font-medium text-vx-text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <h1 className="mt-6 font-grotesk text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.035em]">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-vx-text-muted sm:text-2xl">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-vx-border bg-vx-border sm:grid-cols-2 lg:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k} className="bg-vx-bg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vx-text-subtle">{k}</p>
              <p className="mt-2 leading-snug text-vx-text">{v}</p>
            </div>
          ))}
        </Reveal>

        {project.link && (
          <Reveal delay={0.15} className="mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--p-accent)] px-6 font-medium text-white shadow-[0_14px_40px_-14px_var(--p-accent)] transition-transform active:scale-[0.97]"
            >
              Visit {new URL(project.link).hostname.replace(/^www\./, '')} <ArrowUpRight size={17} />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Cover({project}: {project: Project}) {
  return (
    <div className="px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-vx-border">
          <WebpImage
            src={project.cover}
            alt={`${project.name}: ${project.tagline}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="block aspect-[16/9] w-full object-cover md:aspect-[2/1]"
          />
        </div>
      </Reveal>
    </div>
  );
}

function Results({project}: {project: Project}) {
  const results = project.details.results;
  return (
    <section className="px-6 py-16">
      <dl className={cn('mx-auto grid max-w-7xl gap-8', results.length >= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3')}>
        {results.map((r) => (
          <Reveal key={r.label} className="border-l-2 border-[var(--p-accent)] pl-5">
            <dd className="font-grotesk text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{r.value}</dd>
            <dt className="mt-2 text-sm text-vx-text-muted">{r.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

function Story({project}: {project: Project}) {
  const parts = [
    ['The challenge', project.details.challenge],
    [project.details.solutionTitle ?? 'What we built', project.details.solution],
    ['The outcome', project.details.impact],
  ];
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
        {parts.map(([title, body], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <span className="font-grotesk text-sm font-bold text-[var(--p-accent)]">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="mt-3 font-grotesk text-2xl font-bold">{title}</h2>
            <p className="mt-4 leading-relaxed text-vx-text-muted">{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------- Rich case-study parts */

function Surfaces({cs}: {cs: CaseStudy}) {
  return (
    <section className="bg-vx-bg-raised/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Kicker>The platform</Kicker>
          <H2 className="mt-4">{cs.surfacesTitle ?? `${cs.surfaces.length} apps, one backend`}</H2>
          <p className="mt-5 text-lg text-vx-text-muted">
            {cs.surfacesLede ??
              "Every app talks to the same backend, so an order placed on the web shows up in the console, on the courier's phone and in the reports at the same moment."}
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.surfaces.map((s) => (
            <StaggerItem key={s.name} className="flex flex-col rounded-3xl border border-vx-border bg-vx-bg p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vx-text-subtle">{s.audience}</p>
              <h3 className="mt-3 font-grotesk text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-vx-text-muted">{s.body}</p>
              <p className="mt-5 font-mono text-xs text-[var(--p-accent)]">{s.where}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function HighlightBand({h, flip}: {h: Highlight; flip: boolean; key?: string}) {
  const shots = h.shots ?? [];
  const phones = shots.filter((s) => s.kind === 'phone');
  const screens = shots.filter((s) => s.kind === 'screen');
  const wide = screens.length > 0 || !!h.panel;
  return (
    <div
      className={cn(
        'grid items-center gap-12 lg:gap-20',
        !wide ? 'lg:grid-cols-2' : flip ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]',
      )}
    >
      <Reveal className={cn('min-w-0', flip && 'lg:order-2')}>
        <Kicker>{h.eyebrow}</Kicker>
        <h3 className="mt-4 font-grotesk text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl">{h.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-vx-text-muted">{h.body}</p>
        {h.points && (
          <ul className="mt-7 space-y-3">
            {h.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-vx-text">
                <Check size={18} className="mt-1 shrink-0 text-[var(--p-accent)]" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
      <Reveal delay={0.1} className={cn('min-w-0', flip && 'lg:order-1')}>
        {h.panel && <SpecPanel panel={h.panel} />}
        {screens.length > 0 && (
          <div className="space-y-8">
            {screens.map((s) => (
              <ScreenFrame key={s.src} shot={s} />
            ))}
          </div>
        )}
        {phones.length > 0 && (
          <div className="relative flex justify-center gap-5">
            <div aria-hidden className="absolute inset-x-[10%] top-[15%] bottom-[5%] rounded-full bg-[var(--p-accent)] opacity-20 blur-[90px]" />
            {phones.map((s, i) => (
              <PhoneFrame
                key={s.src}
                shot={s}
                className={cn(
                  'relative',
                  phones.length > 1 ? cn('w-[min(46%,250px)]', i === 0 ? '-rotate-3' : 'mt-14 rotate-3') : 'w-[min(64%,290px)]',
                )}
              />
            ))}
          </div>
        )}
      </Reveal>
    </div>
  );
}

/** Spec table: a terminal-style card for architecture and infra facts. */
function SpecPanel({panel}: {panel: Panel}) {
  const cols = panel.columns;
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#070d1c] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="font-mono text-xs text-vx-text-subtle">{panel.label}</span>
      </div>
      <div className="overflow-x-auto">
        <table className={cn('w-full border-collapse text-sm', cols && cols.length > 2 && 'min-w-[480px]')}>
          {cols && (
            <thead>
              <tr>
                {cols.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={cn(
                      'border-b border-white/10 px-5 py-3 text-left font-mono text-[11px] font-bold uppercase tracking-[0.12em]',
                      i === 0 ? 'text-vx-text-subtle' : 'text-[var(--p-accent)]',
                    )}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {panel.rows.map((row) => (
              <tr key={row.join('|')} className="border-b border-white/[0.06] last:border-0">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="whitespace-nowrap px-5 py-3 text-left font-mono text-xs font-medium text-vx-text-muted">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-5 py-3 leading-snug text-vx-text">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Highlights({cs}: {cs: CaseStudy}) {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-28 sm:space-y-36">
        {cs.highlights.map((h, i) => (
          <HighlightBand key={h.title} h={h} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

const STEP_COLS: Record<number, string> = {3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5'};

function Sequence({cs}: {cs: CaseStudy}) {
  if (!cs.sequence) return null;
  const s = cs.sequence;
  return (
    <section className="px-6 py-8">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 px-6 py-16 sm:px-12"
        style={{background: 'radial-gradient(80% 90% at 0% 0%, color-mix(in srgb, var(--p-accent) 22%, transparent), transparent 60%), #0a1324'}}
      >
        <Reveal className="max-w-2xl">
          <Kicker>{s.eyebrow}</Kicker>
          <H2 className="mt-4">{s.title}</H2>
          <p className="mt-5 text-lg text-vx-text-muted">{s.lede}</p>
        </Reveal>
        <ol className={cn('mt-12 grid gap-4 sm:grid-cols-2', STEP_COLS[s.steps.length] ?? 'lg:grid-cols-4')}>
          {s.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--p-accent)]">
                {String(i + 1).padStart(2, '0')} · {step.label}
              </p>
              <h3 className="mt-4 font-grotesk text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-vx-text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeatureGroups({cs}: {cs: CaseStudy}) {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Kicker>Feature set</Kicker>
          <H2 className="mt-4">Something for everyone on the platform</H2>
        </Reveal>
        <div className={cn('mt-12 grid gap-4 md:grid-cols-2', cs.featureGroups.length >= 4 ? 'lg:grid-cols-4' : cs.featureGroups.length === 3 && 'lg:grid-cols-3')}>
          {cs.featureGroups.map((g, i) => (
            <Reveal key={g.audience} delay={i * 0.06} className="rounded-3xl border border-vx-border bg-vx-bg-raised/50 p-6">
              <h3 className="font-grotesk text-lg font-semibold">{g.audience}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-vx-text-muted">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--p-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engineering({cs}: {cs: CaseStudy}) {
  return (
    <section className="bg-vx-bg-raised/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <Kicker>{cs.engineeringEyebrow ?? 'Under the hood'}</Kicker>
          <H2 className="mt-4">{cs.engineeringTitle ?? 'Engineering decisions that keep it honest'}</H2>
          <p className="mt-5 text-lg text-vx-text-muted">
            {cs.engineeringLede ?? 'The details buyers never see, but would notice if they were missing.'}
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cs.engineering.map((e) => (
            <StaggerItem key={e.title} className="rounded-3xl border border-vx-border bg-vx-bg p-7">
              <h3 className="font-grotesk text-lg font-semibold">{e.title}</h3>
              <p className="mt-3 leading-relaxed text-vx-text-muted">{e.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-20">
          <h3 className="font-grotesk text-2xl font-bold">{cs.architectureTitle ?? 'Architecture & stack'}</h3>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-3xl border border-vx-border">
          {cs.architecture.map((layer, i) => (
            <Reveal
              key={layer.layer}
              delay={i * 0.04}
              className={cn('grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-center sm:p-6', i > 0 && 'border-t border-vx-border')}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--p-accent)]">{layer.layer}</p>
              <ul className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <li key={item} className="rounded-full border border-vx-border bg-white/[0.03] px-3 py-1 text-sm text-vx-text">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------- Simple projects: features + stack */

function FeaturesAndStack({project}: {project: Project}) {
  return (
    <section className="bg-vx-bg-raised/40 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <Reveal>
          <Kicker>Key features</Kicker>
          <ul className="mt-6 space-y-4">
            {project.details.features.map((f) => (
              <li key={f} className="flex gap-3 text-lg text-vx-text">
                <Check size={20} className="mt-1 shrink-0 text-[var(--p-accent)]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Kicker>Tech stack</Kicker>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.details.techStack.map((t) => (
              <li key={t} className="rounded-full border border-vx-border bg-white/[0.03] px-3.5 py-1.5 text-sm text-vx-text">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Quote({project}: {project: Project}) {
  const t = project.details.testimonial;
  if (!t || t.author === 'CEO') return null;
  return (
    <section className="px-6 py-24">
      <Reveal as="figure" className="mx-auto max-w-4xl text-center">
        <span aria-hidden className="font-grotesk text-7xl leading-none text-[var(--p-accent)]">“</span>
        <blockquote className="mt-2 font-grotesk text-2xl font-medium leading-snug sm:text-4xl">{t.text}</blockquote>
        <figcaption className="mt-8">
          <span className="block font-semibold">{t.author}</span>
          <span className="text-vx-text-muted">{t.role}</span>
        </figcaption>
      </Reveal>
    </section>
  );
}

function NextProject({project}: {project: Project}) {
  const i = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return (
    <section className="px-6 pt-8">
      <Reveal className="mx-auto max-w-7xl">
        <Link
          href={`/work/${next.slug}`}
          className="group relative block overflow-hidden rounded-[32px] border border-vx-border"
          aria-label={`Next project: ${next.name}`}
        >
          <WebpImage
            src={next.cover}
            alt=""
            loading="lazy"
            decoding="async"
            pictureClassName="absolute inset-0"
            className="h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-vx-bg via-vx-bg/85 to-vx-bg/30" />
          <div className="relative flex items-center justify-between gap-6 p-8 sm:p-14">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vx-text-subtle">Next project</p>
              <p className="mt-3 font-grotesk text-4xl font-bold tracking-tight sm:text-6xl">{next.name}</p>
              <p className="mt-3 max-w-xl text-vx-text-muted">{next.tagline}</p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-vx-accent text-white transition-transform group-hover:translate-x-1">
              <ArrowRight size={22} />
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}

export default function ProjectPage({project}: {project: Project; key?: string}) {
  usePageMeta(
    `${project.name} case study | Vedvix`,
    `${project.tagline} ${project.desc}`,
    `/work/${project.slug}`,
    {image: project.cover},
  );
  const cs = project.caseStudy;

  return (
    <article style={accentVars(project)}>
      <ProjectHero project={project} />
      <Cover project={project} />
      <Results project={project} />
      <Story project={project} />
      {cs ? (
        <>
          <Surfaces cs={cs} />
          <Highlights cs={cs} />
          <Sequence cs={cs} />
          <FeatureGroups cs={cs} />
          <Engineering cs={cs} />
        </>
      ) : (
        <FeaturesAndStack project={project} />
      )}
      <Quote project={project} />
      <NextProject project={project} />
      <ContactCTA title={`Building something like ${project.name}?`} />
    </article>
  );
}
