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
    <section className="px-[26px] py-[15px]">
      <div className="flex items-center justify-between mb-[20px]">
        <div>
          <h2 className="text-lg font-semibold text-neutral-dark">{title}</h2>
          <p className="text-sm text-gray-500">
            {takenCount} of {medications.length} taken
          </p>
        </div>
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          View all <ChevronRight size={16} />
        </button>
      </div>
      <div className="space-y-[20px]">
        {displayedMedications.map((medication) => (
          <MedicationCard
            key={medication.id}
            medication={medication}
            onClick={() => onMedicationClick(medication)}
            onToggle={() => onMedicationToggle(medication)}
          />
        ))}
        {medications.length === 0 && (
          <p className="text-center text-gray-500 py-4">No medications scheduled</p>
        )}
      </div>
    </section>
  );
};
