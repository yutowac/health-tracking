import React from 'react';
import { AwardCard } from '../molecules';
import type { Award } from '../../types';

interface AwardSectionProps {
  awards: Award[];
  title?: string;
  onAwardClick?: (award: Award) => void;
}

export const AwardSection: React.FC<AwardSectionProps> = ({
  awards,
  title = 'Your Achievements',
  onAwardClick = () => {},
}) => {
  const earnedAwards = awards.filter((a) => a.earned);
  const lockedAwards = awards.filter((a) => !a.earned);

  return (
    <section className="px-4 py-3">
      <h2 className="text-lg font-semibold text-neutral-dark mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-3">
        {earnedAwards.length} of {awards.length} earned
      </p>
      
      {earnedAwards.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Earned</h3>
          <div className="space-y-3">
            {earnedAwards.map((award) => (
              <AwardCard
                key={award.id}
                award={award}
                onClick={() => onAwardClick(award)}
              />
            ))}
          </div>
        </div>
      )}
      
      {lockedAwards.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Locked</h3>
          <div className="space-y-3">
            {lockedAwards.map((award) => (
              <AwardCard
                key={award.id}
                award={award}
                onClick={() => onAwardClick(award)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
