import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';
import type { Appointment } from '../../types';

interface AppointmentEditScreenProps {
  appointment?: Appointment;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

const inputClassName = "w-full px-4 py-3.5 bg-primary-light/30 border border-primary-light rounded-2xl text-[14px] text-primary-dark font-medium placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
const labelClassName = "block text-[11px] uppercase tracking-wide text-text-muted mb-2";

export const AppointmentEditScreen: React.FC<AppointmentEditScreenProps> = ({
  appointment,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const isEditing = !!appointment;

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
        title={isEditing ? 'Edit Appointment' : 'Add Appointment'}
        onBackClick={onBackClick}
        rightSlot={saveButton}
        variant="secondary"
      />

      <main className="max-w-[360px] mx-auto px-8 pt-8 pb-[160px]">
        <Card padding="xl" className="p-8">
          <div className="space-y-7">
            <div>
              <label className={labelClassName}>Doctor Name</label>
              <input
                type="text"
                defaultValue={appointment?.doctor || ''}
                placeholder="e.g., Dr. Schmitz"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Specialty</label>
              <input
                type="text"
                defaultValue={appointment?.specialty || ''}
                placeholder="e.g., Neurologist"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Appointment Type</label>
              <select
                defaultValue={appointment?.type || 'checkup'}
                className={inputClassName}
              >
                <option value="checkup">Checkup</option>
                <option value="specialist">Specialist</option>
                <option value="therapy">Therapy</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClassName}>Date</label>
                <input
                  type="text"
                  defaultValue={appointment?.date || ''}
                  placeholder="DD.MM.YYYY"
                  className={inputClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Time</label>
                <input
                  type="text"
                  defaultValue={appointment?.time || ''}
                  placeholder="HH:MM"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label className={labelClassName}>Location</label>
              <input
                type="text"
                defaultValue={appointment?.location || ''}
                placeholder="Address"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Email</label>
              <input
                type="email"
                defaultValue={appointment?.email || ''}
                placeholder="doctor@example.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label className={labelClassName}>Phone</label>
              <input
                type="tel"
                defaultValue={appointment?.phone || ''}
                placeholder="+49 XXX XXX"
                className={inputClassName}
              />
            </div>
          </div>
        </Card>
      </main>
    </ScreenContainer>
  );
};

export default AppointmentEditScreen;
