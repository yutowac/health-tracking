import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { Avatar, Badge, IconButton } from '../atoms';

interface HeaderProps {
  title: string;
  userName?: string;
  avatarUrl?: string;
  notificationCount?: number;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  userName,
  avatarUrl,
  notificationCount = 0,
  onMenuClick = () => {},
  onNotificationClick = () => {},
  onAvatarClick = () => {},
}) => {
  return (
    <header className="bg-neutral-background px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconButton icon={<Menu size={24} />} onClick={onMenuClick} ariaLabel="Menu" />
          <div>
            <h1 className="text-xl font-bold text-neutral-dark">{title}</h1>
            {userName && <p className="text-sm text-gray-500">Welcome back, {userName}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <IconButton
              icon={<Bell size={24} />}
              onClick={onNotificationClick}
              ariaLabel="Notifications"
            />
            {notificationCount > 0 && (
              <Badge count={notificationCount} className="absolute -top-1 -right-1" />
            )}
          </div>
          <div onClick={onAvatarClick} className="cursor-pointer">
            <Avatar src={avatarUrl} size="md" />
          </div>
        </div>
      </div>
    </header>
  );
};
