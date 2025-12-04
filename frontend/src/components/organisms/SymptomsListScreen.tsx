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
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-3xl font-extrabold text-primary-dark">Symptoms</h1>
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

      {/* Symptoms list */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <p className="text-sm text-gray-500 mb-4">{symptoms.length} symptoms tracked</p>
        <div className="space-y-3">
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
