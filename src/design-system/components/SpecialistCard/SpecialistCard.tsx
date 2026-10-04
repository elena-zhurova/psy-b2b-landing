import './SpecialistCard.css';

export type SpecialistCardProps = {
  bio: string;
  className?: string;
  imageAlt?: string;
  imageSrc: string;
  name: string | string[];
};

export function SpecialistCard({
  bio,
  className,
  imageAlt = '',
  imageSrc,
  name,
}: SpecialistCardProps) {
  const nameLines = Array.isArray(name) ? name : [name];
  const classNames = ['ds-specialist-card', className]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      <img alt={imageAlt} className="ds-specialist-card__image" src={imageSrc} />
      <div className="ds-specialist-card__content">
        <h3 className="ds-specialist-card__name">
          {nameLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p className="ds-specialist-card__bio">{bio}</p>
      </div>
    </article>
  );
}
