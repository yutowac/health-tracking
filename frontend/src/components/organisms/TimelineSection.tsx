import React from 'react';
import { TrackingReminderCard } from '../molecules';
import type { TrackingReminder } from '../../types';

interface TimelineSectionProps {
  reminders: TrackingReminder[];
  title?: string;
  onReminderToggle?: (reminder: TrackingReminder) => void;
  onReminderClick?: (reminder: TrackingReminder) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  reminders,
  title = 'Today\'s Timeline',
  onReminderToggle = () => {},
  onReminderClick = () => {},
}) => {
  const sortedReminders = [...reminders].sort((a, b) => {
    const timeA = a.time.replace(/[^0-9:]/g, '');
    const timeB = b.time.replace(/[^0-9:]/g, '');
    return timeA.localeCompare(timeB);
  });

  return (
    <section className="px-4 py-3">
      <h2 className="text-lg font-semibold text-neutral-dark mb-3">{title}</h2>
      <div className="space-y-3 relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-light" />
        {sortedReminders.map((reminder) => (
          <div key={reminder.id} className="relative pl-8">
            <div className={`absolute left-5 top-4 w-3 h-3 rounded-full border-2 ${
              reminder.completed ? 'bg-primary border-primary' : 'bg-white border-text-muted'
            }`} />
            <TrackingReminderCard
              reminder={reminder}
              onToggle={() => onReminderToggle(reminder)}
              onClick={() => onReminderClick(reminder)}
            />
          </div>
        ))}
        {reminders.length === 0 && (
          <p className="text-center text-text-muted py-4">No reminders for today</p>
        )}
      </div>
    </section>
  );
};
