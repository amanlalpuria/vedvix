# Vedvix UI Kit

Brand-accurate, dark-first React components for production. Self-contained under
`src/ui/` — foundation, motion primitives, primitives, and the signature
scroll patterns from the Synapse-style reference.

- **Stack:** React 19 · TypeScript · Tailwind v4 · `motion` (Framer Motion) · `lucide-react`
- **Palette:** official Vedvix logo system — `#2F5AF8` accent on `#060B1A` navy, Space Grotesk
- **Live demo:** run the app and open [`/#showcase`](http://localhost:3000/#showcase)

```tsx
import {Button, Card, Section, DataView, TextReveal, CardDeck} from '@/ui';
```

---

## Principles

1. **Reduced-motion is a first-class path.** Every animated component checks
   `useReducedMotion()` and renders a static, fully legible fallback — never a
   degraded one. Wrap your app once:

   ```tsx
   import {MotionConfig} from 'motion/react';
   <MotionConfig reducedMotion="user">{children}</MotionConfig>
   ```

2. **Every async view has four states.** `DataView` resolves
   loading → error → empty → success in one place so screens stay consistent.

3. **Namespaced tokens.** All colors/radii/shadows are `--*-vx-*` custom
   properties (`bg-vx-bg`, `text-vx-accent`, `rounded-[var(--radius-vx-lg)]`).
   Drops into any surface without colliding with existing styles.

4. **`className` always wins.** Components compose minimal base classes and
   append your `className` last. `cn()` de-dupes; swap in `tailwind-merge` if
   you need full conflict resolution (one-line change in `cn.ts`).

5. **Polymorphic where it matters.** `Button` → `button | a`, `Card`/`Reveal`
   take `as`. All primitives forward refs.

---

## Foundation

| Export | Purpose |
|---|---|
| `cn(...values)` | clsx-style class composer with exact-duplicate de-dup |
| `DURATION`, `EASE`, `SPRING` | shared motion vocabulary (`EASE.out` + `DURATION.base` for entrances; springs for pointer/scroll) |
| `Z`, `SCROLL_OFFSET` | z-index scale; named `useScroll` offsets |
| `BRAND`, `VAR` | palette as JS hex / CSS-var strings (for canvas, SVG, charts) |
| `useReducedMotion()` | boolean (never null) |
| `useMediaQuery(q)`, `useIsMobile()`, `useIsTouch()`, `useMounted()` | environment hooks |

Brand files (SVG/PNG) are vendored in [`brand/assets/`](./brand/assets/) — import
the specific file you need; they are **not** in the barrel so unused ones
tree-shake out.

---

## Motion primitives

| Component | Key props | Notes |
|---|---|---|
| `<Reveal>` | `as`, `y=24`, `blur=true`, `delay`, `amount=0.3`, `once=true` | scroll-triggered fade + rise; the workhorse |
| `<Stagger>` / `<StaggerItem>` | `gap=0.08`, `delay`, `y=20` | orchestrated cascade |
| `<TextReveal>` | `as='p'`, `from=0.12`, `highlight={[]}` | word-by-word "read-through"; `children` must be a plain string; exposes full text via `aria-label` |
| `<Parallax>` | `speed=0.25`, `axis='y'`, `smooth=true` | decorative layers only — never move reading content |
| `<TiltCard>` | `max=9`, `hoverScale=1.02`, `glare=true` | auto-off on touch; give it `rounded-*` |
| `<Marquee>` | `speed=60` (px/s), `direction`, `gap=56`, `pauseOnHover` | `useAnimationFrame`-driven; pauses on hover + focus-within; one `aria-hidden` copy |
| `<GlowOrb>` | `color`, `size`, `blur`, `opacity`, `drift` | decorative; `position:absolute`, `aria-hidden` |
| `<Spotlight>` | `radius=380`, `color` | pointer-follow highlight over a container |
| `<Sparkle>` | `size=120` | the 4-point neural star + bloom |
| `<Equalizer>` | `bars=5`, `playing` | tiny "live" bars |

---

## Primitives

| Component | API surface |
|---|---|
| `<Button>` | `variant: primary\|secondary\|ghost\|subtle\|danger\|link` · `size: sm\|md\|lg\|icon` · `loading` (spinner + `aria-busy`, keeps width) · `leftIcon`/`rightIcon` · `fullWidth` · `as="a" href` · forwards ref |
| `<Spinner>` | `size`, `weight`, `label` (`null` to hide from a11y tree) |
| `<Skeleton>` / `<SkeletonText>` | `circle`, `radius` · `lines`, `lastLineWidth` — shimmer removed under reduced-motion |
| `<Card>` | `variant: glass\|solid\|outline\|gradient` · `padding: none\|sm\|md\|lg` · `interactive` · `as` · compound: `Card.Header/Title/Description/Content/Footer` |
| `<Badge>` | `variant: brand\|neutral\|success\|warning\|danger\|outline` · `size: sm\|md` · `dot` |
| `<Avatar>` | `src`, `name`, `size` — falls back `image → initials → glyph` |
| `<AvatarStack>` | `people: {id?,name,src?}[]`, `max=4`, `size`, `label` — collapses overflow to `+N` |
| `<VedvixMark>` / `<VedvixLogo>` | `size`, `armColor`, `nodeColor`, `animated` (self-drawing), `title` (else decorative) |

---

## Patterns

| Component | API surface |
|---|---|
| `<Section>` | `id`, `eyebrow`, `title`, `lede`, `align`, `container=true` — animated header + shared max-width + `scroll-mt` |
| `<EmptyState>` | `icon`, `title`, `description`, `action`, `compact` — "nothing here yet", not errors |
| `<ErrorState>` | `title`, `description`, `onRetry`, `retryLabel`, `icon`, `compact` — `role="alert"` |
| `<DataView<T>>` | `data`, `isLoading`, `error`, `onRetry`, `isEmpty?`, `loadingFallback`/`emptyFallback`/`errorFallback`, `children: (data) => ReactNode` |
| `<SkeletonGrid>` | `count=6` — common `loadingFallback` |
| `<HorizontalScroller>` | `label` (required, a11y) · `gap` · `itemClassName` · `controls` — snap scroll, drag, ArrowLeft/Right, edge fades, prev/next |
| `<CardDeck>` | `columns` — perspective fan-in on scroll; reduced-motion → grid |
| `<GalleryScatter>` | `items: ReactNode[]`, `columns` — parallax + idle float; reduced-motion → grid |

---

## Usage

### Async list with all four states

```tsx
import {DataView, SkeletonGrid, EmptyState, Card, Button} from '@/ui';
import {Inbox} from 'lucide-react';

<DataView
  data={projects}
  isLoading={isLoading}
  error={error}
  onRetry={refetch}
  loadingFallback={<SkeletonGrid count={6} />}
  emptyFallback={
    <EmptyState
      icon={<Inbox size={22} />}
      title="No projects yet"
      description="Published work shows up here."
      action={<Button size="sm">New project</Button>}
    />
  }
>
  {(rows) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((p) => (
        <Card key={p.id} interactive>
          <Card.Title>{p.name}</Card.Title>
          <Card.Description>{p.kind}</Card.Description>
        </Card>
      ))}
    </div>
  )}
</DataView>
```

### A landing section with the Synapse choreography

```tsx
import {Section, TextReveal, CardDeck, Card, Reveal, Button} from '@/ui';

<Section id="services" eyebrow="What we do" title="Services">
  <Reveal>
    <TextReveal highlight={['ship']}>
      From idea to a product that ships in weeks, not quarters.
    </TextReveal>
  </Reveal>

  <CardDeck className="mt-12">
    {services.map((s) => (
      <Card key={s.title} interactive>
        <Card.Title>{s.title}</Card.Title>
        <Card.Description className="mt-1.5">{s.body}</Card.Description>
      </Card>
    ))}
  </CardDeck>
</Section>
```

### Button states

```tsx
<Button leftIcon={<Plus size={16} />}>New</Button>
<Button variant="secondary" as="a" href="/docs">Docs</Button>
<Button loading={saving} onClick={save}>Save changes</Button>
<Button variant="danger" size="sm">Delete</Button>
```

---

## Accessibility checklist (met by the kit)

- Keyboard focus ring on every interactive element (`:focus-visible`, 2px accent, offset).
- `Button loading` sets `aria-busy` and disables; label stays mounted (no width jump).
- `HorizontalScroller` is a labelled `region`, focusable, arrow-key scrollable, with disabled-at-edge controls.
- `TextReveal` exposes the whole string via `aria-label`; animated word spans are `aria-hidden`.
- `ErrorState` → `role="alert"`; `DataView` loading → `aria-live="polite"` + `aria-busy`.
- `Avatar` always has meaningful `alt` (or is empty when purely decorative); `AvatarStack` is a labelled `group`.
- Decorative motion layers (`GlowOrb`, `Sparkle`, glare, marquee dupes) are `aria-hidden`.
- All motion honours `prefers-reduced-motion`.

## Roadmap (not yet in v1)

`Modal`/`Dialog` (focus trap), `Toast` provider, `Tabs`, `Accordion`, `Tooltip`,
`Field`/`Input` with validation wiring, `Select`/`Combobox`. Build these on the
same token + reduced-motion contract.
