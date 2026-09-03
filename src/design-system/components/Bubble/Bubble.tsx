import './Bubble.css';

export type BubbleSize = 'lg' | 'md';

export type BubbleProps = {
  children: React.ReactNode;
  className?: string;
  size?: BubbleSize;
};

export function Bubble({ children, className, size = 'lg' }: BubbleProps) {
  const classNames = ['ds-bubble', `ds-bubble--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
}
