import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { AppointmentCard, MedicationCard, SymptomCard } from '../molecules';
import { Card } from '../atoms';
import { ScreenContainer } from '../layout';
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
    <ScreenContainer>
      <header className="bg-neutral-background px-8 pt-6 pb-6">
        <div className="flex items-center gap-4 max-w-[360px] mx-auto">
          <button type="button" onClick={onBackClick} className="p-1.5">
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <div className="flex-1 bg-white rounded-[20px] px-5 py-4 flex items-center gap-4 shadow-card">
            <Search size={22} className="text-text-muted" />
            <span className="text-primary-dark text-sm">{query}</span>
          </div>
        </div>
      </header>

      {/* Search results */}
      <main className="max-w-[360px] mx-auto px-8 pt-8 pb-[160px]">
        <p className="text-sm text-neutral-dark mb-8">{totalResults} results found</p>

        {/* Appointments */}
        {appointments.length > 0 && (
          <div className="mb-12">
            <h2 className="text-[18px] font-semibold text-primary-dark mb-8">Appointments</h2>
            <div className="space-y-8">
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
          <div className="mb-12">
            <h2 className="text-[18px] font-semibold text-primary-dark mb-8">Medications</h2>
            <div className="space-y-8">
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
          <div className="mb-12">
            <h2 className="text-[18px] font-semibold text-primary-dark mb-8">Symptoms</h2>
            <div className="space-y-8">
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
          <div className="mb-12">
            <h2 className="text-[18px] font-semibold text-primary-dark mb-8">News</h2>
            <div className="space-y-8">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => onNewsClick(item.id)}
                  className="rounded-[24px] hover:shadow-lg transition-shadow cursor-pointer"
                  padding="xl"
                >
                  <h3 className="text-base font-bold text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-dark">{item.summary}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {totalResults === 0 && (
          <p className="text-center text-text-muted py-10">No results found for "{query}"</p>
        )}
      </main>
    </ScreenContainer>
  );
};

export default SearchResultsScreen;
