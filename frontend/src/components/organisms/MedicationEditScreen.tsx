import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';
import type { Medication } from '../../types';

interface MedicationEditScreenProps {
  medication?: Medication;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

const inputClassName = "w-full px-4 py-3.5 bg-primary-light/30 border border-primary-light rounded-2xl text-[14px] text-primary-dark font-medium placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
const labelClassName = "block text-[11px] uppercase tracking-wide text-text-muted mb-2";

export const MedicationEditScreen: React.FC<MedicationEditScreenProps> = ({
  medication,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const isEditing = !!medication;

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
        title={isEditing ? 'Edit Medication' : 'Add Medication'}
        onBackClick={onBackClick}
        rightSlot={saveButton}
        variant="secondary"
      />

      <main className="w-full max-w-md mx-auto px-5 pt-6 pb-[140px]">
        <Card padding="xl" className="p-8">
          <div className="space-y-7">
            <div>
              <label className={labelClassName}>Medication Name</label>
              <input
                type="text"
                defaultValue={medication?.name || ''}
                placeholder="e.g., Aspirin"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Dosage</label>
              <input
                type="text"
                defaultValue={medication?.dosage || ''}
                placeholder="e.g., 500mg"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Manufacturer</label>
              <input
                type="text"
                defaultValue={medication?.manufacturer || ''}
                placeholder="e.g., BAYER"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Frequency</label>
              <select
                defaultValue={medication?.frequency || '1x Daily'}
                className={inputClassName}
              >
                <option value="1x Daily">1x Daily</option>
                <option value="2x Daily">2x Daily</option>
                <option value="3x Daily">3x Daily</option>
                <option value="As needed">As needed</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>

            <div>
              <label className={labelClassName}>Reminder Times</label>
              <input
                type="text"
                defaultValue={medication?.time || ''}
                placeholder="e.g., 6:00, 22:00"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Notes</label>
              <textarea
                defaultValue={medication?.notes || ''}
                placeholder="Add any additional notes..."
                rows={3}
                className={`${inputClassName} resize-none`}
              />
            </div>
          </div>
        </Card>
      </main>
    </ScreenContainer>
  );
};

export default MedicationEditScreen;
