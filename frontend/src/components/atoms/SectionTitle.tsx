import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h2 className={`text-[18px] font-semibold text-primary-dark tracking-tight ${className}`}>
      {children}
    </h2>
  );
};
