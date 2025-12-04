import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { Card, Checkbox } from '../atoms';
import type { Medication } from '../../types';

interface MedicationCardProps {
  medication: Medication;
  onToggle?: () => void;
  onClick?: () => void;
  variant?: 'default' | 'expanded';
}

export const MedicationCard: React.FC<MedicationCardProps> = ({
  medication,
  onToggle = () => {},
  onClick = () => {},
  variant = 'default',
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox checked={medication.taken} onChange={onToggle} />
        </div>
        <div className="flex-1" onClick={onClick}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`font-semibold ${medication.taken ? 'text-gray-400 line-through' : 'text-neutral-dark'}`}>
                {medication.name}
              </h3>
              <p className="text-sm text-gray-500">{medication.dosage} - {medication.frequency}</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
            <Clock size={14} />
            <span>{medication.time}</span>
          </div>
          
          {variant === 'expanded' && medication.notes && (
            <p className="mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
              {medication.notes}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};
