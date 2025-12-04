import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SymptomCard } from '../molecules';
import type { Symptom } from '../../types';

interface SymptomSectionProps {
  symptoms: Symptom[];
  title?: string;
  onViewAll?: () => void;
  onSymptomClick?: (symptom: Symptom) => void;
  maxItems?: number;
}

export const SymptomSection: React.FC<SymptomSectionProps> = ({
  symptoms,
  title = 'Recent Symptoms',
  onViewAll = () => {},
  onSymptomClick = () => {},
  maxItems = 3,
}) => {
  const displayedSymptoms = symptoms.slice(0, maxItems);

  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-neutral-dark">{title}</h2>
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          View all <ChevronRight size={16} />
        </button>
      </div>
      <div className="space-y-3">
        {displayedSymptoms.map((symptom) => (
          <SymptomCard
            key={symptom.id}
            symptom={symptom}
            onClick={() => onSymptomClick(symptom)}
          />
        ))}
        {symptoms.length === 0 && (
          <p className="text-center text-gray-500 py-4">No symptoms logged</p>
        )}
      </div>
    </section>
  );
};
