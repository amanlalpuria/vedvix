# Vedvix brand assets (vendored)

Copied verbatim from the official logo system (`D:/Projects/Design Vedvix Logo`)
so this repo has **no external dependency** for branding.

| File | Size | Use |
|---|---|---|
| `vedvix-symbol.svg` | vector | Full-color mark (blue node), transparent |
| `vedvix-symbol-white.svg` | vector | White arms + soft-blue node — dark backgrounds |
| `vedvix-symbol-mono-white.svg` | vector | One-color white knockout |
| `vedvix-lockup-dark.png` | 1600×600 | Symbol + wordmark on `#060B1A` |
| `vedvix-lockup-white.png` | transparent | One-color white lockup |
| `vedvix-app-icon.png` | 512² | App / PWA icon (gradient tile) |
| `vedvix-open-graph.png` | 1200×630 | `og:image` / social share |

## Using them

Import the specific file you need — Vite returns a hashed URL string, and
only referenced files land in `dist/`:

```tsx
import appIcon from '@/ui/brand/assets/vedvix-app-icon.png';
<link rel="icon" href={appIcon} />
```

For anything that scales, themes, or animates, use the components instead:

```tsx
import {VedvixMark, VedvixLogo} from '@/ui';
<VedvixLogo size={28} animated />
```
