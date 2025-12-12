import React from 'react';
import { Plus } from 'lucide-react';
import { MedicationCard } from '../molecules';
import { ScreenContainer, ScreenHeader } from '../layout';
import type { Medication } from '../../types';

interface MedicationListScreenProps {
  medications: Medication[];
  onBackClick: () => void;
  onMedicationClick?: (medication: Medication) => void;
  onAddClick?: () => void;
}

export const MedicationListScreen: React.FC<MedicationListScreenProps> = ({
  medications,
  onBackClick,
  onMedicationClick = () => {},
  onAddClick = () => {},
}) => {
  const addButton = (
    <button
      type="button"
      onClick={onAddClick}
      className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
    >
      <Plus size={22} className="text-white" />
    </button>
  );

  return (
    <ScreenContainer>
      <ScreenHeader title="Medications" onBackClick={onBackClick} rightSlot={addButton} />

      <main className="max-w-md mx-auto px-[26px] pt-6 pb-[140px]">
        <p className="text-sm text-neutral-dark mb-6">{medications.length} medications</p>
        <div className="space-y-6">
          {medications.map((medication) => (
            <MedicationCard
              key={medication.id}
              medication={medication}
              onClick={() => onMedicationClick(medication)}
            />
          ))}
          {medications.length === 0 && (
            <p className="text-center text-gray-500 py-8">No medications added yet</p>
          )}
        </div>
      </main>
    </ScreenContainer>
  );
};

export default MedicationListScreen;
