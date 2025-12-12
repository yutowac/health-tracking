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

const inputClassName = "w-full px-4 py-3.5 bg-primary-light/30 border border-primary-light rounded-2xl text-[14px] text-primary-dark font-medium placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
const labelClassName = "block text-[11px] uppercase tracking-wide text-text-muted mb-2";

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
      className="w-12 h-12 bg-gradient-to-br from-primary to-[#0066d6] rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,122,255,0.3)] active:scale-95 transition-transform"
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
        variant="secondary"
      />

      <main className="max-w-md mx-auto px-[26px] pt-6 pb-[140px]">
        <Card padding="xl">
          <div className="space-y-6">
            <div>
              <label className={labelClassName}>Symptom Name</label>
              <input
                type="text"
                defaultValue={symptom?.name || ''}
                placeholder="e.g., Headache, Fatigue"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Severity (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={symptom?.severity || 5}
                className="w-full h-2 bg-primary-light rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-text-muted mt-2">
                <span>Mild</span>
                <span>Severe</span>
              </div>
            </div>

            <div>
              <label className={labelClassName}>Date</label>
              <input
                type="text"
                defaultValue={symptom?.date || new Date().toLocaleDateString('de-DE')}
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Notes</label>
              <textarea
                defaultValue={symptom?.notes || ''}
                placeholder="Add any additional notes..."
                rows={4}
                className={`${inputClassName} resize-none`}
              />
            </div>
          </div>
        </Card>
      </main>
    </ScreenContainer>
  );
};

export default SymptomEditScreen;
