import React from 'react';

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
  label?: string;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 10,
  step = 1,
  onChange = () => {},
  className = '',
  label,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm text-neutral-text">{label}</span>
          <span className="text-sm font-medium text-primary">{value}</span>
        </div>
      )}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #0098ff 0%, #0098ff ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
        />
      </div>
    </div>
  );
};
