import React from 'react';
import { Mail, Pencil } from 'lucide-react';
import { Card } from '../atoms';
import type { MedicalInfo } from '../../types';

interface MedicalInfoCardProps {
  medicalInfo: MedicalInfo;
  onEmailClick?: () => void;
  onEditClick?: () => void;
}

export const MedicalInfoCard: React.FC<MedicalInfoCardProps> = ({
  medicalInfo,
  onEmailClick = () => {},
  onEditClick = () => {},
}) => {
  return (
    <div className="px-4">
      <Card className="rounded-[24px]">
        {/* Name */}
        <h2 className="text-2xl font-bold text-primary-dark mb-4">{medicalInfo.name}</h2>
        
        {/* Basic Info */}
        <div className="space-y-2 mb-6">
          <div className="flex">
            <span className="text-sm text-neutral-dark w-28">Gender:</span>
            <span className="text-sm font-medium text-primary-dark">{medicalInfo.gender}</span>
          </div>
          <div className="flex">
            <span className="text-sm text-neutral-dark w-28">Birthday:</span>
            <span className="text-sm font-medium text-primary-dark">{medicalInfo.birthday}</span>
          </div>
          <div className="flex">
            <span className="text-sm text-neutral-dark w-28">Height:</span>
            <span className="text-sm font-medium text-primary-dark">{medicalInfo.height}</span>
          </div>
          <div className="flex">
            <span className="text-sm text-neutral-dark w-28">Weight:</span>
            <span className="text-sm font-medium text-primary-dark">{medicalInfo.weight}</span>
          </div>
          <div className="flex">
            <span className="text-sm text-neutral-dark w-28">Blood Group:</span>
            <span className="text-sm font-medium text-primary-dark">{medicalInfo.bloodGroup}</span>
          </div>
        </div>
        
        {/* Vaccinations */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-primary mb-3">Vaccinations</h3>
          <div className="space-y-2">
            {medicalInfo.vaccinations.map((vax, index) => (
              <div key={index} className="flex">
                <span className="text-sm text-neutral-dark w-28">{vax.name}:</span>
                <span className="text-sm font-medium text-primary-dark">{vax.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Prior Surgeries */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-primary mb-3">Prior Surgeries</h3>
          <div className="space-y-2">
            {medicalInfo.priorSurgeries.map((surgery, index) => (
              <div key={index} className="flex">
                <span className="text-sm text-neutral-dark w-28">{surgery.name}</span>
                <span className="text-sm font-medium text-primary-dark">{surgery.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Allergies */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-primary mb-3">Allergies</h3>
          <div className="space-y-1">
            {medicalInfo.allergies.map((allergy, index) => (
              <p key={index} className="text-sm font-medium text-primary-dark">{allergy}</p>
            ))}
          </div>
        </div>
        
        {/* Emergency Contacts */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-primary mb-3">Emergency Contacts</h3>
          {medicalInfo.emergencyContacts.map((contact, index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm font-bold text-primary-dark">{contact.name}</p>
              <p className="text-sm text-primary-dark">{contact.phone}</p>
              <p className="text-sm text-primary-dark">{contact.address}</p>
              <p className="text-sm text-primary-dark">{contact.email}</p>
            </div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onEmailClick}
            className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
          >
            <Mail size={20} className="text-primary" />
          </button>
          <button
            type="button"
            onClick={onEditClick}
            className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
          >
            <Pencil size={20} className="text-primary" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MedicalInfoCard;
