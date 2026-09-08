import './FAQCard.css';

import { ButtonHideExpand } from '../ButtonHideExpand';

export type FAQCardState = 'default' | 'hover' | 'active';

export type FAQCardProps = {
  answer?: string;
  className?: string;
  question: string;
  state?: FAQCardState;
};

export function FAQCard({
  answer,
  className,
  question,
  state = 'default',
}: FAQCardProps) {
  const isActive = state === 'active';
  const classNames = ['ds-faq-card', `ds-faq-card--${state}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      <div className="ds-faq-card__content">
        <h3 className="ds-faq-card__question">{question}</h3>
        <ButtonHideExpand
          aria-label={isActive ? 'Скрыть ответ' : 'Показать ответ'}
          role={isActive ? 'to-hide' : 'to-expand'}
        />
      </div>
      {isActive && answer ? (
        <p className="ds-faq-card__answer">{answer}</p>
      ) : null}
    </article>
  );
}
