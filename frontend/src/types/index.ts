export interface Appointment {
  id: string;
  title: string;
  doctor: string;
  specialty?: string;
  email?: string;
  phone?: string;
  date: string;
  time: string;
  location: string;
  type: 'checkup' | 'specialist' | 'therapy' | 'other';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  manufacturer?: string;
  frequency: string;
  time: string;
  taken: boolean;
  notes?: string;
  imageUrl?: string;
}

export interface MedicalInfo {
  name: string;
  gender: string;
  birthday: string;
  height: string;
  weight: string;
  bloodGroup: string;
  vaccinations: { name: string; date: string }[];
  priorSurgeries: { name: string; date: string }[];
  allergies: string[];
  emergencyContacts: {
    name: string;
    phone: string;
    address: string;
    email: string;
  }[];
}

export interface Symptom {
  id: string;
  name: string;
  severity: number;
  date: string;
  notes?: string;
}

export interface HealthMetric {
  id: string;
  type: 'weight' | 'blood_pressure' | 'heart_rate' | 'sleep' | 'steps';
  value: number;
  unit: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  date: string;
  category: string;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  type: 'gold' | 'silver' | 'bronze' | 'special';
  earned: boolean;
  earnedDate?: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  email: string;
}

export interface TrackingReminder {
  id: string;
  title: string;
  description: string;
  time: string;
  date?: string;
  completed: boolean;
  type: 'medication' | 'symptom' | 'appointment' | 'general';
}
