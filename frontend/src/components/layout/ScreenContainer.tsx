import React from 'react';

interface ScreenContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-neutral-background ${className}`}>
      {children}
    </div>
  );
};
