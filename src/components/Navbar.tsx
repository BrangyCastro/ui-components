import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items: NavItem[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logo, items, className = '' }) => {
  return (
    <nav className={`w-full bg-white shadow-md py-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between flex-col md:flex-row gap-4">
        {logo && <div className="font-bold text-2xl">{logo}</div>}
        <ul className="flex list-none m-0 p-0 gap-8 flex-col md:flex-row text-center">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={item.onClick}
                className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-primary-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
