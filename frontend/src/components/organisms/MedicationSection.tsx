import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MedicationCard } from '../molecules';
import type { Medication } from '../../types';

interface MedicationSectionProps {
  medications: Medication[];
  title?: string;
  onViewAll?: () => void;
  onMedicationClick?: (medication: Medication) => void;
  onMedicationToggle?: (medication: Medication) => void;
  maxItems?: number;
}

export const MedicationSection: React.FC<MedicationSectionProps> = ({
  medications,
  title = 'Today\'s Medications',
  onViewAll = () => {},
  onMedicationClick = () => {},
  onMedicationToggle = () => {},
  maxItems = 3,
}) => {
  const displayedMedications = medications.slice(0, maxItems);
  const takenCount = medications.filter((m) => m.taken).length;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[18px] font-semibold text-primary-dark">{title}</h2>
          <p className="text-sm text-neutral-dark mt-2">
            {takenCount} of {medications.length} taken
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          View all <ChevronRight size={18} />
        </button>
      </div>
      <div className="space-y-6">
        {displayedMedications.map((medication) => (
          <MedicationCard
            key={medication.id}
            medication={medication}
            onClick={() => onMedicationClick(medication)}
            onToggle={() => onMedicationToggle(medication)}
          />
        ))}
        {medications.length === 0 && (
          <p className="text-center text-text-muted py-4">No medications scheduled</p>
        )}
      </div>
    </section>
  );
};
