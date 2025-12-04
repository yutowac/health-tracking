import React from 'react';

interface BadgeProps {
  count?: number;
  variant?: 'error' | 'primary' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  variant = 'error',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'rounded-full flex items-center justify-center font-medium text-white';
  
  const variantStyles = {
    error: 'bg-error',
    primary: 'bg-primary',
    success: 'bg-green-500',
  };
  
  const sizeStyles = {
    sm: 'min-w-5 h-5 px-1.5 text-xs',
    md: 'min-w-6 h-6 px-2 text-sm',
  };
  
  if (count === undefined || count === 0) return null;
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {count > 99 ? '99+' : count}
    </span>
  );
};
