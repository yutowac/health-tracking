import React from 'react';
import { Clock, Pill, Activity, Calendar as CalendarIcon, Bell } from 'lucide-react';
import { Card, Checkbox } from '../atoms';
import type { TrackingReminder } from '../../types';

interface TrackingReminderCardProps {
  reminder: TrackingReminder;
  onToggle?: () => void;
  onClick?: () => void;
}

export const TrackingReminderCard: React.FC<TrackingReminderCardProps> = ({
  reminder,
  onToggle = () => {},
  onClick = () => {},
}) => {
  const typeIcons = {
    medication: Pill,
    symptom: Activity,
    appointment: CalendarIcon,
    general: Bell,
  };

  const typeColors = {
    medication: 'bg-primary/10 text-primary',
    symptom: 'bg-accent-pink/10 text-accent-pink',
    appointment: 'bg-accent-purple/10 text-accent-purple',
    general: 'bg-gray-100 text-gray-600',
  };

  const Icon = typeIcons[reminder.type];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <div className="pt-1">
          <Checkbox checked={reminder.completed} onChange={onToggle} />
        </div>
        <div className="flex-1" onClick={onClick}>
          <div className="flex items-center gap-2 mb-1">
            <div className={`p-1.5 rounded-lg ${typeColors[reminder.type]}`}>
              <Icon size={14} />
            </div>
            <h3 className={`font-semibold ${reminder.completed ? 'text-gray-400 line-through' : 'text-neutral-dark'}`}>
              {reminder.title}
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">{reminder.description}</p>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock size={14} />
            <span>{reminder.time}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
