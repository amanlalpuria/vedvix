import {forwardRef} from 'react';
import type {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref} from 'react';
import {cn} from '../cn';
import {Spinner} from './Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle' | 'danger' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Shows a spinner, sets `aria-busy`, and blocks interaction. Label text
   *  stays mounted so the button keeps its width. */
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
};

export type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

export type ButtonAsLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a';
    href: string;
  };

const base =
  'relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-[transform,background-color,border-color,box-shadow,opacity] duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vx-accent focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-vx-bg active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 ' +
  'aria-disabled:pointer-events-none aria-disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-vx-accent text-vx-accent-contrast shadow-[0_10px_34px_-10px_rgba(47,90,248,0.75)] ' +
    'hover:bg-vx-accent-soft hover:shadow-[0_14px_44px_-8px_rgba(47,90,248,0.9)]',
  secondary:
    'border border-vx-border bg-white/[0.03] text-vx-text hover:border-vx-border-strong hover:bg-white/[0.07]',
  ghost: 'text-vx-text-muted hover:bg-white/[0.06] hover:text-vx-text',
  subtle: 'bg-white/[0.06] text-vx-text hover:bg-white/[0.11]',
  danger:
    'bg-vx-danger/15 text-vx-danger border border-vx-danger/30 hover:bg-vx-danger/25',
  link: 'text-vx-accent-soft underline-offset-4 hover:underline px-0 h-auto',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
  icon: 'h-11 w-11',
};

/**
 * The one button. Polymorphic between `<button>` (default) and `<a>`
 * (`as="a" href`). Handles loading, icon slots, five visual weights and a
 * full keyboard-focus ring out of the box.
 */
export const Button = forwardRef(function Button(
  props: ButtonProps | ButtonAsLinkProps,
  ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
) {
  const {
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {loading && (
        <Spinner
          size={size === 'lg' ? 20 : 16}
          label={null}
          className="absolute inset-0 m-auto h-fit w-fit"
        />
      )}
      <span className={cn('inline-flex items-center gap-2', loading && 'invisible')}>
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </>
  );

  if (props.as === 'a') {
    const {as: _as, onClick, ...anchorRest} = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: string;
    };
    const isDisabled = loading || (rest as {['aria-disabled']?: boolean})['aria-disabled'];
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={classes}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const {as: _as, disabled, ...buttonRest} = rest as ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: string;
  };
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {content}
    </button>
  );
});
