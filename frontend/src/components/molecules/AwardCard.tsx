import React from 'react';
import { Award, Lock } from 'lucide-react';
import { Card } from '../atoms';
import type { Award as AwardType } from '../../types';

interface AwardCardProps {
  award: AwardType;
  onClick?: () => void;
}

export const AwardCard: React.FC<AwardCardProps> = ({
  award,
  onClick = () => {},
}) => {
  const typeColors = {
    gold: 'from-yellow-400 to-yellow-600',
    silver: 'from-gray-300 to-gray-500',
    bronze: 'from-orange-400 to-orange-600',
    special: 'from-purple-400 to-pink-500',
  };

  const typeBgColors = {
    gold: 'bg-yellow-50',
    silver: 'bg-gray-50',
    bronze: 'bg-orange-50',
    special: 'bg-purple-50',
  };

  return (
    <Card onClick={onClick} className={`hover:shadow-lg transition-shadow ${!award.earned ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${typeBgColors[award.type]}`}>
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${typeColors[award.type]} flex items-center justify-center`}>
            {award.earned ? (
              <Award size={20} className="text-white" />
            ) : (
              <Lock size={20} className="text-white" />
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-neutral-dark">{award.name}</h3>
          <p className="text-sm text-gray-500">{award.description}</p>
          {award.earned && award.earnedDate && (
            <p className="text-xs text-primary mt-1">Earned on {award.earnedDate}</p>
          )}
        </div>
      </div>
    </Card>
  );
};
