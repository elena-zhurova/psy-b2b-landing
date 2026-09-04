import './Button.css';

export type ButtonVariant = 'primary';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  const classNames = ['ds-button', `ds-button--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  );
}
