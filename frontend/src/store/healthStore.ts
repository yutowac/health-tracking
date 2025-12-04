import { create } from 'zustand';
import type { Appointment, Medication, Symptom, HealthMetric, NewsItem, Award, User, TrackingReminder } from '../types';

interface HealthState {
  user: User | null;
  appointments: Appointment[];
  medications: Medication[];
  symptoms: Symptom[];
  healthMetrics: HealthMetric[];
  newsItems: NewsItem[];
  awards: Award[];
  trackingReminders: TrackingReminder[];
  selectedDate: Date;
  isPlusMenuOpen: boolean;
  activeTab: 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards';
  
  setUser: (user: User | null) => void;
  setAppointments: (appointments: Appointment[]) => void;
  setMedications: (medications: Medication[]) => void;
  setSymptoms: (symptoms: Symptom[]) => void;
  setHealthMetrics: (metrics: HealthMetric[]) => void;
  setNewsItems: (news: NewsItem[]) => void;
  setAwards: (awards: Award[]) => void;
  setTrackingReminders: (reminders: TrackingReminder[]) => void;
  setSelectedDate: (date: Date) => void;
  togglePlusMenu: () => void;
  setActiveTab: (tab: 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards') => void;
  toggleMedicationTaken: (id: string) => void;
  toggleReminderCompleted: (id: string) => void;
}

export const useHealthStore = create<HealthState>((set) => ({
  user: null,
  appointments: [],
  medications: [],
  symptoms: [],
  healthMetrics: [],
  newsItems: [],
  awards: [],
  trackingReminders: [],
  selectedDate: new Date(),
  isPlusMenuOpen: false,
  activeTab: 'dashboard',
  
  setUser: (user) => set({ user }),
  setAppointments: (appointments) => set({ appointments }),
  setMedications: (medications) => set({ medications }),
  setSymptoms: (symptoms) => set({ symptoms }),
  setHealthMetrics: (metrics) => set({ healthMetrics: metrics }),
  setNewsItems: (news) => set({ newsItems: news }),
  setAwards: (awards) => set({ awards }),
  setTrackingReminders: (reminders) => set({ trackingReminders: reminders }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  togglePlusMenu: () => set((state) => ({ isPlusMenuOpen: !state.isPlusMenuOpen })),
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleMedicationTaken: (id) => set((state) => ({
    medications: state.medications.map((med) =>
      med.id === id ? { ...med, taken: !med.taken } : med
    ),
  })),
  toggleReminderCompleted: (id) => set((state) => ({
    trackingReminders: state.trackingReminders.map((reminder) =>
      reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
    ),
  })),
}));
