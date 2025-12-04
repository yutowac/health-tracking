import React from 'react';
import { Share2 } from 'lucide-react';
import { Card } from '../atoms';
import type { Award } from '../../types';

interface AwardSectionProps {
  awards: Award[];
  onShareClick?: () => void;
}

export const AwardSection: React.FC<AwardSectionProps> = ({
  awards,
  onShareClick = () => {},
}) => {
  // Show the first earned award as the featured badge (matching Figma design)
  const featuredAward = awards.find((a) => a.earned) || awards[0];

  if (!featuredAward) {
    return (
      <section className="px-4 py-3">
        <p className="text-center text-gray-500 py-8">No badges earned yet</p>
      </section>
    );
  }

  // Get badge color based on type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'gold':
        return 'from-yellow-300 via-yellow-400 to-yellow-500';
      case 'silver':
        return 'from-gray-300 via-gray-400 to-gray-500';
      case 'bronze':
        return 'from-orange-300 via-orange-400 to-orange-500';
      default:
        return 'from-purple-300 via-purple-400 to-purple-500';
    }
  };

  return (
    <section className="px-4 py-3">
      {/* Large badge display */}
      <div className="flex justify-center mb-6">
        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${getBadgeColor(featuredAward.type)} shadow-lg flex items-center justify-center`}>
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex flex-col items-center justify-center border-4 border-yellow-500 shadow-inner">
            <span className="text-5xl font-bold text-yellow-700">1</span>
            <span className="text-lg font-bold text-yellow-700">Month</span>
          </div>
        </div>
      </div>
      
      {/* Badge description card */}
      <div className="relative">
        {/* Share button */}
        <button
          type="button"
          onClick={onShareClick}
          className="absolute -top-3 right-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors z-10"
        >
          <Share2 size={20} className="text-white" />
        </button>
        
        <Card className="rounded-[24px] pt-6">
          <h3 className="text-xl font-bold text-primary-dark mb-3">{featuredAward.name}</h3>
          <p className="text-base text-gray-600 leading-relaxed">{featuredAward.description}</p>
        </Card>
      </div>
    </section>
  );
};
