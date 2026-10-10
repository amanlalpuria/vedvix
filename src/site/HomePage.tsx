import type {ReactNode} from 'react';
import {motion} from 'motion/react';
import {ArrowRight, ArrowUpRight, Bot, Cloud, Layers, Mail, Phone, ShoppingBag, Smartphone, Store} from 'lucide-react';
import {Badge, Button, GlowOrb, HorizontalScroller, Marquee, Reveal, Section, Spotlight, Stagger, StaggerItem, useReducedMotion, VedvixMark} from '../ui';
import {EASE} from '../ui/tokens';
import {Link, navigate} from '../router';
import {FEATURED, PROJECTS} from '../data/projects';
import {CONTACT} from './Layout';
import {Eyebrow, GridBackdrop, PhoneFrame, ProjectCard, usePageMeta} from './shared';
import {trackContactClick} from './analytics';
import {HOME_SEO} from './seo';

const nyc = FEATURED;
const NYC_ACCENT = nyc.accent;

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const reduced = useReducedMotion();
  const enter = (delay: number) =>
    reduced ? {} : {initial: {opacity: 0, y: 28}, animate: {opacity: 1, y: 0}, transition: {duration: 0.8, ease: EASE.out, delay}};

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
      <GridBackdrop />
      <GlowOrb className="-left-40 -top-40" size={620} opacity={0.32} />
      <GlowOrb className="-right-32 top-40" size={420} color={NYC_ACCENT} opacity={0.16} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div {...enter(0)}>
            <Badge variant="brand" dot>Product studio · Jaipur, building for the world</Badge>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-7 font-grotesk text-[clamp(2.9rem,7.4vw,6.2rem)] font-bold leading-[0.95] tracking-[-0.03em] text-vx-text"
          >
            We build products
            <br />
            that{' '}
            <span className="relative inline-block text-vx-accent-soft">
              actually ship.
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-vx-accent"
                initial={reduced ? false : {scaleX: 0}}
                animate={{scaleX: 1}}
                transition={{duration: 0.9, ease: EASE.out, delay: 0.7}}
              />
            </span>
          </motion.h1>

          <motion.p {...enter(0.16)} className="mt-8 max-w-xl text-lg leading-relaxed text-vx-text-muted sm:text-xl">
            From idea to live product: AI apps, SaaS platforms, marketplaces and mobile apps, designed and engineered end to end by one team.
          </motion.p>

          <motion.div {...enter(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              as="a"
              href="/#contact"
              size="lg"
              rightIcon={<ArrowRight size={18} />}
              onClick={(e) => {
                e.preventDefault();
                trackContactClick('contact', 'hero');
                navigate('/#contact');
              }}
            >
              Start a project
            </Button>
            <Button
              as="a"
              href="/work"
              size="lg"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                navigate('/work');
              }}
            >
              See our work
            </Button>
          </motion.div>

          <motion.dl {...enter(0.32)} className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-vx-border pt-8">
            {[
              ['12+', 'Products shipped'],
              ['3', 'AI platforms live'],
              ['100%', 'On-time delivery'],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-grotesk text-3xl font-bold tracking-tight text-vx-text sm:text-4xl">{v}</dd>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-vx-text-subtle">{l}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}

/** Two NYC Beer Kegs screens floating, with a "latest launch" card. */
function HeroShowcase() {
  const reduced = useReducedMotion();
  const shots = nyc.caseStudy!.highlights;
  const float = (d: number) =>
    reduced ? {} : {animate: {y: [0, -12, 0]}, transition: {duration: 7, repeat: Infinity, ease: 'easeInOut' as const, delay: d}};

  return (
    <motion.div
      initial={reduced ? false : {opacity: 0, scale: 0.96}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 1, ease: EASE.out, delay: 0.2}}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="relative aspect-[5/6]">
        <motion.div {...float(0)} className="absolute left-[4%] top-[6%] w-[48%] -rotate-[7deg]">
          <PhoneFrame shot={shots[0].shots[0]} loading="eager" fetchPriority="high" />
        </motion.div>
        <motion.div {...float(1.2)} className="absolute right-[4%] top-0 w-[48%] rotate-[5deg]">
          <PhoneFrame shot={shots[2].shots[0]} loading="eager" />
        </motion.div>

        <Link
          href={`/work/${nyc.slug}`}
          className="group absolute bottom-0 left-1/2 w-[min(92%,400px)] -translate-x-1/2 rounded-3xl border border-white/12 bg-vx-bg-raised/85 p-5 shadow-vx-card backdrop-blur-xl transition-colors hover:border-white/25"
        >
          <div className="flex items-center gap-4">
            <img src={nyc.logo} alt="" width={52} height={52} className="h-13 w-13 rounded-2xl" />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{color: NYC_ACCENT}}>
                Latest launch
              </p>
              <p className="font-grotesk text-lg font-bold text-vx-text">{nyc.name}</p>
              <p className="truncate text-sm text-vx-text-muted">4 apps · 1 backend · all five boroughs</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-vx-accent">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

/* --------------------------------------------------------- Client strip */

function ClientStrip() {
  return (
    <div className="border-y border-vx-border bg-vx-bg-raised/40 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-vx-text-subtle">
        Products we have designed, built and shipped
      </p>
      <Marquee speed={40} gap={48}>
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="flex items-center gap-4 whitespace-nowrap font-grotesk text-2xl font-semibold text-vx-text-subtle transition-colors hover:text-vx-text sm:text-3xl"
          >
            <VedvixMark size={14} armColor="currentColor" nodeColor="var(--color-vx-accent)" />
            {p.name}
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

/* ------------------------------------------------------ Featured project */

function FeaturedCaseStudy() {
  const cs = nyc.caseStudy!;
  return (
    <section className="relative px-6 py-24 sm:py-32" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[36px] border border-white/10 p-6 sm:p-10 lg:p-14"
            style={{background: `radial-gradient(90% 70% at 100% 100%, ${NYC_ACCENT}33, transparent 60%), linear-gradient(160deg, #0d1a33, #08101f)`}}
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <img src={nyc.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-xl" />
                  <Eyebrow style={{color: NYC_ACCENT}}>Featured case study · {nyc.metadata.year}</Eyebrow>
                </div>
                <h2 id="featured-title" className="mt-6 font-grotesk text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                  NYC Beer Kegs
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-vx-text-muted">
                  An alcohol delivery marketplace for New York City, built end to end: a storefront, an Android app, a store and operations console, and a courier app, all running on one backend we designed.
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                  {nyc.details.results.map((r) => (
                    <div key={r.label} className="bg-[#0b1527] p-4">
                      <dd className="font-grotesk text-3xl font-bold" style={{color: NYC_ACCENT}}>{r.value}</dd>
                      <dt className="mt-1 text-xs leading-snug text-vx-text-muted">{r.label}</dt>
                    </div>
                  ))}
                </dl>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {cs.surfaces.map((s) => (
                    <li key={s.name} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-vx-text">
                      {s.name}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={`/work/${nyc.slug}`}
                    className="inline-flex h-14 items-center gap-2 rounded-full px-8 font-medium text-white transition-transform active:scale-[0.97]"
                    style={{background: NYC_ACCENT, boxShadow: `0 14px 40px -12px ${NYC_ACCENT}`}}
                  >
                    Read the case study <ArrowRight size={18} />
                  </Link>
                  <a
                    href={nyc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center gap-2 rounded-full border border-white/15 px-7 font-medium text-vx-text hover:bg-white/[0.06]"
                  >
                    nycbeerkeg.com <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

              <div className="relative grid grid-cols-3 items-end gap-3 sm:gap-5">
                <PhoneFrame shot={cs.highlights[1].shots[0]} className="translate-y-6" />
                <PhoneFrame shot={cs.highlights[0].shots[0]} className="-translate-y-4" />
                <PhoneFrame shot={cs.highlights[5].shots[0]} className="translate-y-10" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Services */

const SERVICES = [
  {icon: Bot, title: 'AI product development', body: 'LLM features, document extraction, RAG assistants and AI pipelines built into real workflows and running in production.', proof: 'Viaflo · Veraeaty.ai'},
  {icon: Store, title: 'Marketplaces', body: 'Multi-sided platforms with location search, split orders, payouts to sellers and the operations tooling to run them day to day.', proof: 'NYC Beer Kegs · KAPS · Urban Culture'},
  {icon: Layers, title: 'SaaS & web platforms', body: 'Multi-tenant products with role-based access, approvals, audit trails and reporting that finance teams trust.', proof: 'Viaflo · KAPS'},
  {icon: Smartphone, title: 'Mobile apps', body: 'iOS and Android apps, native or cross-platform, with push, payments, camera and maps done properly.', proof: 'NYC Beer Kegs · Sipstr'},
  {icon: Cloud, title: 'Cloud, backend & DevOps', body: 'Spring Boot and FastAPI backends, Terraform on AWS, and CI/CD that ships to dev, staging and prod from a branch.', proof: 'KAPS · Veraeaty.ai · Viaflo'},
  {icon: ShoppingBag, title: 'Websites that convert', body: 'Fast, SEO-ready marketing sites and catalogs with animation that serves the story.', proof: 'Shell Consultancy · Maruti'},
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title="One team from first sketch to production"
      lede="Design, engineering, infrastructure and launch under one roof, so nothing gets lost between agencies."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({icon: Icon, title, body, proof}) => (
          <StaggerItem key={title} className="h-full">
            <Spotlight className="h-full rounded-3xl">
              <div className="flex h-full flex-col rounded-3xl border border-vx-border bg-vx-bg-raised/60 p-7 transition-colors group-hover:border-vx-border-strong">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-vx-accent/12 text-vx-accent-soft ring-1 ring-inset ring-vx-accent/25">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 font-grotesk text-xl font-semibold text-vx-text">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-vx-text-muted">{body}</p>
                <p className="mt-6 border-t border-vx-border pt-4 text-sm text-vx-text-subtle">
                  Seen in <span className="text-vx-text-muted">{proof}</span>
                </p>
              </div>
            </Spotlight>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* ----------------------------------------------------------- Selected work */

function SelectedWork() {
  const others = PROJECTS.filter((p) => p.slug !== nyc.slug).slice(0, 4);
  return (
    <Section id="work" eyebrow="Selected work" title="More products we have shipped" className="bg-vx-bg-raised/30">
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} index={i + 1} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 flex justify-center">
        <Button
          as="a"
          href="/work"
          variant="secondary"
          size="lg"
          rightIcon={<ArrowRight size={18} />}
          onClick={(e) => {
            e.preventDefault();
            navigate('/work');
          }}
        >
          View all {PROJECTS.length} projects
        </Button>
      </Reveal>
    </Section>
  );
}

/* ----------------------------------------------------------------- Process */

const STEPS = [
  {title: 'Discover', body: 'We dig into your goals, users and the gap in the market, then agree on what the first release must do.'},
  {title: 'Design', body: 'User flows, UI and clickable prototypes you can put in front of customers before we write production code.'},
  {title: 'Build', body: 'Agile sprints with weekly demos. You see working software every week, not a status report.'},
  {title: 'Launch', body: 'QA, end-to-end tests, store submissions and production infrastructure, with a release checklist.'},
  {title: 'Scale', body: 'Monitoring, performance work and new features as your users and data grow.'},
];

function Process() {
  return (
    <Section id="process" eyebrow="How we work" title="A lifecycle built to ship" lede="Five stages, the same team throughout, and working software at every checkpoint.">
      <ol className="relative grid gap-4 md:grid-cols-5">
        <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-vx-accent/60 via-vx-border to-transparent md:block" />
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.07} className="relative">
            <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-vx-accent/40 bg-vx-bg font-grotesk text-lg font-bold text-vx-accent-soft">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 font-grotesk text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-vx-text-muted">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------ Testimonials */

function Testimonials() {
  const quotes = PROJECTS.filter((p) => p.details.testimonial && p.details.testimonial.author !== 'CEO');
  return (
    <Section id="testimonials" eyebrow="Client words" title="What founders say after launch" className="bg-vx-bg-raised/30">
      <HorizontalScroller label="Client testimonials" itemClassName="w-[85vw] sm:w-[440px]" gap={20}>
        {quotes.map((p) => {
          const t = p.details.testimonial!;
          return (
            <figure key={p.slug} className="flex h-full flex-col justify-between rounded-3xl border border-vx-border bg-vx-bg-raised p-8">
              <blockquote className="font-grotesk text-xl leading-snug text-vx-text">“{t.text}”</blockquote>
              <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-vx-border pt-6">
                <div>
                  <p className="font-semibold text-vx-text">{t.author}</p>
                  <p className="text-sm text-vx-text-muted">{t.role}</p>
                </div>
                <Link href={`/work/${p.slug}`} className="shrink-0 text-sm font-medium text-vx-accent-soft hover:underline">
                  Case study →
                </Link>
              </figcaption>
            </figure>
          );
        })}
      </HorizontalScroller>
    </Section>
  );
}

/* ------------------------------------------------------------------- About */

const TEAM = [
  {name: 'Deepanshi Gaur', role: 'Founder', initials: 'DG', linkedin: 'https://www.linkedin.com/in/deepanshi-gaur-4a6862224/'},
  {name: 'Yash Gandhi', role: 'Full Stack Developer', initials: 'YG', linkedin: 'https://www.linkedin.com/in/gandhiyash24/'},
  {name: 'Himanshu Gaur', role: 'AI Developer', initials: 'HG', linkedin: 'https://www.linkedin.com/in/himanshu-gaur-395924204/'},
];

function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-4 font-grotesk text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Born in Jaipur.
            <br />
            Building globally.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-vx-text-muted">
            Vedvix is a product studio, not a body shop. We treat every product like our own, with user-centred design and an architecture that can grow from day zero.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-vx-text-muted">
            From our base in the historic city of Jaipur, we work with founders in the US, the Middle East and India who want to launch something real and keep improving it after launch.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[32px] border border-vx-border bg-vx-bg-raised p-8 sm:p-10">
            <p className="font-grotesk text-2xl font-semibold leading-snug text-vx-text">
              Speed without quality is a disaster. Quality without speed is a missed opportunity. We balance both.
            </p>
            <ul className="mt-10 space-y-3">
              {TEAM.map((m) => (
                <li key={m.name}>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-colors hover:border-vx-border hover:bg-white/[0.03]"
                    aria-label={`${m.name}, ${m.role}, on LinkedIn`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-vx-accent/15 font-grotesk font-bold text-vx-accent-soft ring-1 ring-inset ring-vx-accent/30">
                      {m.initials}
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-vx-text">{m.name}</span>
                      <span className="block text-sm text-vx-text-muted">{m.role}</span>
                    </span>
                    <ArrowUpRight size={18} className="text-vx-text-subtle transition-colors group-hover:text-vx-text" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------------- CTA */

export function ContactCTA({title}: {title?: ReactNode}) {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-vx-border bg-gradient-to-br from-vx-accent/25 via-vx-bg-raised to-vx-bg px-6 py-16 text-center sm:px-16 sm:py-24">
            <GridBackdrop />
            <div className="relative">
              <Eyebrow>Start a project</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-3xl font-grotesk text-4xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
                {title ?? 'Have a product in mind? Let’s ship it.'}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-vx-text-muted">
                Tell us what you are building and we will come back with questions, a rough plan and a timeline.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  as="a"
                  href={`mailto:${CONTACT.email}?subject=New%20project%20enquiry`}
                  size="lg"
                  leftIcon={<Mail size={18} />}
                  onClick={() => trackContactClick('email', 'contact-section')}
                >
                  {CONTACT.email}
                </Button>
                <Button
                  as="a"
                  href={CONTACT.phoneHref}
                  size="lg"
                  variant="secondary"
                  leftIcon={<Phone size={18} />}
                  onClick={() => trackContactClick('phone', 'contact-section')}
                >
                  {CONTACT.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageMeta(HOME_SEO.title, HOME_SEO.description, '/');
  return (
    <>
      <Hero />
      <ClientStrip />
      <FeaturedCaseStudy />
      <Services />
      <SelectedWork />
      <Process />
      <Testimonials />
      <About />
      <ContactCTA />
    </>
  );
}
