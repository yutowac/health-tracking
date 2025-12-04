import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppointmentCard } from '../molecules';
import type { Appointment } from '../../types';

interface AppointmentSectionProps {
  appointments: Appointment[];
  title?: string;
  onViewAll?: () => void;
  onAppointmentClick?: (appointment: Appointment) => void;
  maxItems?: number;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  appointments,
  title = 'Your next Appointment',
  onViewAll = () => {},
  onAppointmentClick = () => {},
  maxItems = 2,
}) => {
  const displayedAppointments = appointments.slice(0, maxItems);

  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-neutral-dark">{title}</h2>
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          View all <ChevronRight size={16} />
        </button>
      </div>
      <div className="space-y-3">
        {displayedAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onClick={() => onAppointmentClick(appointment)}
          />
        ))}
        {appointments.length === 0 && (
          <p className="text-center text-gray-500 py-4">No upcoming appointments</p>
        )}
      </div>
    </section>
  );
};
