import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { AppointmentCard, MedicationCard, SymptomCard } from '../molecules';
import { Card } from '../atoms';
import type { Appointment, Medication, Symptom } from '../../types';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
}

interface SearchResultsScreenProps {
  query: string;
  appointments: Appointment[];
  medications: Medication[];
  symptoms: Symptom[];
  newsItems: NewsItem[];
  onBackClick: () => void;
  onAppointmentClick?: (appointment: Appointment) => void;
  onMedicationClick?: (medication: Medication) => void;
  onSymptomClick?: (symptom: Symptom) => void;
  onNewsClick?: (id: string) => void;
}

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  query,
  appointments,
  medications,
  symptoms,
  newsItems,
  onBackClick,
  onAppointmentClick = () => {},
  onMedicationClick = () => {},
  onSymptomClick = () => {},
  onNewsClick = () => {},
}) => {
  const totalResults = appointments.length + medications.length + symptoms.length + newsItems.length;

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button and search bar */}
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <div className="flex-1 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-card">
            <Search size={20} className="text-text-muted" />
            <span className="text-primary-dark text-sm">{query}</span>
          </div>
        </div>
      </header>

      {/* Search results */}
      <main className="max-w-md mx-auto px-6 pb-[100px]">
        <p className="text-sm text-neutral-dark mb-4">{totalResults} results found</p>

        {/* Appointments */}
        {appointments.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-semibold text-primary-dark mb-4">Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onClick={() => onAppointmentClick(appointment)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Medications */}
        {medications.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-semibold text-primary-dark mb-4">Medications</h2>
            <div className="space-y-4">
              {medications.map((medication) => (
                <MedicationCard
                  key={medication.id}
                  medication={medication}
                  onClick={() => onMedicationClick(medication)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Symptoms */}
        {symptoms.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-semibold text-primary-dark mb-4">Symptoms</h2>
            <div className="space-y-4">
              {symptoms.map((symptom) => (
                <SymptomCard
                  key={symptom.id}
                  symptom={symptom}
                  onClick={() => onSymptomClick(symptom)}
                />
              ))}
            </div>
          </div>
        )}

        {/* News */}
        {newsItems.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-semibold text-primary-dark mb-4">News</h2>
            <div className="space-y-4">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => onNewsClick(item.id)}
                  className="rounded-3xl hover:shadow-lg transition-shadow cursor-pointer"
                  padding="lg"
                >
                  <h3 className="text-base font-bold text-primary-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-dark">{item.summary}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {totalResults === 0 && (
          <p className="text-center text-text-muted py-8">No results found for "{query}"</p>
        )}
      </main>
    </div>
  );
};

export default SearchResultsScreen;
