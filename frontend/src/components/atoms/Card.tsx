import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  padding = 'md',
}) => {
  const baseStyles = 'bg-white rounded-[24px] shadow-card';
  
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-[32px]',
  };
  
  const clickableStyles = onClick ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
