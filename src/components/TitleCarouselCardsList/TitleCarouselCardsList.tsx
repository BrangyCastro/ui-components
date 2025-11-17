'use client';

import { useRef, useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import Slider from 'react-slick';
import styles from './TitleCarouselCardsList.module.css';

export interface CarouselListCard {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  listItems: string[];
  cardAlignment?: 'left' | 'center' | 'right';
  cardBackgroundColor?: string;
}

export interface TitleCarouselCardsListProps {
  title: string;
  titleStyle: 'red' | 'black' | 'red-black';
  cards: CarouselListCard[];
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

export const TitleCarouselCardsList = ({
  title,
  titleStyle,
  cards,
  alignment = 'center',
  backgroundColor = '#ffffff',
  autoplay = false,
  autoplaySpeed = 3000,
  arrows = false,
  dots = true,
  slidesToShow = 1,
  infinite = true,
  className = '',
}: TitleCarouselCardsListProps) => {
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
          slidesToShow: 1,
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

  const getCardAlignmentClass = (cardAlignment?: 'left' | 'center' | 'right') => {
    const alignment = cardAlignment || 'left';
    const alignmentMap: Record<string, string> = {
      left: '', // Default alignment, no class needed
      center: styles.cardCenter || '',
      right: styles.cardRight || '',
    };
    return alignmentMap[alignment] || '';
  };

  const renderCard = (card: CarouselListCard, index: number) => (
    <div key={index} className={styles.cardWrapper}>
      <div
        className={`${styles.card} ${getCardAlignmentClass(card.cardAlignment)}`}
        style={
          {
            '--card-bg': card.cardBackgroundColor || '#ffffff',
          } as CSSProperties
        }
        role="article"
        aria-label={`${card.title} - Tarjeta ${index + 1}`}
      >
        <div className={styles.cardImageWrapper}>
          <img
            src={card.image}
            alt={card.imageAlt || card.title || `Imagen de la tarjeta ${index + 1}`}
            className={styles.cardImage}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          {card.description && (
            <p className={styles.cardDescription}>{card.description}</p>
          )}
          <ol className={styles.cardList} aria-label={`Lista de características: ${card.title}`}>
            {card.listItems.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.cardListItem}>
                {item}
              </li>
            ))}
          </ol>
        </div>
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
        aria-labelledby="carousel-title"
        role="region"
      >
        <div className={styles.container}>
          <h2 id="carousel-title" className={styles.title}>{renderTitle()}</h2>
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
      aria-labelledby="carousel-title"
      role="region"
    >
      <div className={styles.container}>
        <h2 id="carousel-title" className={styles.title}>{renderTitle()}</h2>
        <div className={styles.sliderContainer} role="group" aria-roledescription="carousel">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => renderCard(card, index))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
