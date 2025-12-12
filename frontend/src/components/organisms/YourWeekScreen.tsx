import React from 'react';
import { Pill, Activity } from 'lucide-react';
import { Card } from '../atoms';
import { MedicationCard, SymptomCard } from '../molecules';
import { ScreenContainer, ScreenHeader } from '../layout';
import type { Medication, Symptom } from '../../types';

interface YourWeekScreenProps {
  progress: number;
  coins: number;
  medications: Medication[];
  symptoms: Symptom[];
  onBackClick: () => void;
  onMedicationClick?: (medication: Medication) => void;
  onSymptomClick?: (symptom: Symptom) => void;
  onViewAllMedications?: () => void;
  onViewAllSymptoms?: () => void;
}

export const YourWeekScreen: React.FC<YourWeekScreenProps> = ({
  progress,
  coins,
  medications,
  symptoms,
  onBackClick,
  onMedicationClick = () => {},
  onSymptomClick = () => {},
  onViewAllMedications = () => {},
  onViewAllSymptoms = () => {},
}) => {
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <ScreenContainer>
      <ScreenHeader title="Your Week" onBackClick={onBackClick} />

      {/* Progress wheel */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <Card className="rounded-[24px] mb-8" padding="xl">
          <div className="flex flex-col items-center py-4">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="url(#progressGradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0098ff" />
                    <stop offset="100%" stopColor="#f273b1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-primary-dark">{progress}%</span>
                <span className="text-sm text-gray-500">completed</span>
              </div>
            </div>
            
            {/* Coins */}
            <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-yellow-50 rounded-full">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">$</span>
              </div>
              <span className="font-bold text-yellow-700">{coins} coins</span>
            </div>
          </div>
        </Card>

        {/* Medications section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Pill size={22} className="text-primary" />
              <h2 className="text-lg font-semibold text-primary-dark">Medications</h2>
            </div>
            <button
              type="button"
              onClick={onViewAllMedications}
              className="text-sm font-semibold text-primary"
            >
              View all
            </button>
          </div>
          <div className="space-y-5">
            {medications.slice(0, 2).map((medication) => (
              <MedicationCard
                key={medication.id}
                medication={medication}
                onClick={() => onMedicationClick(medication)}
              />
            ))}
          </div>
        </div>

        {/* Symptoms section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Activity size={22} className="text-accent-pink" />
              <h2 className="text-lg font-semibold text-primary-dark">Symptoms</h2>
            </div>
            <button
              type="button"
              onClick={onViewAllSymptoms}
              className="text-sm font-semibold text-primary"
            >
              View all
            </button>
          </div>
          <div className="space-y-5">
            {symptoms.slice(0, 2).map((symptom) => (
              <SymptomCard
                key={symptom.id}
                symptom={symptom}
                onClick={() => onSymptomClick(symptom)}
              />
            ))}
          </div>
        </div>
      </main>
    </ScreenContainer>
  );
};

export default YourWeekScreen;
