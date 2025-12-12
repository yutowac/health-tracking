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
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-xl font-bold text-primary-dark">
              {isEditing ? 'Edit Medication' : 'Add Medication'}
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
      <main className="max-w-md mx-auto px-6 pb-[100px]">
        <Card className="rounded-3xl" padding="lg">
          <div className="space-y-5">
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
