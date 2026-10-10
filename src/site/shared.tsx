import {useEffect} from 'react';
import type {CSSProperties, ImgHTMLAttributes, ReactNode} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {cn, TiltCard} from '../ui';
import {Link} from '../router';
import {getProject} from '../data/projects';
import type {Project, Shot} from '../data/projects';
import {IMAGE_DIMENSIONS} from '../data/imageDimensions';
import {buildSeoMetadata, createStructuredData} from './seo';
import type {SeoMetadata} from './seo';

type WebpImageProps = ImgHTMLAttributes<HTMLImageElement> & {pictureClassName?: string};

export function WebpImage({src, width, height, pictureClassName = 'block', ...props}: WebpImageProps) {
  const dimensions = src ? IMAGE_DIMENSIONS[src] : undefined;
  const webpSrc = src?.replace(/\.jpe?g$/i, '.webp');
  const hasWebpSource = !!src && /\.(jpe?g)$/i.test(src);

  return (
    <picture className={pictureClassName}>
      {hasWebpSource && <source type="image/webp" srcSet={webpSrc} />}
      <img
        {...props}
        src={src}
        width={width ?? dimensions?.[0]}
        height={height ?? dimensions?.[1]}
      />
    </picture>
  );
}

/** Keep <title>, description and canonical in sync with the current route. */
export function usePageMeta(title: string, description: string, path: string, options: Pick<SeoMetadata, 'image' | 'noindex'> = {}) {
  useEffect(() => {
    const metadata = buildSeoMetadata({title, description, path, ...options});
    document.title = metadata.title;
    const setMeta = (selector: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        const name = selector.match(/name="([^"]+)"/)?.[1];
        const property = selector.match(/property="([^"]+)"/)?.[1];
        if (name) element.name = name;
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = value;
    };
    const setLink = (selector: string, value: string) => {
      let element = document.head.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement('link');
        element.rel = 'canonical';
        document.head.appendChild(element);
      }
      element.href = value;
    };

    setMeta('meta[name="description"]', metadata.description);
    setMeta('meta[property="og:title"]', metadata.title);
    setMeta('meta[property="og:description"]', metadata.description);
    setMeta('meta[property="og:type"]', options.image ? 'article' : 'website');
    setMeta('meta[property="og:url"]', metadata.canonicalUrl);
    setMeta('meta[property="og:image"]', metadata.imageUrl);
    setMeta('meta[property="og:image:alt"]', options.image ? `${metadata.title} preview` : 'Vedvix product studio');
    setMeta('meta[name="twitter:title"]', metadata.title);
    setMeta('meta[name="twitter:description"]', metadata.description);
    setMeta('meta[name="twitter:image"]', metadata.imageUrl);
    setMeta('meta[name="robots"]', metadata.noindex ? 'noindex,follow' : 'index,follow');
    setLink('link[rel="canonical"]', metadata.canonicalUrl);

    const schema = document.getElementById('site-schema');
    if (schema) {
      const projectSlug = metadata.path.match(/^\/work\/([^/]+)$/)?.[1];
      const project = projectSlug ? getProject(projectSlug) : undefined;
      schema.textContent = JSON.stringify(createStructuredData(metadata, project));
    }
  }, [title, description, path, options.image, options.noindex]);
}

/** Small tracked label above headings. */
export function Eyebrow({children, className, style}: {children: ReactNode; className?: string; style?: CSSProperties}) {
  return (
    <span
      className={cn('text-xs font-semibold uppercase tracking-[0.22em] text-vx-accent-soft', className)}
      style={style}
    >
      {children}
    </span>
  );
}

/** A screenshot inside a slim device bezel. */
export function PhoneFrame({
  shot,
  className,
  loading = 'lazy',
  fetchPriority,
}: {
  shot: Pick<Shot, 'src' | 'alt'>;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  key?: string;
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-white/15 bg-vx-ink p-1.5',
        'shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]',
        className,
      )}
    >
      <WebpImage
        src={shot.src}
        alt={shot.alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className="block h-auto w-full rounded-[1.6rem]"
      />
    </div>
  );
}

/** A desktop screenshot in a browser-style frame. */
export function ScreenFrame({shot, className}: {shot: Shot; className?: string; key?: string}) {
  return (
    <figure className={cn('min-w-0', className)}>
      <div className="overflow-hidden rounded-2xl border border-white/12 bg-vx-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <WebpImage src={shot.src} alt={shot.alt} loading="lazy" decoding="async" className="block h-auto w-full bg-white" />
      </div>
      {shot.caption && <figcaption className="mt-3 text-center text-sm text-vx-text-subtle">{shot.caption}</figcaption>}
    </figure>
  );
}

/** Portfolio card linking to a case study. */
export function ProjectCard({project, index, size = 'md'}: {project: Project; index: number; size?: 'md' | 'lg'}) {
  return (
    <TiltCard max={5} hoverScale={1.01} className="h-full rounded-[28px]">
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-vx-border bg-vx-bg-raised transition-colors duration-300 hover:border-vx-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent"
        aria-label={`${project.name} case study`}
      >
        <div className={cn('relative overflow-hidden', size === 'lg' ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-[16/10]')}>
          <WebpImage
            src={project.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vx-bg-raised via-vx-bg-raised/10 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-vx-bg/70 px-3 py-1 font-grotesk text-xs font-medium text-vx-text backdrop-blur">
            {project.metadata.year}
          </span>
          <span className="absolute right-5 top-4 font-grotesk text-3xl font-bold text-white/25" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {project.categories.slice(0, 3).map((c) => (
              <span key={c} className="rounded-full border border-vx-border px-2.5 py-0.5 text-xs text-vx-text-muted">
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className={cn('font-grotesk font-bold tracking-tight text-vx-text', size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl')}>
                {project.name}
              </h3>
              <p className="mt-2 leading-relaxed text-vx-text-muted">{project.tagline}</p>
            </div>
            <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-vx-border text-vx-text transition-all duration-300 group-hover:border-vx-accent group-hover:bg-vx-accent group-hover:text-white">
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}

/** Subtle square grid used behind heroes. */
export function GridBackdrop({className}: {className?: string}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
      }}
    />
  );
}
