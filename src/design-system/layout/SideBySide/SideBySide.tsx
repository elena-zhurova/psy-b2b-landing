import type { HTMLAttributes, ReactNode } from 'react';

import './SideBySide.css';

export type SideBySideVariant = 'equal' | 'mediaText';

export type SideBySideProps = {
  children: ReactNode;
  className?: string;
  variant?: SideBySideVariant;
} & HTMLAttributes<HTMLDivElement>;

const variantClassName: Record<SideBySideVariant, string> = {
  equal: 'ds-side-by-side--equal',
  mediaText: 'ds-side-by-side--media-text',
};

export function SideBySide({
  children,
  className,
  variant = 'equal',
  ...props
}: SideBySideProps) {
  const classNames = [
    'ds-side-by-side',
    variantClassName[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
