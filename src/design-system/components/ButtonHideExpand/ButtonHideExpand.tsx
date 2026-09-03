import './ButtonHideExpand.css';

import expandDefaultIcon from '../../assets/hide-expand-expand-default.svg';
import expandHoverIcon from '../../assets/hide-expand-expand-hover.svg';
import hideDefaultIcon from '../../assets/hide-expand-hide-default.svg';
import hideHoverIcon from '../../assets/hide-expand-hide-hover.svg';

export type ButtonHideExpandRole = 'to-expand' | 'to-hide';

export type ButtonHideExpandProps = {
  'aria-label': string;
  className?: string;
  role?: ButtonHideExpandRole;
  type?: 'button' | 'submit' | 'reset';
};

const iconsByRole = {
  'to-expand': {
    default: expandDefaultIcon,
    hover: expandHoverIcon,
  },
  'to-hide': {
    default: hideDefaultIcon,
    hover: hideHoverIcon,
  },
} satisfies Record<ButtonHideExpandRole, { default: string; hover: string }>;

export function ButtonHideExpand({
  'aria-label': ariaLabel,
  className,
  role = 'to-expand',
  type = 'button',
}: ButtonHideExpandProps) {
  const classNames = ['ds-button-hide-expand', className]
    .filter(Boolean)
    .join(' ');
  const icons = iconsByRole[role];

  return (
    <button aria-label={ariaLabel} className={classNames} type={type}>
      <img
        alt=""
        className="ds-button-hide-expand__icon ds-button-hide-expand__icon--default"
        src={icons.default}
      />
      <img
        alt=""
        className="ds-button-hide-expand__icon ds-button-hide-expand__icon--hover"
        src={icons.hover}
      />
    </button>
  );
}
