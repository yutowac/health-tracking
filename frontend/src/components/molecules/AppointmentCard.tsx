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
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow rounded-[24px]">
      {/* Doctor name and specialty */}
      <h3 className="text-xl font-bold text-primary-dark mb-1">{appointment.doctor}</h3>
      <p className="text-sm text-gray-500 mb-3">{appointment.specialty}</p>
      
      {/* Contact info */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        {appointment.email && (
          <div className="flex items-center gap-1">
            <Mail size={14} className="text-gray-400" />
            <span>{appointment.email}</span>
          </div>
        )}
        {appointment.phone && (
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-gray-400" />
            <span>{appointment.phone}</span>
          </div>
        )}
      </div>
      
      {/* Date and Time */}
      <div className="flex gap-8 mb-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Date</p>
          <p className="text-base font-semibold text-primary-dark">{appointment.date}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Time</p>
          <p className="text-base font-semibold text-primary-dark">{appointment.time}</p>
        </div>
      </div>
      
      {/* Address */}
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-1">Address</p>
        <p className="text-base font-semibold text-primary-dark mb-1">{appointment.location}</p>
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
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
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <Mail size={18} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPhoneClick(); }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <Phone size={18} className="text-primary" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onEditClick(); }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <Pencil size={18} className="text-primary" />
        </button>
      </div>
    </Card>
  );
};
