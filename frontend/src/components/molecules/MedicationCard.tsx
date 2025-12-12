import React from 'react';
import { Bell, Pencil } from 'lucide-react';
import { Card } from '../atoms';
import type { Medication } from '../../types';

interface MedicationCardProps {
  medication: Medication;
  onToggle?: () => void;
  onClick?: () => void;
  onEditClick?: () => void;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({
  medication,
  onClick = () => {},
  onEditClick = () => {},
}) => {
  return (
    <Card onClick={onClick} padding="xl" className="transition-shadow">
      <div className="flex gap-5">
        {/* Left side - Medication info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary-dark mb-1">{medication.name}</h3>
          <p className="text-sm text-neutral-dark mb-1">{medication.dosage}</p>
          {medication.manufacturer && (
            <p className="text-sm text-neutral-dark mb-3">{medication.manufacturer}</p>
          )}
          <p className="text-sm font-semibold text-secondary">{medication.frequency}</p>
        </div>
        
        {/* Right side - Medication image placeholder */}
        <div className="w-28 h-24 bg-gradient-to-br from-medication-green-light to-medication-green/30 rounded-[20px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-medication-green uppercase tracking-wide">{medication.name}</div>
          </div>
        </div>
      </div>
      
      {/* Reminders section */}
      <div className="mt-5 pt-5 border-t border-primary-light flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell size={18} className="text-text-muted" />
          <span className="text-sm text-neutral-dark">Reminders</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base font-semibold text-primary-dark">{medication.time}</span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onEditClick(); }}
            className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center hover:bg-primary-light/80 transition-colors"
          >
            <Pencil size={20} className="text-primary" />
          </button>
        </div>
      </div>
    </Card>
  );
};
