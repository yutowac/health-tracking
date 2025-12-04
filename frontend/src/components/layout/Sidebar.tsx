import React from 'react';
import {
  Home,
  Activity,
  Calendar,
  User,
  Award,
  Settings,
  HelpCircle,
  LogOut,
  X,
  LucideIcon,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

interface SidebarProps {
  isOpen: boolean;
  activeItem?: string;
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  onClose?: () => void;
  onNavItemClick?: (itemId: string) => void;
  onSettingsClick?: () => void;
  onHelpClick?: () => void;
  onLogoutClick?: () => void;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'timeline', label: 'Timeline', icon: Activity },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'medical', label: 'Medical Info', icon: User },
  { id: 'rewards', label: 'Rewards', icon: Award },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeItem = 'dashboard',
  userName = 'User',
  userEmail,
  avatarUrl,
  onClose = () => {},
  onNavItemClick = () => {},
  onSettingsClick = () => {},
  onHelpClick = () => {},
  onLogoutClick = () => {},
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:shadow-none lg:border-r lg:border-gray-200
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-accent-purple flex items-center justify-center">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="User avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-medium">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-neutral-dark">{userName}</p>
                {userEmail && (
                  <p className="text-xs text-gray-500 truncate max-w-[150px]">{userEmail}</p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavItemClick(item.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl
                        transition-all duration-200
                        ${isActive
                          ? 'bg-primary text-white shadow-blue'
                          : 'text-neutral-dark hover:bg-gray-100'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                      {item.badge && item.badge > 0 && (
                        <span className={`
                          ml-auto min-w-5 h-5 px-1.5 rounded-full text-xs font-medium
                          flex items-center justify-center
                          ${isActive ? 'bg-white/20 text-white' : 'bg-error text-white'}
                        `}>
                          {item.badge > 99 ? '99+' : item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <ul className="space-y-1">
              <li>
                <button
                  type="button"
                  onClick={onSettingsClick}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-dark hover:bg-gray-100 transition-colors"
                >
                  <Settings size={20} />
                  <span className="font-medium">Settings</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onHelpClick}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-dark hover:bg-gray-100 transition-colors"
                >
                  <HelpCircle size={20} />
                  <span className="font-medium">Help & Support</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onLogoutClick}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error/10 transition-colors"
                >
                  <LogOut size={20} />
                  <span className="font-medium">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
