import './Button.css';

import iconPlus from '../../assets/icon-plus.svg';
import iconToClose from '../../assets/icon-to-close.svg';

export type ButtonVariant = 'primary' | 'secondary' | 'utility-icon';
export type ButtonIcon = 'plus' | 'to-close';
export type ButtonState = 'default' | 'hover';

type ButtonBaseProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: ButtonIcon;
  state?: ButtonState;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    icon = 'plus',
    state = 'default',
    variant = 'primary',
  } = props;
  const classNames = [
    'ds-button',
    `ds-button--${variant}`,
    state !== 'default' ? `ds-button--${state}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const iconSrc = icon === 'to-close' ? iconToClose : iconPlus;
  const content =
    variant === 'utility-icon' ? (
      <img alt="" className="ds-button__icon" src={iconSrc} />
    ) : (
      children
    );

  if ('href' in props && props.href !== undefined) {
    const {
      children: _children,
      className: _className,
      href,
      icon: _icon,
      state: _state,
      variant: _variant,
      ...anchorProps
    } = props;

    return (
      <a className={classNames} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    icon: _icon,
    state: _state,
    type = 'button',
    variant: _variant,
    ...buttonProps
  } = props;

  return (
    <button className={classNames} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
