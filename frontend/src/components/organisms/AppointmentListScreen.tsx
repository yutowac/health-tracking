import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { AppointmentCard } from '../molecules';
import type { Appointment } from '../../types';

interface AppointmentListScreenProps {
  appointments: Appointment[];
  onBackClick: () => void;
  onAppointmentClick?: (appointment: Appointment) => void;
  onAddClick?: () => void;
}

export const AppointmentListScreen: React.FC<AppointmentListScreenProps> = ({
  appointments,
  onBackClick,
  onAppointmentClick = () => {},
  onAddClick = () => {},
}) => {
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBackClick} className="p-1.5">
              <ArrowLeft size={26} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-bold text-primary-dark">Appointments</h1>
          </div>
          <button
            type="button"
            onClick={onAddClick}
            className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
          >
            <Plus size={22} className="text-white" />
          </button>
        </div>
      </header>

      {/* Appointments list */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <p className="text-sm text-neutral-dark mb-5">{appointments.length} appointments</p>
        <div className="space-y-5">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onClick={() => onAppointmentClick(appointment)}
            />
          ))}
          {appointments.length === 0 && (
            <p className="text-center text-gray-500 py-8">No appointments scheduled</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AppointmentListScreen;
