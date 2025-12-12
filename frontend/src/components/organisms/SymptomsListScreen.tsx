import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { SymptomCard } from '../molecules';
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
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBackClick} className="p-1.5">
              <ArrowLeft size={26} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-bold text-primary-dark">Symptoms</h1>
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

      {/* Symptoms list */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <p className="text-sm text-neutral-dark mb-5">{symptoms.length} symptoms tracked</p>
        <div className="space-y-5">
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
    </div>
  );
};

export default SymptomsListScreen;
