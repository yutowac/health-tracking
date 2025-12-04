import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'surface';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick = () => {},
  variant = 'default',
  size = 'md',
  className = '',
  ariaLabel,
}) => {
  const baseStyles = 'rounded-full flex items-center justify-center transition-all duration-200';
  
  const variantStyles = {
    default: 'text-neutral-dark hover:bg-neutral-dark/10',
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-blue',
    surface: 'bg-white text-neutral-dark hover:bg-gray-100 shadow-card',
  };
  
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
