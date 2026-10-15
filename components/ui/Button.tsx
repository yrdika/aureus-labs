import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { cn } from '~/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold-500 text-charcoal-900 font-semibold hover:bg-gold-400 shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]',
  outline:
    'border border-white/20 text-cream-100 hover:border-gold-500/60 hover:text-gold-400 bg-transparent',
  ghost:
    'text-cream-200 hover:text-cream-50 bg-transparent hover:bg-white/6',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
};

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 active:scale-[0.98]';

  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === 'a') {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor;
    return <a className={classes} {...anchorProps} />;
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
