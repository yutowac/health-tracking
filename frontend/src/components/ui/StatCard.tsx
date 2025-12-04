import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  onClick?: () => void;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  iconColor = 'text-primary',
  iconBgColor = 'bg-primary/10',
  trend,
  onClick = () => {},
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-card p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center`}>
          <Icon size={24} className={iconColor} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-neutral-dark">{value}</span>
            {unit && <span className="text-sm text-gray-500">{unit}</span>}
          </div>
          {trend && (
            <div className={`flex items-center gap-1 text-xs ${trend.isPositive ? 'text-green-500' : 'text-error'}`}>
              <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
              <span className="text-gray-400">vs last week</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
