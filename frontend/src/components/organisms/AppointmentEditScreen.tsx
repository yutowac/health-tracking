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
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-xl font-bold text-primary-dark">
              {isEditing ? 'Edit Appointment' : 'Add Appointment'}
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
