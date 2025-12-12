import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { MedicationCard } from '../molecules';
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
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBackClick} className="p-1.5">
              <ArrowLeft size={26} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-bold text-primary-dark">Medications</h1>
          </div>
          <button
            type="button"
            onClick={onAddClick}
            className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
          >
            <Plus size={22} className="text-white" />
          </button>
        </div>
      </header>

      {/* Medications list */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <p className="text-sm text-neutral-dark mb-5">{medications.length} medications</p>
        <div className="space-y-5">
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
    </div>
  );
};

export default MedicationListScreen;
