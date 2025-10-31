import styles from './TitleParagraphCTA.module.css';

export interface TitleParagraphCTAProps {
  title: string;
  titleStyle: 'red' | 'black' | 'red-black';
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  buttonText?: string;
  buttonLink?: string;
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
  openInNewTab?: boolean;
  className?: string;
}

export const TitleParagraphCTA = ({
  title,
  titleStyle,
  description,
  alignment = 'center',
  buttonText,
  buttonLink,
  textColor = '#ffffff',
  buttonColor = '#FB3333',
  backgroundColor = '#f5f5f5',
  openInNewTab = true,
  className = '',
}: TitleParagraphCTAProps) => {
  const handleButtonClick = () => {
    if (buttonLink) {
      if (openInNewTab) {
        window.open(buttonLink, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = buttonLink;
      }
    }
  };

  const renderTitle = () => {
    if (titleStyle === 'red') {
      return <span className={styles.highlight}>{title}</span>;
    } else if (titleStyle === 'black') {
      return <span className={styles.normal}>{title}</span>;
    } else {
      // red-black: split title
      const words = title.split(' ');
      const midPoint = Math.ceil(words.length / 2);
      const firstPart = words.slice(0, midPoint).join(' ');
      const secondPart = words.slice(midPoint).join(' ');

      return (
        <>
          <span className={styles.highlight}>{firstPart}</span>
          {secondPart && (
            <>
              {' '}
              <span className={styles.normal}>{secondPart}</span>
            </>
          )}
        </>
      );
    }
  };

  return (
    <section
      className={`${styles.root} ${styles[alignment]} ${className}`}
      style={{
        backgroundColor,
      }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {renderTitle()}
        </h2>

        {description && (
          <p className={styles.paragraph}>{description}</p>
        )}

        {buttonText && (
          <button
            className={styles.button}
            onClick={handleButtonClick}
            style={{
              backgroundColor: buttonColor,
              color: textColor,
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
