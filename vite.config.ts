import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {PROJECTS} from './src/data/projects';
import {buildSeoMetadata, createStructuredData, HOME_SEO, SITE_URL, WORK_SEO} from './src/site/seo';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * GitHub Pages serves static files only. After the build, write a copy of
 * index.html for every client route (with that route's title, description,
 * canonical URL and social image) so deep links return 200 and preview well
 * when shared. `404.html` covers anything else.
 */
function staticRoutes(): Plugin {
  let outDir = 'dist';
  return {
    name: 'vedvix-static-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

      const render = (route: string, title: string, description: string, image?: string, project?: (typeof PROJECTS)[number], noindex = false) => {
        const metadata = buildSeoMetadata({path: route, title, description, image, noindex});
        const t = escapeHtml(metadata.title);
        const d = escapeHtml(metadata.description);
        const url = escapeHtml(metadata.canonicalUrl);
        const imageUrl = escapeHtml(metadata.imageUrl);
        const schema = JSON.stringify(createStructuredData(metadata, project)).replace(/</g, '\\u003c');
        let html = template
          .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
          .replace(/(<meta name="description" content=")[^"]*"/, `$1${d}"`)
          .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
          .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
          .replace(/(<meta property="og:type" content=")[^"]*"/, `$1${project ? 'article' : 'website'}"`)
          .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${imageUrl}"`)
          .replace(/(<meta property="og:image:alt" content=")[^"]*"/, `$1${escapeHtml(`${metadata.title} preview`)}"`)
          .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${t}"`)
          .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${d}"`)
          .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${imageUrl}"`)
          .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
          .replace(/<script id="site-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="site-schema" type="application/ld+json">${schema}</script>`)
          .replace(/<meta name="robots" content="[^"]*"\s*\/?>\s*/g, '');

        if (noindex) html = html.replace('</head>', '    <meta name="robots" content="noindex,follow" />\n  </head>');
        return html;
      };

      const write = (route: string, html: string) => {
        const dir = path.join(outDir, route);
        fs.mkdirSync(dir, {recursive: true});
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      };

      fs.writeFileSync(path.join(outDir, 'index.html'), render('/', HOME_SEO.title, HOME_SEO.description));
      write('work', render('/work', WORK_SEO.title, WORK_SEO.description));
      for (const p of PROJECTS) {
        write(
          `work/${p.slug}`,
          render(`/work/${p.slug}`, `${p.name} case study | Vedvix`, `${p.tagline} ${p.desc}`, p.cover, p),
        );
      }
      fs.writeFileSync(
        path.join(outDir, '404.html'),
        render(
          '/404',
          'Page not found | Vedvix',
          'This page does not exist. Browse Vedvix case studies or head back home.',
          undefined,
          undefined,
          true,
        ),
      );

      const routes = ['/', '/work', ...PROJECTS.map((project) => `/work/${project.slug}`)];
      const urls = routes
        .map((route) => `  <url><loc>${SITE_URL}${route === '/' ? '/' : escapeHtml(route)}</loc></url>`)
        .join('\n');
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      );
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), staticRoutes()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
