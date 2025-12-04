import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Card, Slider } from '../atoms';
import type { Symptom } from '../../types';

interface SymptomCardProps {
  symptom: Symptom;
  onClick?: () => void;
  variant?: 'default' | 'expanded';
}

export const SymptomCard: React.FC<SymptomCardProps> = ({
  symptom,
  onClick = () => {},
  variant = 'default',
}) => {
  const getSeverityColor = (severity: number) => {
    if (severity <= 3) return 'text-green-500';
    if (severity <= 6) return 'text-yellow-500';
    return 'text-error';
  };

  const getSeverityLabel = (severity: number) => {
    if (severity <= 3) return 'Mild';
    if (severity <= 6) return 'Moderate';
    return 'Severe';
  };

  return (
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-neutral-dark">{symptom.name}</h3>
            <span className={`text-sm font-medium ${getSeverityColor(symptom.severity)}`}>
              {getSeverityLabel(symptom.severity)}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
            <Calendar size={14} />
            <span>{symptom.date}</span>
          </div>
          
          {variant === 'expanded' && (
            <>
              <Slider value={symptom.severity} min={1} max={10} label="Severity" className="mb-3" />
              {symptom.notes && (
                <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                  {symptom.notes}
                </p>
              )}
            </>
          )}
          
          {variant === 'default' && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  symptom.severity <= 3 ? 'bg-green-500' : symptom.severity <= 6 ? 'bg-yellow-500' : 'bg-error'
                }`}
                style={{ width: `${(symptom.severity / 10) * 100}%` }}
              />
            </div>
          )}
        </div>
        <ChevronRight size={20} className="text-gray-400 ml-2" />
      </div>
    </Card>
  );
};
