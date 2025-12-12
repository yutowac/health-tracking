import React from 'react';
import { Search, Calendar, Home, User } from 'lucide-react';

type TabType = 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: 'calendar' as TabType, icon: Calendar, label: 'Calendar' },
    { id: 'timeline' as TabType, icon: Search, label: 'Search' },
    { id: 'dashboard' as TabType, icon: Home, label: 'Home' },
    { id: 'medical' as TabType, icon: User, label: 'Medical' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40" aria-label="Main navigation">
      <div className="bg-white/95 backdrop-blur-md rounded-[32px] shadow-[0_8px_32px_rgba(0,31,77,0.12),0_2px_8px_rgba(0,0,0,0.06)] px-6 py-3 flex items-center gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'bg-primary-light text-primary shadow-[0_4px_12px_rgba(0,122,255,0.2)]'
                  : 'text-text-muted hover:text-primary-dark active:bg-primary-light/30'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
