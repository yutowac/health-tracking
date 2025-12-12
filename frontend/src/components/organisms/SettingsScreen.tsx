import React from 'react';
import { ChevronRight, User, Bell, Shield, HelpCircle, LogOut, Moon, Globe } from 'lucide-react';
import { ScreenContainer, ScreenHeader } from '../layout';

interface SettingsScreenProps {
  userName: string;
  userEmail?: string;
  onBackClick: () => void;
  onSettingClick?: (setting: string) => void;
  onLogoutClick?: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  userName,
  userEmail = '',
  onBackClick,
  onSettingClick = () => {},
  onLogoutClick = () => {},
}) => {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'privacy', label: 'Privacy & Security', icon: Shield },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { id: 'appearance', label: 'Appearance', icon: Moon },
        { id: 'language', label: 'Language', icon: Globe },
      ],
    },
    {
      title: 'Support',
      items: [
        { id: 'help', label: 'Help & Support', icon: HelpCircle },
      ],
    },
  ];

  return (
    <ScreenContainer>
      <ScreenHeader title="Settings" onBackClick={onBackClick} />

      {/* User info */}
      <main className="max-w-md mx-auto px-[26px] pt-6 pb-[140px]">
        <div className="bg-white rounded-[24px] p-6 mb-10 flex items-center gap-6 shadow-card">
          <div className="w-18 h-18 bg-gradient-to-br from-primary to-accent-pink rounded-full flex items-center justify-center" style={{ width: '72px', height: '72px' }}>
            <span className="text-2xl font-bold text-white">
              {userName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-dark">{userName}</h2>
            {userEmail && <p className="text-sm text-gray-500 mt-1">{userEmail}</p>}
          </div>
        </div>

        {/* Settings groups */}
        {settingsGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <h3 className="text-sm font-semibold text-neutral-dark mb-5 px-1">{group.title}</h3>
            <div className="bg-white rounded-[24px] overflow-hidden shadow-card">
              {group.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSettingClick(item.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 hover:bg-primary-light/50 transition-colors ${
                    index < group.items.length - 1 ? 'border-b border-primary-light' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={22} className="text-primary" />
                    <span className="text-primary-dark font-medium text-sm">{item.label}</span>
                  </div>
                  <ChevronRight size={22} className="text-text-muted" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout button */}
        <button
          type="button"
          onClick={onLogoutClick}
          className="w-full bg-white rounded-[24px] px-6 py-5 flex items-center gap-4 hover:bg-red-50 transition-colors shadow-card"
        >
          <LogOut size={22} className="text-error" />
          <span className="text-error font-medium text-sm">Log out</span>
        </button>
      </main>
    </ScreenContainer>
  );
};

export default SettingsScreen;
