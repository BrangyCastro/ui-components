import React from 'react';
import './TitleParagraphCTA.css';

export interface TitleParagraphCTAProps {
  title: string;
  titleStyle: 'red' | 'black' | 'red-black';
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  buttonText?: string;
  buttonLink?: string;
  textColor?: string;
  buttonColor?: string;
  openInNewTab?: boolean;
  className?: string;
}

export const TitleParagraphCTA: React.FC<TitleParagraphCTAProps> = ({
  title,
  titleStyle,
  description,
  alignment = 'center',
  buttonText,
  buttonLink,
  textColor = '#ffffff',
  buttonColor = '#FB3333',
  openInNewTab = true,
  className = '',
}) => {
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
      return <span className="title-paragraph-cta__highlight">{title}</span>;
    } else if (titleStyle === 'black') {
      return <span className="title-paragraph-cta__normal">{title}</span>;
    } else {
      // red-black: split title
      const words = title.split(' ');
      const midPoint = Math.ceil(words.length / 2);
      const firstPart = words.slice(0, midPoint).join(' ');
      const secondPart = words.slice(midPoint).join(' ');

      return (
        <>
          <span className="title-paragraph-cta__highlight">{firstPart}</span>
          {secondPart && (
            <>
              {' '}
              <span className="title-paragraph-cta__normal">{secondPart}</span>
            </>
          )}
        </>
      );
    }
  };

  return (
    <section
      className={`title-paragraph-cta title-paragraph-cta--${alignment} ${className}`}
    >
      <div className="title-paragraph-cta__container">
        <h2 className="title-paragraph-cta__title">
          {renderTitle()}
        </h2>

        {description && (
          <p className="title-paragraph-cta__paragraph">{description}</p>
        )}

        {buttonText && (
          <button
            className="title-paragraph-cta__button"
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
