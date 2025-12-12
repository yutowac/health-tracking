import React from 'react';
import { Mail, Phone, Pencil, MapPin } from 'lucide-react';
import { Card } from '../atoms';
import type { Appointment } from '../../types';

interface AppointmentCardProps {
  appointment: Appointment;
  onClick?: () => void;
  onEmailClick?: () => void;
  onPhoneClick?: () => void;
  onEditClick?: () => void;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onClick = () => {},
  onEmailClick = () => {},
  onPhoneClick = () => {},
  onEditClick = () => {},
}) => {
  return (
    <Card onClick={onClick} padding="xl" className="transition-shadow p-7">
      {/* Doctor name and specialty */}
      <h3 className="text-xl font-bold text-primary-dark mb-3">{appointment.doctor}</h3>
      <p className="text-sm text-neutral-dark mb-7">{appointment.specialty}</p>
      
      {/* Contact info */}
      <div className="flex items-center gap-5 text-[13px] text-neutral-dark mb-7">
        {appointment.email && (
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-text-muted" />
            <span>{appointment.email}</span>
          </div>
        )}
        {appointment.phone && (
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-text-muted" />
            <span>{appointment.phone}</span>
          </div>
        )}
      </div>
      
      {/* Date and Time */}
      <div className="flex gap-12 mb-7">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-text-muted mb-3">Date</p>
          <p className="text-base font-semibold text-primary-dark">{appointment.date}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-text-muted mb-3">Time</p>
          <p className="text-base font-semibold text-primary-dark">{appointment.time}</p>
        </div>
      </div>
      
      {/* Address */}
      <div className="mb-7">
        <p className="text-[11px] uppercase tracking-wide text-text-muted mb-3">Address</p>
        <p className="text-base font-semibold text-primary-dark mb-4">{appointment.location}</p>
        <button
          type="button"
          className="flex items-center gap-1.5 text-[13px] text-primary font-medium hover:underline"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <MapPin size={14} />
          Open in Google Maps
        </button>
      </div>
      
      {/* Action buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEmailClick(); }}
          className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Mail size={20} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPhoneClick(); }}
          className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Phone size={20} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEditClick(); }}
          className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Pencil size={20} className="text-primary" />
        </button>
      </div>
    </Card>
  );
};
