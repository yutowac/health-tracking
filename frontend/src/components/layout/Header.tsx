import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  userName?: string;
  avatarUrl?: string;
  notificationCount?: number;
  showSearch?: boolean;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  userName,
  avatarUrl,
  notificationCount = 0,
  showSearch = false,
  onMenuClick = () => {},
  onNotificationClick = () => {},
  onAvatarClick = () => {},
  onSearchClick = () => {},
}) => {
  return (
    <header className="bg-neutral-background border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Menu"
          >
            <Menu size={24} className="text-neutral-dark" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-neutral-dark">{title}</h1>
            {userName && (
              <p className="text-sm text-gray-500">Welcome back, {userName}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showSearch && (
            <button
              type="button"
              onClick={onSearchClick}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={24} className="text-neutral-dark" />
            </button>
          )}

          <button
            type="button"
            onClick={onNotificationClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={24} className="text-neutral-dark" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1.5 bg-error text-white text-xs font-medium rounded-full flex items-center justify-center">
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onAvatarClick}
            className="w-10 h-10 rounded-full overflow-hidden bg-accent-purple flex items-center justify-center hover:ring-2 hover:ring-primary/20 transition-all"
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="User avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-white font-medium">
                {userName ? userName.charAt(0).toUpperCase() : 'U'}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
