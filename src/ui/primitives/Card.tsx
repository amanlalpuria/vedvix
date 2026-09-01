import type {ElementType, HTMLAttributes, ReactNode} from 'react';
import {cn} from '../cn';

type CardVariant = 'glass' | 'solid' | 'outline' | 'gradient';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: CardVariant;
  padding?: CardPadding;
  /** Adds hover lift + accent glow. Use for cards that are links/buttons. */
  interactive?: boolean;
  children: ReactNode;
};

const variants: Record<CardVariant, string> = {
  glass: 'vx-glass',
  solid: 'bg-vx-bg-raised border border-vx-border',
  outline: 'border border-vx-border',
  gradient: 'vx-ring-gradient',
};

const paddings: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-7 sm:p-8',
};

/**
 * Surface primitive. Compose with `Card.Header` / `Card.Title` /
 * `Card.Description` / `Card.Content` / `Card.Footer`, or just drop children in.
 */
function CardRoot({
  as,
  variant = 'glass',
  padding = 'lg',
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  const Tag = (as ?? 'div') as ElementType;
  return (
    <Tag
      className={cn(
        'rounded-[var(--radius-vx-lg)] text-vx-text',
        variants[variant],
        paddings[padding],
        interactive &&
          'group/card cursor-pointer transition-all duration-500 ease-out hover:-translate-y-0.5 ' +
            'hover:border-vx-accent/40 hover:shadow-[var(--shadow-vx-glow)]',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function CardHeader({className, children, ...rest}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4 flex flex-col gap-1.5', className)} {...rest}>
      {children}
    </div>
  );
}

function CardTitle({className, children, ...rest}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-grotesk text-lg font-semibold tracking-tight text-vx-text', className)}
      {...rest}
    >
      {children}
    </h3>
  );
}

function CardDescription({className, children, ...rest}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm leading-relaxed text-vx-text-muted', className)} {...rest}>
      {children}
    </p>
  );
}

function CardContent({className, children, ...rest}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-sm text-vx-text-muted', className)} {...rest}>
      {children}
    </div>
  );
}

function CardFooter({className, children, ...rest}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 flex items-center gap-3 border-t border-vx-border pt-5', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
