import type {Project} from '../data/projects';

export const SITE_URL = 'https://vedvix.in';

export const HOME_SEO = {
  title: 'Vedvix | AI Product Studio & Software Development',
  description:
    'Vedvix is a Jaipur product studio building AI products, SaaS platforms, marketplaces and mobile apps from concept to launch.',
};

export const WORK_SEO = {
  title: 'Case Studies | Vedvix Product Studio',
  description:
    'Explore Vedvix case studies in AI, SaaS, marketplaces, mobile apps and cloud engineering, including NYC Beer Kegs, Viaflo and Sipstr.',
};

export type SeoMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

function fitText(value: string, limit: number) {
  const text = value.replace(/\s+/g, ' ').trim();
  const characters = Array.from(text);
  if (characters.length <= limit) return text;

  const clipped = characters.slice(0, limit + 1).join('');
  const lastSpace = clipped.lastIndexOf(' ');
  return clipped.slice(0, lastSpace > 0 ? lastSpace : limit).replace(/[ ,;:|-]+$/g, '');
}

export function buildSeoMetadata(metadata: SeoMetadata) {
  const parsedPath = new URL(metadata.path, SITE_URL).pathname;
  const path = parsedPath === '/' ? '/' : parsedPath.replace(/\/+$/, '');
  const imageUrl = metadata.image
    ? new URL(metadata.image, SITE_URL).href
    : `${SITE_URL}/og.png`;

  return {
    title: fitText(metadata.title, 60),
    description: fitText(metadata.description, 160),
    path,
    canonicalUrl: `${SITE_URL}${path}`,
    imageUrl,
    noindex: metadata.noindex ?? false,
  };
}

export function createStructuredData(
  metadata: ReturnType<typeof buildSeoMetadata>,
  project?: Project,
) {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const breadcrumbs = [
    {name: 'Home', path: '/'},
    ...(metadata.path === '/work' || project ? [{name: 'Work', path: '/work'}] : []),
    ...(project ? [{name: project.name, path: metadata.path}] : []),
  ];

  const page = project
    ? {
        '@type': 'Article',
        '@id': `${metadata.canonicalUrl}#case-study`,
        headline: metadata.title,
        description: metadata.description,
        image: metadata.imageUrl,
        mainEntityOfPage: metadata.canonicalUrl,
        author: {'@id': organizationId},
        publisher: {'@id': organizationId},
        articleSection: project.categories,
        keywords: project.tags,
        about: project.name,
      }
    : {
        '@type': metadata.path === '/work' ? 'CollectionPage' : 'WebPage',
        '@id': `${metadata.canonicalUrl}#webpage`,
        name: metadata.title,
        description: metadata.description,
        url: metadata.canonicalUrl,
        isPartOf: {'@id': websiteId},
        primaryImageOfPage: metadata.imageUrl,
      };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Vedvix',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        email: 'hello@vedvix.in',
        telephone: '+91 94606 88385',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot 24 East Shyam Vihar, Charan Nadi, Murlipura',
          addressLocality: 'Jaipur',
          addressRegion: 'Rajasthan',
          postalCode: '302039',
          addressCountry: 'IN',
        },
        sameAs: [
          'https://linkedin.com/company/vedvix',
          'https://twitter.com/vedvix',
          'https://github.com/vedvix',
          'https://www.instagram.com/vedvix2/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: 'Vedvix',
        publisher: {'@id': organizationId},
        inLanguage: 'en-IN',
      },
      page,
      {
        '@type': 'BreadcrumbList',
        '@id': `${metadata.canonicalUrl}#breadcrumbs`,
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: breadcrumb.name,
          item: `${SITE_URL}${breadcrumb.path}`,
        })),
      },
    ],
  };
}
