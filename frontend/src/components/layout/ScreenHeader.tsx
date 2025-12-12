import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ScreenHeaderProps {
  title: string;
  onBackClick: () => void;
  rightSlot?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBackClick,
  rightSlot,
  variant = 'primary',
}) => {
  const titleClass = variant === 'secondary'
    ? 'text-[22px] font-semibold'
    : 'text-[28px] font-bold';

  return (
    <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <button 
            type="button" 
            onClick={onBackClick} 
            className="p-1.5 rounded-xl active:bg-primary-light/50 transition-colors"
          >
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <h1 className={`${titleClass} text-primary-dark`}>{title}</h1>
        </div>
        {rightSlot && <div>{rightSlot}</div>}
      </div>
    </header>
  );
};
