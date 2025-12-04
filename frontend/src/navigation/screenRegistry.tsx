import React from 'react';
import { Bell, Search } from 'lucide-react';
import {
  TimelineSection,
  AwardSection,
  CalendarView,
  DashboardOverview,
  MedicalInfoCard,
  NewsScreen,
  SymptomsListScreen,
  MedicationListScreen,
  AppointmentListScreen,
  MedicalInfoEditScreen,
  SymptomEditScreen,
  MedicationEditScreen,
  AppointmentEditScreen,
  SearchScreen,
  SearchResultsScreen,
  SettingsScreen,
  UploadScreen,
  YourWeekScreen,
  AppointmentSection,
  MedicationSection,
} from '../components/organisms';
import {
  dummyNewsItems,
  dummyWeekProgress,
  dummyMedicalInfo,
  dummySymptoms,
} from '../data/dummyData';
import type { ScreenType, ScreenContext } from './types';
import type { Appointment, Medication, Award, TrackingReminder, User } from '../types';

export interface ScreenData {
  user: User | null;
  appointments: Appointment[];
  medications: Medication[];
  awards: Award[];
  trackingReminders: TrackingReminder[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setActiveTab: (tab: 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards') => void;
  toggleMedicationTaken: (id: string) => void;
  toggleReminderCompleted: (id: string) => void;
}

type ScreenRenderer = (ctx: ScreenContext, data: ScreenData) => React.ReactNode;

export const SCREEN_REGISTRY: Record<ScreenType, ScreenRenderer> = {
  dashboard: (ctx, data) => (
    <div className="px-[26px] pt-[52px] pb-[62px] space-y-[30px]">
      {/* Search bar */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => ctx.navigateTo('search')}
          className="flex-1 bg-white rounded-[20px] px-4 py-3 flex items-center gap-2 shadow-sm text-left"
        >
          <Search size={20} className="text-gray-400" />
          <span className="text-gray-400 text-sm">Search your records</span>
        </button>
        <button
          type="button"
          className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-blue relative"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-white" />
        </button>
      </div>
      
      <DashboardOverview
        symptomsTracked={dummyWeekProgress.symptomsTracked}
        symptomsTotal={dummyWeekProgress.symptomsTotal}
        medicationsTaken={dummyWeekProgress.medicationsTaken}
        medicationsTotal={dummyWeekProgress.medicationsTotal}
        newsItems={dummyNewsItems}
        onEditClick={() => ctx.navigateTo('your-week')}
        onNewsClick={() => ctx.navigateTo('news')}
        onCoinsClick={() => data.setActiveTab('rewards')}
      />
      
      <AppointmentSection
        appointments={data.appointments}
        onAppointmentClick={(apt) => {
          ctx.setSelectedAppointment(apt);
          ctx.navigateTo('appointment-edit');
        }}
        onViewAll={() => ctx.navigateTo('appointment-list')}
      />
      
      <MedicationSection
        medications={data.medications}
        onMedicationClick={(med) => {
          ctx.setSelectedMedication(med);
          ctx.navigateTo('medication-edit');
        }}
        onMedicationToggle={(med) => data.toggleMedicationTaken(med.id)}
        onViewAll={() => ctx.navigateTo('medication-list')}
      />
    </div>
  ),

  timeline: (_ctx, data) => (
    <TimelineSection
      reminders={data.trackingReminders}
      onReminderToggle={(reminder) => data.toggleReminderCompleted(reminder.id)}
      onReminderClick={() => {}}
    />
  ),

  calendar: (_ctx, data) => (
    <div className="py-4">
      <CalendarView
        selectedDate={data.selectedDate}
        onDateSelect={data.setSelectedDate}
        onMonthChange={(direction) => {
          const newDate = new Date(data.selectedDate);
          if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
          } else {
            newDate.setMonth(newDate.getMonth() + 1);
          }
          data.setSelectedDate(newDate);
        }}
      />
    </div>
  ),

  medical: (ctx) => (
    <MedicalInfoCard
      medicalInfo={dummyMedicalInfo}
      onEmailClick={() => {}}
      onEditClick={() => ctx.navigateTo('medical-edit')}
    />
  ),

  rewards: (_ctx, data) => (
    <AwardSection
      awards={data.awards}
      onShareClick={() => {}}
    />
  ),

  news: (ctx) => (
    <NewsScreen
      newsItems={dummyNewsItems}
      onBackClick={ctx.goBack}
      onNewsClick={() => {}}
    />
  ),

  'symptoms-list': (ctx) => (
    <SymptomsListScreen
      symptoms={dummySymptoms}
      onBackClick={ctx.goBack}
      onSymptomClick={(symptom) => {
        ctx.setSelectedSymptom(symptom);
        ctx.navigateTo('symptom-edit');
      }}
      onAddClick={() => {
        ctx.setSelectedSymptom(undefined);
        ctx.navigateTo('symptom-edit');
      }}
    />
  ),

  'medication-list': (ctx, data) => (
    <MedicationListScreen
      medications={data.medications}
      onBackClick={ctx.goBack}
      onMedicationClick={(med) => {
        ctx.setSelectedMedication(med);
        ctx.navigateTo('medication-edit');
      }}
      onAddClick={() => {
        ctx.setSelectedMedication(undefined);
        ctx.navigateTo('medication-edit');
      }}
    />
  ),

  'appointment-list': (ctx, data) => (
    <AppointmentListScreen
      appointments={data.appointments}
      onBackClick={ctx.goBack}
      onAppointmentClick={(apt) => {
        ctx.setSelectedAppointment(apt);
        ctx.navigateTo('appointment-edit');
      }}
      onAddClick={() => {
        ctx.setSelectedAppointment(undefined);
        ctx.navigateTo('appointment-edit');
      }}
    />
  ),

  'medical-edit': (ctx) => (
    <MedicalInfoEditScreen
      medicalInfo={dummyMedicalInfo}
      onBackClick={ctx.goBack}
      onSaveClick={ctx.goBack}
    />
  ),

  'symptom-edit': (ctx) => (
    <SymptomEditScreen
      symptom={ctx.selectedSymptom}
      onBackClick={ctx.goBack}
      onSaveClick={ctx.goBack}
    />
  ),

  'medication-edit': (ctx) => (
    <MedicationEditScreen
      medication={ctx.selectedMedication}
      onBackClick={ctx.goBack}
      onSaveClick={ctx.goBack}
    />
  ),

  'appointment-edit': (ctx) => (
    <AppointmentEditScreen
      appointment={ctx.selectedAppointment}
      onBackClick={ctx.goBack}
      onSaveClick={ctx.goBack}
    />
  ),

  search: (ctx) => (
    <SearchScreen
      onBackClick={ctx.goBack}
      onSearch={(query) => {
        ctx.setSearchQuery(query);
        if (query.length > 0) {
          ctx.navigateTo('search-results');
        }
      }}
    />
  ),

  'search-results': (ctx, data) => (
    <SearchResultsScreen
      query={ctx.searchQuery}
      appointments={data.appointments.filter(a => 
        a.doctor.toLowerCase().includes(ctx.searchQuery.toLowerCase()) ||
        (a.specialty && a.specialty.toLowerCase().includes(ctx.searchQuery.toLowerCase()))
      )}
      medications={data.medications.filter(m => 
        m.name.toLowerCase().includes(ctx.searchQuery.toLowerCase())
      )}
      symptoms={dummySymptoms.filter(s => 
        s.name.toLowerCase().includes(ctx.searchQuery.toLowerCase())
      )}
      newsItems={dummyNewsItems.filter(n => 
        n.title.toLowerCase().includes(ctx.searchQuery.toLowerCase())
      )}
      onBackClick={ctx.goBack}
      onAppointmentClick={(apt) => {
        ctx.setSelectedAppointment(apt);
        ctx.navigateTo('appointment-edit');
      }}
      onMedicationClick={(med) => {
        ctx.setSelectedMedication(med);
        ctx.navigateTo('medication-edit');
      }}
      onSymptomClick={(symptom) => {
        ctx.setSelectedSymptom(symptom);
        ctx.navigateTo('symptom-edit');
      }}
    />
  ),

  settings: (ctx, data) => (
    <SettingsScreen
      userName={data.user?.name || 'User'}
      userEmail={data.user?.email}
      onBackClick={ctx.goBack}
      onSettingClick={() => {}}
      onLogoutClick={() => {}}
    />
  ),

  upload: (ctx) => (
    <UploadScreen
      onBackClick={ctx.goBack}
      onUploadClick={() => {}}
    />
  ),

  'your-week': (ctx, data) => (
    <YourWeekScreen
      progress={Math.round((dummyWeekProgress.symptomsTracked / dummyWeekProgress.symptomsTotal) * 100)}
      coins={125}
      medications={data.medications}
      symptoms={dummySymptoms}
      onBackClick={ctx.goBack}
      onMedicationClick={(med) => {
        ctx.setSelectedMedication(med);
        ctx.navigateTo('medication-edit');
      }}
      onSymptomClick={(symptom) => {
        ctx.setSelectedSymptom(symptom);
        ctx.navigateTo('symptom-edit');
      }}
      onViewAllMedications={() => ctx.navigateTo('medication-list')}
      onViewAllSymptoms={() => ctx.navigateTo('symptoms-list')}
    />
  ),
};
