import type { HTMLAttributes, ReactNode } from 'react';

import './Grid.css';

export type GridProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className, ...props }: GridProps) {
  const classNames = ['ds-grid', className].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
