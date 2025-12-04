import React from 'react';
import { Home, Calendar, Activity, Award, User } from 'lucide-react';

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
    { id: 'dashboard' as TabType, icon: Home, label: 'Home' },
    { id: 'timeline' as TabType, icon: Activity, label: 'Timeline' },
    { id: 'calendar' as TabType, icon: Calendar, label: 'Calendar' },
    { id: 'medical' as TabType, icon: User, label: 'Medical' },
    { id: 'rewards' as TabType, icon: Award, label: 'Rewards' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-500 hover:text-primary hover:bg-primary/5'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
