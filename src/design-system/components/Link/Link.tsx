import type { AnchorHTMLAttributes, ReactNode } from 'react';

import './Link.css';

export type LinkPresentation = 'accent' | 'accent-underlined' | 'neutral';
export type LinkDestination = 'external' | 'anchor';
export type LinkState = 'default' | 'hover' | 'active';

export type LinkProps = {
  children: ReactNode;
  className?: string;
  destination?: LinkDestination;
  href: string;
  presentation?: LinkPresentation;
  state?: LinkState;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'className' | 'href'
>;

export function Link({
  children,
  className,
  destination = 'external',
  href,
  presentation = 'accent-underlined',
  state = 'default',
  ...props
}: LinkProps) {
  const classNames = [
    'ds-link',
    `ds-link--${presentation}`,
    state !== 'default' ? `ds-link--${state}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const externalProps =
    destination === 'external'
      ? { rel: 'noreferrer', target: '_blank' }
      : undefined;

  return (
    <a className={classNames} href={href} {...externalProps} {...props}>
      {children}
    </a>
  );
}
