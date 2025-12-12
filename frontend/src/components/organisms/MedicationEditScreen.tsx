import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '../atoms';
import type { Medication } from '../../types';

interface MedicationEditScreenProps {
  medication?: Medication;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

export const MedicationEditScreen: React.FC<MedicationEditScreenProps> = ({
  medication,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const isEditing = !!medication;

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back and done buttons */}
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBackClick} className="p-1.5">
              <ArrowLeft size={26} className="text-primary-dark" />
            </button>
            <h1 className="text-xl font-bold text-primary-dark">
              {isEditing ? 'Edit Medication' : 'Add Medication'}
            </h1>
          </div>
          <button
            type="button"
            onClick={onSaveClick}
            className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
          >
            <Check size={22} className="text-white" />
          </button>
        </div>
      </header>

      {/* Edit form */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <Card className="rounded-[24px]" padding="xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Medication Name</label>
              <input
                type="text"
                defaultValue={medication?.name || ''}
                placeholder="e.g., Aspirin"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Dosage</label>
              <input
                type="text"
                defaultValue={medication?.dosage || ''}
                placeholder="e.g., 500mg"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Manufacturer</label>
              <input
                type="text"
                defaultValue={medication?.manufacturer || ''}
                placeholder="e.g., BAYER"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Frequency</label>
              <select
                defaultValue={medication?.frequency || '1x Daily'}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="1x Daily">1x Daily</option>
                <option value="2x Daily">2x Daily</option>
                <option value="3x Daily">3x Daily</option>
                <option value="As needed">As needed</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Reminder Times</label>
              <input
                type="text"
                defaultValue={medication?.time || ''}
                placeholder="e.g., 6:00, 22:00"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Notes</label>
              <textarea
                defaultValue={medication?.notes || ''}
                placeholder="Add any additional notes..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default MedicationEditScreen;
