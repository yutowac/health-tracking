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
    <Card onClick={onClick} padding="xl" className="transition-shadow">
      {/* Doctor name and specialty */}
      <h3 className="text-[18px] leading-[1.3] font-bold text-primary-dark mb-2">{appointment.doctor}</h3>
      <p className="text-[14px] leading-[1.4] text-neutral-dark mb-4">{appointment.specialty}</p>
      
      {/* Contact info */}
      <div className="flex items-center gap-3 text-[13px] text-neutral-dark mb-5">
        {appointment.email && (
          <div className="flex items-center gap-1.5">
            <Mail size={14} className="text-text-muted" />
            <span>{appointment.email}</span>
          </div>
        )}
        {appointment.phone && (
          <div className="flex items-center gap-1.5">
            <Phone size={14} className="text-text-muted" />
            <span>{appointment.phone}</span>
          </div>
        )}
      </div>
      
      {/* Date and Time */}
      <div className="flex gap-6 mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-text-muted mb-1">Date</p>
          <p className="text-[15px] leading-[1.4] font-semibold text-primary-dark">{appointment.date}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-text-muted mb-1">Time</p>
          <p className="text-[15px] leading-[1.4] font-semibold text-primary-dark">{appointment.time}</p>
        </div>
      </div>
      
      {/* Address */}
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-wide text-text-muted mb-1">Address</p>
        <p className="text-[15px] leading-[1.4] font-semibold text-primary-dark mb-1">{appointment.location}</p>
        <button
          type="button"
          className="flex items-center gap-1 text-[12px] text-primary font-medium hover:underline"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <MapPin size={12} />
          Open in Google Maps
        </button>
      </div>
      
      {/* Action buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEmailClick(); }}
          className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Mail size={18} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPhoneClick(); }}
          className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Phone size={18} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEditClick(); }}
          className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
        >
          <Pencil size={18} className="text-primary" />
        </button>
      </div>
    </Card>
  );
};
