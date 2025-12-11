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
    <section>
      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[16px] leading-[1.3] font-semibold text-primary-dark">{title}</h2>
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          View all <ChevronRight size={16} />
        </button>
      </div>
      <div className="space-y-[20px]">
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
