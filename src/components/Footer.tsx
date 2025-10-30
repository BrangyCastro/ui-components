import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  sections,
  copyright,
  className = '',
  children,
}) => {
  return (
    <footer className={`w-full bg-gray-800 text-white pt-12 pb-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {sections && sections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4">{section.title}</h4>
                <ul className="list-none m-0 p-0">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a
                        href={link.href}
                        className="text-gray-300 no-underline transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {children}
        {copyright && (
          <div className="text-center pt-8 border-t border-white/10 text-gray-400 text-sm">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
};
