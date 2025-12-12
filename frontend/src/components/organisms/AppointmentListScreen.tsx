import React from 'react';
import { Plus } from 'lucide-react';
import { AppointmentCard } from '../molecules';
import { ScreenContainer, ScreenHeader } from '../layout';
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
  const addButton = (
    <button
      type="button"
      onClick={onAddClick}
      className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
    >
      <Plus size={22} className="text-white" />
    </button>
  );

  return (
    <ScreenContainer>
      <ScreenHeader title="Appointments" onBackClick={onBackClick} rightSlot={addButton} />

      <main className="w-full max-w-md mx-auto px-5 pt-6 pb-[140px]">
        <p className="text-sm text-neutral-dark mb-8">{appointments.length} appointments</p>
        <div className="space-y-8">
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
    </ScreenContainer>
  );
};

export default AppointmentListScreen;
