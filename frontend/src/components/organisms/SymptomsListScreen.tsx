import React from 'react';
import { Plus } from 'lucide-react';
import { SymptomCard } from '../molecules';
import { ScreenContainer, ScreenHeader } from '../layout';
import type { Symptom } from '../../types';

interface SymptomsListScreenProps {
  symptoms: Symptom[];
  onBackClick: () => void;
  onSymptomClick?: (symptom: Symptom) => void;
  onAddClick?: () => void;
}

export const SymptomsListScreen: React.FC<SymptomsListScreenProps> = ({
  symptoms,
  onBackClick,
  onSymptomClick = () => {},
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
      <ScreenHeader title="Symptoms" onBackClick={onBackClick} rightSlot={addButton} />

      <main className="w-full max-w-md mx-auto px-5 pt-6 pb-[140px]">
        <p className="text-sm text-neutral-dark mb-8">{symptoms.length} symptoms tracked</p>
        <div className="space-y-8">
          {symptoms.map((symptom) => (
            <SymptomCard
              key={symptom.id}
              symptom={symptom}
              onClick={() => onSymptomClick(symptom)}
            />
          ))}
          {symptoms.length === 0 && (
            <p className="text-center text-gray-500 py-8">No symptoms tracked yet</p>
          )}
        </div>
      </main>
    </ScreenContainer>
  );
};

export default SymptomsListScreen;
