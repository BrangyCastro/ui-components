'use client';

import { useRef, useState, useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import Slider from 'react-slick';
import styles from './TitleCarouselCardsCTA.module.css';

export interface CarouselCard {
  icon?: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  cardAlignment?: 'left' | 'center' | 'right';
  buttonTextColor?: string;
  buttonBorderColor?: string;
  openInNewTab?: boolean;
  cardBackgroundColor?: string;
}

export interface TitleCarouselCardsCTAProps {
  title: string;
  titleStyle: 'red' | 'black' | 'red-black';
  cards: CarouselCard[];
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  dots?: boolean;
  slidesToShow?: number;
  infinite?: boolean;
  className?: string;
}

export const TitleCarouselCardsCTA = ({
  title,
  titleStyle,
  cards,
  alignment = 'center',
  backgroundColor = '#ffffff',
  autoplay = false,
  autoplaySpeed = 3000,
  arrows = false,
  dots = true,
  slidesToShow = 3,
  infinite = true,
  className = '',
}: TitleCarouselCardsCTAProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: dots && cards.length > 1,
    arrows: arrows && cards.length > 1,
    infinite: infinite && cards.length > slidesToShow,
    speed: 800,
    slidesToShow: Math.min(slidesToShow, cards.length),
    slidesToScroll: 1,
    autoplay: autoplay && cards.length > 1,
    autoplaySpeed: autoplaySpeed,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, cards.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderTitle = () => {
    if (titleStyle === 'red') {
      return (
        <span className={styles.highlight}>
          {title}
        </span>
      );
    } else if (titleStyle === 'black') {
      return (
        <span className={styles.normal}>
          {title}
        </span>
      );
    } else {
      // red-black: split title
      const words = title.split(' ');
      const midPoint = Math.ceil(words.length / 2);
      const firstPart = words.slice(0, midPoint).join(' ');
      const secondPart = words.slice(midPoint).join(' ');

      return (
        <>
          <span className={styles.highlight}>
            {firstPart}
          </span>
          {secondPart && (
            <>
              {' '}
              <span className={styles.normal}>
                {secondPart}
              </span>
            </>
          )}
        </>
      );
    }
  };

  const handleButtonClick = (link?: string, openInNewTab?: boolean) => {
    if (link) {
      if (openInNewTab) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = link;
      }
    }
  };

  const getCardAlignmentClass = (cardAlignment?: 'left' | 'center' | 'right') => {
    const stylesAny = styles as any;
    const alignment = cardAlignment || 'center';
    const alignmentMap: Record<string, string> = {
      left: stylesAny.cardLeft || '',
      center: stylesAny.cardCenter || '',
      right: stylesAny.cardRight || '',
    };
    return alignmentMap[alignment] || '';
  };

  const renderCard = (card: CarouselCard, index: number) => (
    <div key={index} className={styles.cardWrapper}>
      <div
        className={`${styles.card} ${getCardAlignmentClass(card.cardAlignment)}`}
        style={
          {
            '--card-bg': card.cardBackgroundColor || '#ffffff',
          } as CSSProperties
        }
      >
        {card.icon && <div className={styles.iconWrapper}>{card.icon}</div>}
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
        {card.buttonText && (
          <button
            className={styles.cardButton}
            onClick={() => handleButtonClick(card.buttonLink, card.openInNewTab ?? true)}
            style={{
              color: card.buttonTextColor || '#FB3333',
              borderColor: card.buttonBorderColor || '#FB3333',
            }}
          >
            {card.buttonText}
          </button>
        )}
      </div>
    </div>
  );

  if (!cards || cards.length === 0) {
    return null;
  }

  // Render placeholder during SSR
  if (!isMounted) {
    return (
      <section
        className={`${styles.root} ${styles[alignment]} ${className}`}
        style={{ backgroundColor }}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>{renderTitle()}</h2>
          <div className={styles.cardsContainer}>
            {cards.slice(0, slidesToShow).map((card, index) => renderCard(card, index))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${styles.root} ${styles[alignment]} ${className}`}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{renderTitle()}</h2>
        <div className={styles.sliderContainer}>
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => renderCard(card, index))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
