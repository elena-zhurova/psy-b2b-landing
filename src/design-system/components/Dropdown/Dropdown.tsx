import { useState } from 'react';

import arrowDownIcon from '../../assets/icon-arrow-down.svg';
import './Dropdown.css';

export type DropdownInteraction = 'default' | 'hover' | 'open';

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  className?: string;
  helperMessage?: string;
  interaction?: DropdownInteraction;
  label: string;
  message?: boolean;
  onChange?: (value: string) => void;
  options: DropdownOption[];
  value: string;
};

export function Dropdown({
  className,
  helperMessage = 'Укажите имя и фамилию',
  interaction,
  label,
  message = true,
  onChange,
  options,
  value,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState(value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selected = options.find((option) => option.value === selectedValue) ?? options[0];
  const effectiveInteraction = interaction ?? (isMenuOpen ? 'open' : 'default');
  const isOpen = effectiveInteraction === 'open';
  const classNames = [
    'ds-dropdown',
    `ds-dropdown--${effectiveInteraction}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <span className="ds-dropdown__label">{label}</span>
      <div className="ds-dropdown__field">
        <button
          aria-expanded={isOpen}
          className="ds-dropdown__control"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="ds-dropdown__value">{selected?.label}</span>
          <img alt="" className="ds-dropdown__icon" src={arrowDownIcon} />
        </button>
        {isOpen ? (
          <div className="ds-dropdown__menu">
            {options.map((option) => (
              <button
                className={[
                  'ds-dropdown__option',
                  option.value === selected?.value ? 'ds-dropdown__option--selected' : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={option.value}
                onClick={() => {
                  setSelectedValue(option.value);
                  setIsMenuOpen(false);
                  onChange?.(option.value);
                }}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {message ? (
        <span className="ds-dropdown__message">{helperMessage}</span>
      ) : null}
    </div>
  );
}
