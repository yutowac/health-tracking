import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'User avatar',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };
  
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 28,
  };
  
  return (
    <div
      className={`${sizeStyles[size]} rounded-full overflow-hidden bg-accent-purple flex items-center justify-center ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <User size={iconSizes[size]} className="text-white" />
      )}
    </div>
  );
};
