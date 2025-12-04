import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange?: () => void;
  label?: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange = () => {},
  label,
  className = '',
}) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <div
        onClick={onChange}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
          checked
            ? 'bg-primary border-primary'
            : 'border-gray-300 hover:border-primary'
        }`}
      >
        {checked && <Check size={14} className="text-white" />}
      </div>
      {label && <span className="text-sm text-neutral-text">{label}</span>}
    </label>
  );
};
