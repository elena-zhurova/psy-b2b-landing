import './FAQItem.css';

import { ButtonHideExpand } from '../ButtonHideExpand';

export type FAQItemState = 'default' | 'hover' | 'active';

export type FAQItemProps = {
  answer?: string;
  className?: string;
  question: string;
  state?: FAQItemState;
};

export function FAQItem({
  answer,
  className,
  question,
  state = 'default',
}: FAQItemProps) {
  const isActive = state === 'active';
  const classNames = ['ds-faq-item', `ds-faq-item--${state}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      <div className="ds-faq-item__content">
        <h3 className="ds-faq-item__question">{question}</h3>
        <ButtonHideExpand
          aria-label={isActive ? 'Скрыть ответ' : 'Показать ответ'}
          role={isActive ? 'to-hide' : 'to-expand'}
        />
      </div>
      {isActive && answer ? (
        <p className="ds-faq-item__answer">{answer}</p>
      ) : null}
    </article>
  );
}
