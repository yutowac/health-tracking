import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'highlight' | 'subtle';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  padding = 'md',
  variant = 'default',
  interactive = false,
}) => {
  const variantStyles = {
    default: 'bg-white shadow-[0_10px_30px_rgba(0,31,77,0.08),0_2px_6px_rgba(0,0,0,0.04)]',
    highlight: 'bg-gradient-to-br from-primary-light to-white shadow-[0_4px_14px_rgba(0,122,255,0.2)]',
    subtle: 'bg-white/90 shadow-sm',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8',
  };

  const baseStyles = `${variantStyles[variant]} rounded-[24px]`;
  
  const interactiveStyles = (onClick || interactive)
    ? 'cursor-pointer hover:shadow-lg hover:translate-y-[-2px] active:scale-[0.98] active:shadow-md transition-all duration-200'
    : '';
  
  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
