import { useState } from 'react';
import type { TextareaHTMLAttributes } from 'react';

import './Textarea.css';

export type TextareaInteraction = 'default' | 'hover' | 'focus';
export type TextareaContent = 'empty' | 'filled';

export type TextareaProps = {
  className?: string;
  content?: TextareaContent;
  helperMessage?: string;
  interaction?: TextareaInteraction;
  label: string;
  message?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export function Textarea({
  className,
  content = 'empty',
  helperMessage = 'Укажите имя и фамилию',
  interaction = 'default',
  label,
  message = true,
  placeholder = 'Пример или подсказка',
  value,
  onBlur,
  onFocus,
  ...props
}: TextareaProps) {
  const [hasFocus, setHasFocus] = useState(false);
  const isFocused = interaction === 'focus' || hasFocus;
  const fallbackValue = content === 'filled' ? String(placeholder ?? '') : undefined;
  const valueProps =
    value !== undefined
      ? { value }
      : { defaultValue: fallbackValue };
  const classNames = [
    'ds-textarea',
    `ds-textarea--${content}`,
    `ds-textarea--${interaction}`,
    isFocused ? 'ds-textarea--focus' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classNames}>
      <span className="ds-textarea__label">{label}</span>
      <span className="ds-textarea__control">
        <textarea
          className="ds-textarea__field"
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
      {message ? (
        <span className="ds-textarea__message">{helperMessage}</span>
      ) : null}
    </label>
  );
}
