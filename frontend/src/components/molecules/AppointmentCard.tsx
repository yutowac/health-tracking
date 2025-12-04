import React from 'react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Card } from '../atoms';
import type { Appointment } from '../../types';

interface AppointmentCardProps {
  appointment: Appointment;
  onClick?: () => void;
  variant?: 'default' | 'expanded';
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onClick = () => {},
  variant = 'default',
}) => {
  const typeColors = {
    checkup: 'bg-primary/10 text-primary',
    specialist: 'bg-accent-purple/10 text-accent-purple',
    therapy: 'bg-accent-pink/10 text-accent-pink',
    other: 'bg-gray-100 text-gray-600',
  };

  return (
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[appointment.type]}`}>
              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
            </span>
          </div>
          <h3 className="font-semibold text-neutral-dark mb-1">{appointment.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{appointment.doctor}</p>
          
          {variant === 'expanded' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>{appointment.location}</span>
              </div>
            </div>
          )}
          
          {variant === 'default' && (
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{appointment.time}</span>
              </div>
            </div>
          )}
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>
    </Card>
  );
};
