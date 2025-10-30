import React from 'react';

export interface CardProps {
  title?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  image,
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="m-0 mb-4 text-2xl font-bold text-gray-800">{title}</h3>}
        {children}
      </div>
    </div>
  );
};
