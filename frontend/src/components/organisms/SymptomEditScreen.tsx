import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';
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

  const saveButton = (
    <button
      type="button"
      onClick={onSaveClick}
      className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
    >
      <Check size={22} className="text-white" />
    </button>
  );

  return (
    <ScreenContainer>
      <ScreenHeader
        title={isEditing ? 'Edit Symptom' : 'Add Symptom'}
        onBackClick={onBackClick}
        rightSlot={saveButton}
      />

      {/* Edit form */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <Card className="rounded-[24px]" padding="xl">
          <div className="space-y-6">
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
    </ScreenContainer>
  );
};

export default SymptomEditScreen;
