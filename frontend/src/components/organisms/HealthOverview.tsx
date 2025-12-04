import React from 'react';
import { HealthMetricCard } from '../molecules';
import type { HealthMetric } from '../../types';

interface HealthOverviewProps {
  metrics: HealthMetric[];
  title?: string;
  onMetricClick?: (metric: HealthMetric) => void;
}

export const HealthOverview: React.FC<HealthOverviewProps> = ({
  metrics,
  title = 'Health Overview',
  onMetricClick = () => {},
}) => {
  return (
    <section className="px-4 py-3">
      <h2 className="text-lg font-semibold text-neutral-dark mb-3">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <HealthMetricCard
            key={metric.id}
            metric={metric}
            onClick={() => onMetricClick(metric)}
          />
        ))}
      </div>
    </section>
  );
};
