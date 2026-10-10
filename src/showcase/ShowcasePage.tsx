import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {MotionConfig} from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  Inbox,
  Layers,
  Rocket,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';

import {
  Avatar,
  AvatarStack,
  Badge,
  Button,
  Card,
  CardDeck,
  DataView,
  EmptyState,
  Equalizer,
  ErrorState,
  GalleryScatter,
  GlowOrb,
  HorizontalScroller,
  Marquee,
  Parallax,
  Reveal,
  Section,
  Skeleton,
  SkeletonGrid,
  SkeletonText,
  Sparkle,
  Spinner,
  Spotlight,
  Stagger,
  StaggerItem,
  TextReveal,
  TiltCard,
  VedvixLogo,
  VedvixMark,
  type Person,
} from '../ui';
import vedvixSymbolWhite from '../ui/brand/assets/vedvix-symbol-white.svg';
import {usePageMeta} from '../site/shared';

/* --------------------------------------------------------------------- */
/* Local helpers — these live in the showcase only, not the kit.          */
/* --------------------------------------------------------------------- */

function Swatch({name, className}: {name: string; className: string}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 rounded-xl border border-vx-border ${className}`} />
      <span className="text-xs text-vx-text-subtle">{name}</span>
    </div>
  );
}

function Spec({label, children}: {label: string; children: ReactNode}) {
  return (
    <div className="rounded-2xl border border-vx-border bg-white/[0.02] p-5">
      <div className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-vx-text-subtle">
        {label}
      </div>
      {children}
    </div>
  );
}

const PEOPLE: Person[] = [
  {id: 1, name: 'Aria Nakamura'},
  {id: 2, name: 'Devon Reyes'},
  {id: 3, name: 'Priya Anand'},
  {id: 4, name: 'Marcus Hale'},
  {id: 5, name: 'Lena Fischer'},
  {id: 6, name: 'Sam Okafor'},
  {id: 7, name: 'Yuki Tanaka'},
];

const TECH = [
  'React 19',
  'TypeScript',
  'Motion',
  'Tailwind v4',
  'Vite',
  'Node',
  'Postgres',
  'Redis',
  'AWS',
  'Playwright',
];

const PROJECTS = [
  {name: 'Nova', kind: 'Brand · Motion · Web', year: '2024', from: 'from-indigo-500/30'},
  {name: 'Kiln', kind: 'Product · Interface', year: '2025', from: 'from-amber-500/25'},
  {name: 'Meridian', kind: 'Systems · Identity', year: '2025', from: 'from-emerald-500/25'},
  {name: 'Atlas', kind: 'Fintech · Dashboard', year: '2024', from: 'from-sky-500/25'},
  {name: 'Ember', kind: 'Mobile · Commerce', year: '2023', from: 'from-rose-500/25'},
];

const SERVICES = [
  {icon: Bot, title: 'AI product development', body: 'From prompt design to eval harnesses and on-device inference.'},
  {icon: Layers, title: 'SaaS platforms', body: 'Multi-tenant architecture, billing, RBAC, audit — the unglamorous parts, done right.'},
  {icon: Zap, title: 'Design systems', body: 'Token pipelines, accessible primitives, and the docs that keep them alive.'},
  {icon: Boxes, title: 'Mobile experiences', body: 'React Native and native modules where the 1% matters.'},
  {icon: Rocket, title: 'Zero-to-one', body: 'Idea to a product in users’ hands, measured in weeks.'},
  {icon: Star, title: 'Fractional engineering', body: 'Senior hands embedded in your team for a season.'},
];

type Mode = 'loading' | 'error' | 'empty' | 'success';

/* --------------------------------------------------------------------- */
/* Page                                                                   */
/* --------------------------------------------------------------------- */

export default function ShowcasePage() {
  usePageMeta('UI Showcase | Vedvix', 'Explore the design system and interface components used across the Vedvix website.', '/', {noindex: true});
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>('success');

  useEffect(() => {
    document.title = 'Vedvix UI Kit — Component Showcase';
  }, []);

  const rows =
    mode === 'success'
      ? PROJECTS
      : mode === 'empty'
        ? []
        : PROJECTS;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-vx-bg font-grotesk text-vx-text antialiased [--font-sans:var(--font-grotesk)] selection:bg-vx-accent/30">
        {/* ---------- Floating pill nav ---------- */}
        <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
          <nav
            aria-label="Showcase"
            className="vx-glass pointer-events-auto flex items-center gap-1 rounded-full bg-vx-bg/75 px-2 py-2 shadow-[var(--shadow-vx-card)]"
          >
            <a
              href="#top"
              className="flex items-center gap-2 rounded-full px-3 py-1.5 text-vx-text"
              aria-label="Vedvix UI Kit, back to top"
            >
              <VedvixLogo size={20} animated />
              <span className="text-sm font-medium text-vx-text-subtle">UI Kit</span>
            </a>
            <span className="mx-1 hidden h-4 w-px bg-vx-border sm:block" />
            {[
              ['Motion', '#motion'],
              ['Primitives', '#primitives'],
              ['States', '#states'],
              ['Patterns', '#patterns'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="hidden rounded-full px-3 py-1.5 text-sm text-vx-text-muted transition-colors hover:text-vx-text sm:block"
              >
                {label}
              </a>
            ))}
            <Button as="a" href="#/" size="sm" variant="subtle" className="ml-1">
              Back to site
            </Button>
          </nav>
        </header>

        {/* ---------- Hero ---------- */}
        <section
          id="top"
          className="relative overflow-hidden px-6 pb-24 pt-40 sm:pt-48"
        >
          <GlowOrb className="-left-40 top-10" size={520} opacity={0.22} />
          <GlowOrb
            className="right-[-10rem] top-40"
            color="var(--color-vx-accent-soft)"
            size={360}
            opacity={0.14}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <Badge variant="brand" dot className="mb-6">
                  Vedvix UI Kit · v1
                </Badge>
              </Reveal>
              <TextReveal
                as="h1"
                className="font-grotesk text-4xl font-bold leading-[1.05] tracking-tight text-vx-text sm:text-6xl"
                highlight={['ship', 'first.']}
              >
                A component system built to ship first.
              </TextReveal>
              <Reveal delay={0.1} className="mt-6 max-w-xl">
                <p className="text-lg leading-relaxed text-vx-text-muted">
                  Reusable, accessible, dark-first React components on the official Vedvix
                  palette. Every animation respects reduced-motion; every async view has
                  loading, empty and error states.
                </p>
              </Reveal>
              <Reveal delay={0.18} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  Start a project
                </Button>
                <Button size="lg" variant="secondary">
                  Browse components
                </Button>
              </Reveal>
              <Reveal delay={0.28} className="mt-8 flex items-center gap-3">
                <AvatarStack people={PEOPLE} label="Trusted by 4,000+ product teams" />
                <span className="text-sm text-vx-text-muted">
                  Trusted by <span className="text-vx-text">4,000+</span> product teams
                </span>
              </Reveal>
            </div>

            {/* Live session card — echoes the Synapse demo panel */}
            <Reveal delay={0.15}>
              <TiltCard className="rounded-[var(--radius-vx-lg)]">
                <Card variant="gradient" className="relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-vx-accent/20 blur-3xl" />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm text-vx-text-muted">
                      <Sparkles size={15} className="text-vx-accent-soft" /> Live session
                    </span>
                    <Badge variant="success" dot size="sm">
                      LIVE
                    </Badge>
                  </div>
                  <div className="relative mt-8 rounded-2xl border border-vx-border bg-vx-bg/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-vx-text">Summarise the thread</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-vx-accent text-vx-accent-contrast">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                    <div className="mt-4 flex items-end gap-3">
                      <Equalizer bars={7} />
                      <span className="text-xs text-vx-text-subtle">context assembled · 42 ms</span>
                    </div>
                  </div>
                  <p className="relative mt-6 text-xs leading-relaxed text-vx-text-subtle">
                    From ambient sensing to on-device inference — the whole loop under
                    sixty milliseconds.
                  </p>
                </Card>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* ---------- Tokens ---------- */}
        <Section
          eyebrow="Foundation"
          title="Brand-accurate tokens"
          lede="Namespaced vx-* CSS variables so the kit drops into any Vedvix surface without colliding with existing styles."
        >
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            <Swatch name="vx-bg" className="bg-vx-bg" />
            <Swatch name="vx-bg-raised" className="bg-vx-bg-raised" />
            <Swatch name="vx-surface" className="bg-vx-surface" />
            <Swatch name="vx-accent" className="bg-vx-accent" />
            <Swatch name="vx-accent-soft" className="bg-vx-accent-soft" />
            <Swatch name="vx-text" className="bg-vx-text" />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <VedvixLogo size={30} animated />
            <VedvixMark size={40} nodeColor="var(--color-vx-accent)" />
            <span className="font-grotesk text-2xl font-semibold tracking-[0.13em]">
              SPACE GROTESK
            </span>
          </div>
        </Section>

        {/* ---------- Motion primitives ---------- */}
        <Section
          id="motion"
          eyebrow="Motion primitives"
          title="Animation, with an off switch"
          lede="Scroll-linked and pointer-driven effects that collapse to a static, legible state under prefers-reduced-motion."
        >
          <div className="grid items-start gap-6 lg:grid-cols-3">
            <Spec label="Reveal / Stagger">
              <Stagger className="space-y-2.5">
                {['Fades in on scroll', 'Slides up 24px', 'Optional blur-in', 'Staggers children'].map(
                  (t) => (
                    <StaggerItem
                      key={t}
                      className="rounded-lg border border-vx-border bg-white/[0.03] px-3 py-2 text-sm text-vx-text-muted"
                    >
                      {t}
                    </StaggerItem>
                  ),
                )}
              </Stagger>
            </Spec>

            <Spec label="TiltCard">
              <TiltCard className="rounded-2xl">
                <div className="rounded-2xl border border-vx-border bg-gradient-to-br from-vx-accent/20 to-transparent p-8 text-center">
                  <Sparkles className="mx-auto mb-2 text-vx-accent-soft" />
                  <p className="text-sm text-vx-text-muted">Hover me (pointer devices)</p>
                </div>
              </TiltCard>
            </Spec>

            <Spec label="Spotlight">
              <Spotlight className="rounded-2xl">
                <div className="rounded-2xl border border-vx-border bg-white/[0.02] p-8 text-center">
                  <p className="text-sm text-vx-text-muted">Cursor-follow highlight</p>
                </div>
              </Spotlight>
            </Spec>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Spec label="Parallax (scroll) + Sparkle">
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-vx-border">
                <Parallax speed={0.6} className="pointer-events-none absolute -inset-y-8 right-6">
                  <Sparkle size={72} />
                </Parallax>
                <span className="relative text-sm text-vx-text-muted">layer drifts as you scroll</span>
              </div>
            </Spec>
            <Spec label="Marquee (pauses on hover / focus)">
              <Marquee speed={45}>
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 text-lg font-medium text-vx-text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-vx-accent-soft" />
                    {t}
                  </span>
                ))}
              </Marquee>
            </Spec>
          </div>
        </Section>

        {/* ---------- Primitives ---------- */}
        <Section
          id="primitives"
          eyebrow="Primitives"
          title="The everyday building blocks"
          lede="Polymorphic, forward-ref, keyboard-focus-ringed. Loading and fallback states are part of the API, not an afterthought."
        >
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <Spec label="Button — variants, sizes, loading">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="subtle">Subtle</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button
                    loading={loading}
                    onClick={() => {
                      setLoading(true);
                      window.setTimeout(() => setLoading(false), 1600);
                    }}
                  >
                    {loading ? 'Working' : 'Click to load'}
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="link" rightIcon={<ArrowRight size={15} />}>
                    Link
                  </Button>
                </div>
              </div>
            </Spec>

            <Spec label="Badge">
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="brand" dot>
                  Brand
                </Badge>
                <Badge variant="neutral">Neutral</Badge>
                <Badge variant="success" dot>
                  Operational
                </Badge>
                <Badge variant="warning">Degraded</Badge>
                <Badge variant="danger" dot>
                  Down
                </Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Spec>

            <Spec label="Card — glass / solid / outline / gradient">
              <div className="grid gap-4 sm:grid-cols-2">
                {(['glass', 'solid', 'outline', 'gradient'] as const).map((v) => (
                  <Card key={v} variant={v} padding="md" interactive>
                    <Card.Title className="text-base capitalize">{v}</Card.Title>
                    <Card.Description className="mt-1">Interactive surface.</Card.Description>
                  </Card>
                ))}
              </div>
            </Spec>

            <Spec label="Avatar — fallback chain">
              <div className="flex items-center gap-4">
                <Avatar name="Aria Nakamura" size={44} />
                <Avatar src="https://invalid.example/x.png" name="Broken Src" size={44} />
                <Avatar size={44} />
                <AvatarStack people={PEOPLE} max={5} size={44} />
              </div>
            </Spec>

            <Spec label="Spinner">
              <div className="flex items-center gap-6 text-vx-accent-soft">
                <Spinner size={16} />
                <Spinner size={22} />
                <Spinner size={30} weight={2.5} />
              </div>
            </Spec>

            <Spec label="Skeleton">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton circle style={{width: 44, height: 44}} />
                  <div className="flex-1">
                    <Skeleton className="mb-2 h-3.5 w-1/2" />
                    <Skeleton className="h-3 w-1/3" />
                  </div>
                </div>
                <SkeletonText lines={3} />
              </div>
            </Spec>
          </div>
        </Section>

        {/* ---------- Async states ---------- */}
        <Section
          id="states"
          eyebrow="States"
          title="Loading, empty, error, success"
          lede="DataView resolves all four in one place so every screen behaves the same. Flip the mode:"
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {(['success', 'loading', 'empty', 'error'] as Mode[]).map((m) => (
              <Button
                key={m}
                size="sm"
                variant={mode === m ? 'primary' : 'secondary'}
                onClick={() => setMode(m)}
                className="capitalize"
              >
                {m}
              </Button>
            ))}
          </div>

          <DataView
            data={rows}
            isLoading={mode === 'loading'}
            error={mode === 'error' ? 'The projects service timed out.' : undefined}
            onRetry={() => setMode('success')}
            loadingFallback={<SkeletonGrid count={3} />}
            emptyFallback={
              <EmptyState
                icon={<Inbox size={22} />}
                title="No projects yet"
                description="When you publish work it will appear here."
                action={<Button size="sm">New project</Button>}
              />
            }
          >
            {(list) => (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <Card key={p.name} variant="glass" interactive>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Description className="mt-1">{p.kind}</Card.Description>
                    <Card.Footer>
                      <span className="text-xs text-vx-text-subtle">{p.year}</span>
                      <ArrowUpRight size={15} className="ml-auto text-vx-text-muted" />
                    </Card.Footer>
                  </Card>
                ))}
              </div>
            )}
          </DataView>

          <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
            <EmptyState
              icon={<Inbox size={22} />}
              title="Inbox zero"
              description="You’re all caught up. Nice."
              compact
            />
            <ErrorState compact onRetry={() => undefined} />
          </div>
        </Section>

        {/* ---------- Signature patterns ---------- */}
        <Section
          id="patterns"
          eyebrow="Signature patterns"
          title="The scroll pieces"
          lede="Composed layouts that carry the Synapse-style choreography — and degrade to plain grids when motion is off."
        >
          <div className="mb-3 text-sm font-medium text-vx-text-muted">
            HorizontalScroller — drag, arrow keys, or the buttons
          </div>
          <HorizontalScroller label="Selected work" itemClassName="w-[280px] sm:w-[340px]">
            {PROJECTS.map((p) => (
              <Card key={p.name} variant="solid" padding="none" className="overflow-hidden">
                <div className={`h-44 bg-gradient-to-br ${p.from} to-transparent`} />
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-grotesk text-xl font-semibold">{p.name}</span>
                    <span className="text-xs text-vx-text-subtle">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-vx-text-muted">{p.kind}</p>
                </div>
              </Card>
            ))}
          </HorizontalScroller>

          <div className="mb-3 mt-16 text-sm font-medium text-vx-text-muted">
            CardDeck — perspective fan-in on scroll
          </div>
          <CardDeck>
            {SERVICES.map(({icon: Icon, title, body}) => (
              <Card key={title} variant="glass" interactive className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-vx-accent/12 text-vx-accent-soft">
                  <Icon size={20} />
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Description className="mt-1.5">{body}</Card.Description>
              </Card>
            ))}
          </CardDeck>

          <div className="mb-3 mt-16 text-sm font-medium text-vx-text-muted">
            GalleryScatter — parallax + idle float
          </div>
          <GalleryScatter
            items={PROJECTS.concat(PROJECTS.slice(0, 1)).map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className={`flex h-40 items-end rounded-[var(--radius-vx-lg)] border border-vx-border bg-gradient-to-br ${p.from} to-transparent p-5`}
              >
                <span className="font-grotesk text-lg font-semibold">{p.name}</span>
              </div>
            ))}
          />
        </Section>

        {/* ---------- Footer ---------- */}
        <footer className="border-t border-vx-border px-6 py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
            <VedvixLogo size={26} />
            <p className="flex items-center gap-2 text-sm text-vx-text-subtle">
              <img src={vedvixSymbolWhite} alt="" width={11} height={12} className="opacity-50" />
              Vedvix UI Kit · brand palette #2F5AF8 on #060B1A · Space Grotesk
            </p>
            <a
              href="#/"
              className="text-sm text-vx-accent-soft underline-offset-4 hover:underline"
            >
              ← Back to the Vedvix site
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
