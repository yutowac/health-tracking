import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ScreenHeaderProps {
  title: string;
  onBackClick: () => void;
  rightSlot?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  onBackClick,
  rightSlot,
}) => {
  return (
    <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <button type="button" onClick={onBackClick} className="p-1.5">
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <h1 className="text-2xl font-bold text-primary-dark">{title}</h1>
        </div>
        {rightSlot && <div>{rightSlot}</div>}
      </div>
    </header>
  );
};
