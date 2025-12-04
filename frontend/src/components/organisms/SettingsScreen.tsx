import React from 'react';
import { ArrowLeft, ChevronRight, User, Bell, Shield, HelpCircle, LogOut, Moon, Globe } from 'lucide-react';

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
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <h1 className="text-3xl font-extrabold text-primary-dark">Settings</h1>
        </div>
      </header>

      {/* User info */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <div className="bg-white rounded-[24px] p-4 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-pink rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {userName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary-dark">{userName}</h2>
            {userEmail && <p className="text-sm text-gray-500">{userEmail}</p>}
          </div>
        </div>

        {/* Settings groups */}
        {settingsGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 px-2">{group.title}</h3>
            <div className="bg-white rounded-[24px] overflow-hidden">
              {group.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSettingClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors ${
                    index < group.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="text-primary" />
                    <span className="text-primary-dark font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout button */}
        <button
          type="button"
          onClick={onLogoutClick}
          className="w-full bg-white rounded-[24px] px-4 py-4 flex items-center gap-3 hover:bg-gray-50 transition-colors"
        >
          <LogOut size={20} className="text-red-500" />
          <span className="text-red-500 font-medium">Log out</span>
        </button>
      </main>
    </div>
  );
};

export default SettingsScreen;
