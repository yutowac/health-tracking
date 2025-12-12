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
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-bold text-primary-dark">Appointments</h1>
          </div>
          <button
            type="button"
            onClick={onAddClick}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Appointments list */}
      <main className="max-w-md mx-auto px-6 pb-[100px]">
        <p className="text-sm text-neutral-dark mb-4">{appointments.length} appointments</p>
        <div className="space-y-4">
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
