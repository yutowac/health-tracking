import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '../atoms';
import type { Symptom } from '../../types';

interface SymptomEditScreenProps {
  symptom?: Symptom;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

export const SymptomEditScreen: React.FC<SymptomEditScreenProps> = ({
  symptom,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const isEditing = !!symptom;

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back and done buttons */}
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-extrabold text-primary-dark">
              {isEditing ? 'Edit Symptom' : 'Add Symptom'}
            </h1>
          </div>
          <button
            type="button"
            onClick={onSaveClick}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
          >
            <Check size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Edit form */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <Card className="rounded-[24px]">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Symptom Name</label>
              <input
                type="text"
                defaultValue={symptom?.name || ''}
                placeholder="e.g., Headache, Fatigue"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Severity (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={symptom?.severity || 5}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Mild</span>
                <span>Severe</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Date</label>
              <input
                type="text"
                defaultValue={symptom?.date || new Date().toLocaleDateString('de-DE')}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Notes</label>
              <textarea
                defaultValue={symptom?.notes || ''}
                placeholder="Add any additional notes..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SymptomEditScreen;
