import type { HTMLAttributes, ReactNode } from 'react';

import './Container.css';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Container({ children, className, ...props }: ContainerProps) {
  const classNames = ['ds-container', className].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
