import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../atoms';

interface CalendarViewProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onMonthChange?: (direction: 'prev' | 'next') => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  selectedDate,
  onDateSelect,
  onMonthChange = () => {},
}) => {
  const today = new Date();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };
  
  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-card p-5">
      <div className="flex items-center justify-between mb-4">
        <IconButton
          icon={<ChevronLeft size={20} />}
          onClick={() => onMonthChange('prev')}
          ariaLabel="Previous month"
        />
        <h3 className="text-lg font-semibold text-neutral-dark">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <IconButton
          icon={<ChevronRight size={20} />}
          onClick={() => onMonthChange('next')}
          ariaLabel="Next month"
        />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-neutral-dark py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => day && onDateSelect(new Date(currentYear, currentMonth, day))}
            disabled={!day}
            className={`
              aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200
              ${!day ? 'invisible' : ''}
              ${isSelected(day!) ? 'bg-primary text-white' : ''}
              ${isToday(day!) && !isSelected(day!) ? 'bg-primary/10 text-primary' : ''}
              ${!isSelected(day!) && !isToday(day!) && day ? 'hover:bg-primary-light text-neutral-dark' : ''}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};
