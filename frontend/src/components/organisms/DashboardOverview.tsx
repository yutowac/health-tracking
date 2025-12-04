import React from 'react';
import { Pencil, Pill } from 'lucide-react';

interface DashboardOverviewProps {
  symptomsTracked: number;
  symptomsTotal: number;
  medicationsTaken: number;
  medicationsTotal: number;
  newsItems: { id: string; title: string; summary: string }[];
  onEditClick?: () => void;
  onNewsClick?: (id: string) => void;
  onCoinsClick?: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  symptomsTracked,
  symptomsTotal,
  medicationsTaken,
  medicationsTotal,
  newsItems,
  onEditClick = () => {},
  onNewsClick = () => {},
  onCoinsClick = () => {},
}) => {
  // Calculate progress percentage for the donut chart
  const progressPercentage = (symptomsTracked / symptomsTotal) * 100;
  
  return (
    <div className="mx-[26px] mb-[30px]">
      {/* Main overview card with gradient background */}
      <div className="bg-gradient-to-br from-primary-light via-[#f0e8ff] to-[#ffe8f4] rounded-[24px] p-[32px] shadow-card">
        <div className="flex gap-3">
          {/* Left side - Your week card */}
          <div className="flex-1 bg-white/60 rounded-[20px] p-4 relative">
            <h3 className="text-primary-dark font-semibold text-sm mb-3">Your week</h3>
            
            {/* Donut chart */}
            <div className="relative w-20 h-20 mx-auto mb-3">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                {/* Progress circle */}
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#0098ff"
                  strokeWidth="4"
                  strokeDasharray={`${progressPercentage * 0.88} 88`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">~</span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-primary-dark font-medium">{symptomsTracked}/{symptomsTotal}</span>
              </div>
              <div className="flex items-center gap-2">
                <Pill size={12} className="text-accent-purple" />
                <span className="text-primary-dark font-medium">{medicationsTaken}/{medicationsTotal}</span>
              </div>
            </div>
            
            {/* Edit button */}
            <button
              type="button"
              onClick={onEditClick}
              className="absolute bottom-3 right-3 w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shadow-sm"
            >
              <Pencil size={14} className="text-white" />
            </button>
          </div>
          
          {/* Right side - Coins and News */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Coins row */}
            <button
              type="button"
              onClick={onCoinsClick}
              className="bg-accent-purple rounded-[16px] p-3 flex items-center justify-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xs shadow-md">1</div>
              <div className="w-8 h-8 rounded-full bg-silver flex items-center justify-center text-white font-bold text-xs shadow-md">2</div>
              <div className="w-8 h-8 rounded-full bg-bronze flex items-center justify-center text-white font-bold text-xs shadow-md">3</div>
            </button>
            
            {/* News section */}
            <div className="bg-white/80 rounded-[16px] p-3 flex-1">
              <h4 className="text-primary-dark font-semibold text-sm mb-2">News</h4>
              <div className="space-y-2">
                {newsItems.slice(0, 2).map((news) => (
                  <button
                    key={news.id}
                    type="button"
                    onClick={() => onNewsClick(news.id)}
                    className="w-full text-left bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-primary-dark font-medium text-xs truncate">{news.title}</p>
                    <p className="text-gray-500 text-[10px] truncate">{news.summary}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
