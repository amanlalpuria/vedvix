/**
 * Vedvix UI Kit — public surface.
 *
 * Brand-accurate, dark-first React components for production. Every animated
 * piece honours `prefers-reduced-motion`; every stateful pattern ships
 * loading / empty / error / success out of the box.
 *
 * Recommended app setup:
 *   import {MotionConfig} from 'motion/react';
 *   <MotionConfig reducedMotion="user"> … </MotionConfig>
 */

/* Foundation */
export {cn, type ClassValue} from './cn';
export {DURATION, EASE, SPRING, Z, SCROLL_OFFSET} from './tokens';
export {BRAND, VAR, MARK_GEOMETRY} from './theme';
export {useReducedMotion, useMediaQuery, useIsMobile, useIsTouch, useMounted} from './hooks';

/* Brand */
export {VedvixMark, VedvixLogo, type VedvixMarkProps, type VedvixLogoProps} from './brand/Logo';
// Vendored raster/vector brand files live in `./brand/assets/` — import the
// specific file you need so unused ones stay out of your bundle:
//   import appIcon from '@/ui/brand/assets/vedvix-app-icon.png';

/* Motion primitives */
export {Reveal, type RevealProps} from './motion/Reveal';
export {Stagger, StaggerItem} from './motion/Stagger';
export {TextReveal, type TextRevealProps} from './motion/TextReveal';
export {Parallax, type ParallaxProps} from './motion/Parallax';
export {TiltCard, type TiltCardProps} from './motion/TiltCard';
export {Marquee, type MarqueeProps} from './motion/Marquee';
export {
  GlowOrb,
  Spotlight,
  Sparkle,
  Equalizer,
  type GlowOrbProps,
  type SpotlightProps,
} from './motion/Spotlight';

/* Primitives */
export {Button, type ButtonProps, type ButtonVariant, type ButtonSize} from './primitives/Button';
export {Spinner, type SpinnerProps} from './primitives/Spinner';
export {Skeleton, SkeletonText, type SkeletonProps} from './primitives/Skeleton';
export {Card, type CardProps} from './primitives/Card';
export {Badge, type BadgeProps} from './primitives/Badge';
export {Avatar, AvatarStack, type AvatarProps, type AvatarStackProps, type Person} from './primitives/Avatar';

/* Patterns */
export {Section, type SectionProps} from './patterns/Section';
export {EmptyState, type EmptyStateProps} from './patterns/EmptyState';
export {ErrorState, type ErrorStateProps} from './patterns/ErrorState';
export {DataView, SkeletonGrid, type DataViewProps} from './patterns/DataView';
export {HorizontalScroller, type HorizontalScrollerProps} from './patterns/HorizontalScroller';
export {CardDeck, type CardDeckProps} from './patterns/CardDeck';
export {GalleryScatter, type GalleryScatterProps} from './patterns/GalleryScatter';
