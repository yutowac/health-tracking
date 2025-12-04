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
  // Figma shows 4 icons: Calendar, Search, Upload, Medical ID
  // We map these to our 5 tabs (dashboard is accessed via Home icon)
  const tabs = [
    { id: 'calendar' as TabType, icon: Calendar },
    { id: 'timeline' as TabType, icon: Search },
    { id: 'dashboard' as TabType, icon: Home },
    { id: 'medical' as TabType, icon: User },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white rounded-[24px] shadow-lg px-6 py-3 flex items-center gap-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`p-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-400 hover:text-primary'
              }`}
            >
              <Icon size={24} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
