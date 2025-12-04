import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  userName?: string;
  avatarUrl?: string;
  notificationCount?: number;
  showBackButton?: boolean;
  onBackClick?: () => void;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackClick = () => {},
}) => {
  return (
    <header className="bg-neutral-background px-4 pt-12 pb-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <button
              type="button"
              onClick={onBackClick}
              className="p-1"
            >
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
          )}
          <h1 className="text-3xl font-extrabold text-primary-dark">{title}</h1>
        </div>
        {/* 3D Avatar illustration placeholder */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-200 via-orange-200 to-green-200 flex items-center justify-center overflow-hidden shadow-md">
          <div className="text-2xl">🐛</div>
        </div>
      </div>
    </header>
  );
};
