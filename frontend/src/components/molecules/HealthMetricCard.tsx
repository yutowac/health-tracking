import React from 'react';
import { Heart, Footprints, Moon, Scale, Activity } from 'lucide-react';
import { Card } from '../atoms';
import type { HealthMetric } from '../../types';

interface HealthMetricCardProps {
  metric: HealthMetric;
  onClick?: () => void;
}

export const HealthMetricCard: React.FC<HealthMetricCardProps> = ({
  metric,
  onClick = () => {},
}) => {
  const typeConfig = {
    weight: { icon: Scale, color: 'text-primary', bgColor: 'bg-primary/10' },
    blood_pressure: { icon: Activity, color: 'text-error', bgColor: 'bg-error/10' },
    heart_rate: { icon: Heart, color: 'text-accent-pink', bgColor: 'bg-accent-pink/10' },
    sleep: { icon: Moon, color: 'text-accent-purple', bgColor: 'bg-accent-purple/10' },
    steps: { icon: Footprints, color: 'text-green-500', bgColor: 'bg-green-50' },
  };

  const config = typeConfig[metric.type];
  const Icon = config.icon;

  const formatLabel = (type: string) => {
    return type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center`}>
          <Icon size={24} className={config.color} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{formatLabel(metric.type)}</p>
          <p className="text-xl font-bold text-neutral-dark">
            {metric.value} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
