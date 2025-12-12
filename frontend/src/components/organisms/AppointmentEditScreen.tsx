import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '../atoms';
import type { Appointment } from '../../types';

interface AppointmentEditScreenProps {
  appointment?: Appointment;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

export const AppointmentEditScreen: React.FC<AppointmentEditScreenProps> = ({
  appointment,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const isEditing = !!appointment;

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
              {isEditing ? 'Edit Appointment' : 'Add Appointment'}
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
              <label className="block text-sm text-gray-500 mb-1">Doctor Name</label>
              <input
                type="text"
                defaultValue={appointment?.doctor || ''}
                placeholder="e.g., Dr. Schmitz"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Specialty</label>
              <input
                type="text"
                defaultValue={appointment?.specialty || ''}
                placeholder="e.g., Neurologist"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Appointment Type</label>
              <select
                defaultValue={appointment?.type || 'checkup'}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="checkup">Checkup</option>
                <option value="specialist">Specialist</option>
                <option value="therapy">Therapy</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Date</label>
                <input
                  type="text"
                  defaultValue={appointment?.date || ''}
                  placeholder="DD.MM.YYYY"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Time</label>
                <input
                  type="text"
                  defaultValue={appointment?.time || ''}
                  placeholder="HH:MM"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Location</label>
              <input
                type="text"
                defaultValue={appointment?.location || ''}
                placeholder="Address"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                type="email"
                defaultValue={appointment?.email || ''}
                placeholder="doctor@example.com"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <input
                type="tel"
                defaultValue={appointment?.phone || ''}
                placeholder="+49 XXX XXX"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AppointmentEditScreen;
