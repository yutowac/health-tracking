import React from 'react';
import { Pencil, Pill, Activity } from 'lucide-react';

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
  const progressPercentage = (symptomsTracked / symptomsTotal) * 100;
  
  return (
    <div>
      <div className="bg-gradient-to-br from-[#e8f0ff] via-[#f0e8ff] to-[#ffe8f4] rounded-[28px] p-6 shadow-[0_12px_40px_rgba(0,31,77,0.1),0_4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex gap-5">
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-[22px] p-5 relative shadow-[0_8px_24px_rgba(11,36,67,0.08)]">
            <h3 className="text-primary-dark font-semibold text-[15px] mb-5">Your week</h3>
            
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e8f0ff"
                  strokeWidth="4.5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="4.5"
                  strokeDasharray={`${progressPercentage * 0.88} 88`}
                  strokeLinecap="round"
                  className="drop-shadow-sm"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#007aff" />
                    <stop offset="100%" stopColor="#5b4cc4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-purple-light rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(107,92,231,0.4)]">
                  <Activity size={18} className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2.5 text-[13px]">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary to-[#5b4cc4]" />
                <span className="text-primary-dark font-medium">Symptoms: {symptomsTracked}/{symptomsTotal}</span>
              </div>
              <div className="flex items-center gap-3">
                <Pill size={14} className="text-accent-purple" />
                <span className="text-primary-dark font-medium">Meds: {medicationsTaken}/{medicationsTotal}</span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={onEditClick}
              className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-secondary to-[#ff7ab8] rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(255,95,162,0.4)] active:scale-95 transition-transform"
            >
              <Pencil size={18} className="text-white" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-5">
            <button
              type="button"
              onClick={onCoinsClick}
              className="bg-gradient-to-br from-accent-purple to-accent-purple-light rounded-[20px] p-4 flex items-center justify-center gap-4 shadow-[0_6px_20px_rgba(107,92,231,0.3)] active:scale-[0.98] transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#ffd700] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_10px_rgba(255,204,0,0.5)]">1</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-silver to-[#c0c0c0] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_10px_rgba(142,142,147,0.5)]">2</div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bronze to-[#e8a050] flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_10px_rgba(205,127,50,0.5)]">3</div>
            </button>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-[20px] p-5 flex-1 shadow-[0_8px_24px_rgba(11,36,67,0.08)]">
              <h4 className="text-primary-dark font-semibold text-[15px] mb-4">News</h4>
              <div className="space-y-3">
                {newsItems.slice(0, 2).map((news) => (
                  <button
                    key={news.id}
                    type="button"
                    onClick={() => onNewsClick(news.id)}
                    className="w-full text-left bg-white rounded-xl p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all"
                  >
                    <p className="text-primary-dark font-medium text-[13px] truncate">{news.title}</p>
                    <p className="text-text-muted text-[11px] truncate mt-1">{news.summary}</p>
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
