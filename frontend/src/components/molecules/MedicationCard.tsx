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
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow rounded-[24px]">
      <div className="flex gap-4">
        {/* Left side - Medication info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary-dark mb-1">{medication.name}</h3>
          <p className="text-sm text-gray-500 mb-1">{medication.dosage}</p>
          {medication.manufacturer && (
            <p className="text-sm text-gray-500 mb-2">{medication.manufacturer}</p>
          )}
          <p className="text-sm font-semibold text-secondary">{medication.frequency}</p>
        </div>
        
        {/* Right side - Medication image placeholder */}
        <div className="w-24 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-green-700 uppercase">{medication.name}</div>
          </div>
        </div>
      </div>
      
      {/* Reminders section */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell size={16} className="text-gray-400" />
          <span className="text-sm text-gray-500">Reminders</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-primary-dark">{medication.time}</span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onEditClick(); }}
            className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Pencil size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </Card>
  );
};
