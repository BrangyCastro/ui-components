'use client';

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import styles from './HeroBasic.module.css';

export interface HeroBanner {
  desktopImage: string;
  mobileImage?: string;
  alt: string;
  link?: string;
}

export interface HeroBasicProps {
  banners: HeroBanner[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  arrows?: boolean;
  dots?: boolean;
  showPlayPause?: boolean;
  className?: string;
}

export const HeroBasic = ({
  banners,
  autoplay = true,
  autoplaySpeed = 5000,
  pauseOnHover = false,
  arrows = false,
  dots = true,
  showPlayPause = true,
  className = '',
}: HeroBasicProps) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: dots && banners.length > 1,
    arrows: arrows && banners.length > 1,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    fade: true,
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      sliderRef.current?.slickPause();
    } else {
      sliderRef.current?.slickPlay();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBannerClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  if (!banners || banners.length === 0) {
    return null;
  }

  // Render placeholder during SSR
  if (!isMounted) {
    return (
      <section className={`${styles.root} ${className}`}>
        <div className={styles.sliderContainer}>
          <div className={styles.slideWrapper}>
            <div className={styles.slide}>
              <picture>
                {banners[0]?.mobileImage && (
                  <source
                    media="(max-width: 768px)"
                    srcSet={banners[0].mobileImage}
                  />
                )}
                <img
                  src={banners[0]?.desktopImage}
                  alt={banners[0]?.alt}
                  className={styles.image}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.root} ${className}`}>
      <div className={styles.sliderContainer}>
        <Slider ref={sliderRef} {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className={styles.slideWrapper}>
              <div
                className={`${styles.slide} ${banner.link ? styles.clickable : ''}`}
                onClick={() => handleBannerClick(banner.link)}
                role={banner.link ? 'button' : undefined}
                tabIndex={banner.link ? 0 : undefined}
                onKeyDown={(e) => {
                  if (banner.link && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleBannerClick(banner.link);
                  }
                }}
              >
                <picture>
                  {banner.mobileImage && (
                    <source
                      media="(max-width: 768px)"
                      srcSet={banner.mobileImage}
                    />
                  )}
                  <img
                    src={banner.desktopImage}
                    alt={banner.alt}
                    className={styles.image}
                  />
                </picture>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {showPlayPause && banners.length > 1 && (
        <button
          className={styles.playPauseButton}
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </section>
  );
};
