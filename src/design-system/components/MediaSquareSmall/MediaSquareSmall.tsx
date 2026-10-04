import './MediaSquareSmall.css';

export type MediaSquareSmallProps = {
  children?: React.ReactNode;
  className?: string;
  imageAlt?: string;
  imageSrc?: string;
};

export function MediaSquareSmall({
  children,
  className,
  imageAlt = '',
  imageSrc,
}: MediaSquareSmallProps) {
  const classNames = ['ds-media-square-small', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children ?? (
        imageSrc ? (
          <img alt={imageAlt} className="ds-media-square-small__image" src={imageSrc} />
        ) : null
      )}
    </div>
  );
}
