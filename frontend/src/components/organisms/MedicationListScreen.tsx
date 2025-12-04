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
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-3xl font-extrabold text-primary-dark">Medications</h1>
          </div>
          <button
            type="button"
            onClick={onAddClick}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Medications list */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <p className="text-sm text-gray-500 mb-4">{medications.length} medications</p>
        <div className="space-y-3">
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
