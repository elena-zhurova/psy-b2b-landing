import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';

import './Input.css';

export type InputInteraction = 'default' | 'hover' | 'focus';
export type InputContent = 'empty' | 'filled';
export type InputValidation = 'default' | 'error';
export type InputAvailability = 'enabled' | 'disabled';

export type InputProps = {
  availability?: InputAvailability;
  className?: string;
  content?: InputContent;
  errorMessage?: string;
  helperMessage?: string;
  interaction?: InputInteraction;
  label: string;
  message?: boolean;
  validation?: InputValidation;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'disabled'>;

export function Input({
  availability = 'enabled',
  className,
  content = 'empty',
  errorMessage = 'Проверьте правильность заполнения поля',
  helperMessage = 'Укажите имя и фамилию',
  interaction = 'default',
  label,
  message = true,
  placeholder = 'Название компании',
  validation = 'default',
  value,
  onBlur,
  onFocus,
  ...props
}: InputProps) {
  const [hasFocus, setHasFocus] = useState(false);
  const isDisabled = availability === 'disabled';
  const isFocused = !isDisabled && (interaction === 'focus' || hasFocus);
  const isErrored = validation === 'error' && !isFocused;
  const fallbackValue = content === 'filled' ? String(placeholder ?? '') : undefined;
  const valueProps =
    value !== undefined
      ? { value }
      : { defaultValue: fallbackValue };
  const classNames = [
    'ds-input',
    `ds-input--${availability}`,
    `ds-input--${content}`,
    !isDisabled ? `ds-input--${interaction}` : undefined,
    isErrored ? 'ds-input--error' : undefined,
    isFocused ? 'ds-input--focus' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classNames}>
      <span className="ds-input__label">{label}</span>
      <span className="ds-input__control">
        <input
          className="ds-input__field"
          disabled={isDisabled}
          onBlur={(event) => {
            setHasFocus(false);
            onBlur?.(event);
          }}
          onFocus={(event) => {
            setHasFocus(true);
            onFocus?.(event);
          }}
          placeholder={placeholder}
          {...valueProps}
          {...props}
        />
      </span>
      {isErrored ? (
        <span className="ds-input__message ds-input__message--error">
          {errorMessage}
        </span>
      ) : null}
      {message ? (
        <span className="ds-input__message">{helperMessage}</span>
      ) : null}
    </label>
  );
}
