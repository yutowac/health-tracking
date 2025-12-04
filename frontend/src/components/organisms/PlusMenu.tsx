import React from 'react';
import { Plus, X, Pill, Activity, Calendar, FileText } from 'lucide-react';
import { IconButton } from '../atoms';

interface PlusMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onAddMedication?: () => void;
  onAddSymptom?: () => void;
  onAddAppointment?: () => void;
  onUpload?: () => void;
}

export const PlusMenu: React.FC<PlusMenuProps> = ({
  isOpen,
  onToggle,
  onAddMedication = () => {},
  onAddSymptom = () => {},
  onAddAppointment = () => {},
  onUpload = () => {},
}) => {
  const menuItems = [
    { icon: Pill, label: 'Medication', onClick: onAddMedication, color: 'bg-primary' },
    { icon: Activity, label: 'Symptom', onClick: onAddSymptom, color: 'bg-accent-pink' },
    { icon: Calendar, label: 'Appointment', onClick: onAddAppointment, color: 'bg-accent-purple' },
    { icon: FileText, label: 'Upload', onClick: onUpload, color: 'bg-green-500' },
  ];

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 items-end mb-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="bg-white px-3 py-1.5 rounded-full shadow-card text-sm font-medium text-neutral-dark">
                  {item.label}
                </span>
                <button
                  onClick={item.onClick}
                  className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity`}
                >
                  <Icon size={24} />
                </button>
              </div>
            );
          })}
        </div>
      )}
      <IconButton
        icon={isOpen ? <X size={28} /> : <Plus size={28} />}
        variant="primary"
        size="lg"
        onClick={onToggle}
        className={`shadow-blue transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
        ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
      />
    </div>
  );
};
