import type { Symptom, Medication, Appointment } from '../types';

export type ScreenType = 
  | 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards'
  | 'news' | 'symptoms-list' | 'medication-list' | 'appointment-list'
  | 'medical-edit' | 'symptom-edit' | 'medication-edit' | 'appointment-edit'
  | 'search' | 'search-results' | 'settings' | 'upload' | 'your-week';

export interface ScreenContext {
  navigateTo: (screen: ScreenType) => void;
  goBack: () => void;
  selectedSymptom?: Symptom;
  setSelectedSymptom: (symptom: Symptom | undefined) => void;
  selectedMedication?: Medication;
  setSelectedMedication: (medication: Medication | undefined) => void;
  selectedAppointment?: Appointment;
  setSelectedAppointment: (appointment: Appointment | undefined) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const MAIN_TABS: ScreenType[] = ['dashboard', 'timeline', 'calendar', 'medical', 'rewards'];

export const SCREEN_TITLES: Partial<Record<ScreenType, string>> = {
  dashboard: 'Dashboard',
  timeline: 'Your Timeline',
  calendar: 'Calendar',
  medical: 'Medical Info',
  rewards: 'Your Badges',
};

export const BACK_NAVIGATION: Record<ScreenType, ScreenType> = {
  dashboard: 'dashboard',
  timeline: 'timeline',
  calendar: 'calendar',
  medical: 'medical',
  rewards: 'rewards',
  news: 'dashboard',
  'your-week': 'dashboard',
  search: 'dashboard',
  'symptoms-list': 'dashboard',
  'symptom-edit': 'dashboard',
  'medication-list': 'dashboard',
  'medication-edit': 'dashboard',
  'appointment-list': 'dashboard',
  'appointment-edit': 'dashboard',
  'medical-edit': 'medical',
  'search-results': 'search',
  settings: 'dashboard',
  upload: 'dashboard',
};
