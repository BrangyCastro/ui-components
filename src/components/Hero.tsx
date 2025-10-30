import React from 'react';

export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
  children,
}) => {
  const styles: React.CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {};

  return (
    <div
      className={`w-full min-h-[500px] flex items-center justify-center p-8 relative bg-gradient-to-br from-primary-500 to-secondary-500 text-white bg-cover bg-center ${className}`}
      style={styles}
    >
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};
