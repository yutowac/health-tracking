import type { Appointment, Medication, Symptom, HealthMetric, NewsItem, Award, User, TrackingReminder } from '../types';

export const dummyUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: undefined,
};

export const dummyAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Annual Checkup',
    doctor: 'Dr. Sarah Johnson',
    date: '2025-12-10',
    time: '10:00 AM',
    location: 'City Medical Center',
    type: 'checkup',
  },
  {
    id: '2',
    title: 'Cardiology Follow-up',
    doctor: 'Dr. Michael Chen',
    date: '2025-12-15',
    time: '2:30 PM',
    location: 'Heart Health Clinic',
    type: 'specialist',
  },
  {
    id: '3',
    title: 'Physical Therapy',
    doctor: 'Dr. Emily Roberts',
    date: '2025-12-18',
    time: '11:00 AM',
    location: 'Wellness Center',
    type: 'therapy',
  },
];

export const dummyMedications: Medication[] = [
  {
    id: '1',
    name: 'Vitamin D',
    dosage: '1000 IU',
    frequency: 'Daily',
    time: '8:00 AM',
    taken: true,
    notes: 'Take with breakfast',
  },
  {
    id: '2',
    name: 'Omega-3',
    dosage: '1000mg',
    frequency: 'Daily',
    time: '8:00 AM',
    taken: false,
    notes: 'Take with food',
  },
  {
    id: '3',
    name: 'Multivitamin',
    dosage: '1 tablet',
    frequency: 'Daily',
    time: '9:00 AM',
    taken: false,
  },
  {
    id: '4',
    name: 'Magnesium',
    dosage: '400mg',
    frequency: 'Daily',
    time: '9:00 PM',
    taken: false,
    notes: 'Take before bed',
  },
];

export const dummySymptoms: Symptom[] = [
  {
    id: '1',
    name: 'Headache',
    severity: 3,
    date: '2025-12-04',
    notes: 'Mild tension headache in the afternoon',
  },
  {
    id: '2',
    name: 'Fatigue',
    severity: 5,
    date: '2025-12-03',
    notes: 'Felt tired after lunch',
  },
  {
    id: '3',
    name: 'Back Pain',
    severity: 4,
    date: '2025-12-02',
    notes: 'Lower back discomfort',
  },
];

export const dummyHealthMetrics: HealthMetric[] = [
  {
    id: '1',
    type: 'weight',
    value: 75,
    unit: 'kg',
    date: '2025-12-04',
  },
  {
    id: '2',
    type: 'blood_pressure',
    value: 120,
    unit: 'mmHg',
    date: '2025-12-04',
  },
  {
    id: '3',
    type: 'heart_rate',
    value: 72,
    unit: 'bpm',
    date: '2025-12-04',
  },
  {
    id: '4',
    type: 'steps',
    value: 8500,
    unit: 'steps',
    date: '2025-12-04',
  },
  {
    id: '5',
    type: 'sleep',
    value: 7.5,
    unit: 'hours',
    date: '2025-12-04',
  },
];

export const dummyNewsItems: NewsItem[] = [
  {
    id: '1',
    title: '5 Tips for Better Sleep',
    summary: 'Discover simple habits that can improve your sleep quality and overall health.',
    date: '2025-12-04',
    category: 'Wellness',
  },
  {
    id: '2',
    title: 'Understanding Heart Health',
    summary: 'Learn about the key factors that contribute to a healthy heart.',
    date: '2025-12-03',
    category: 'Health',
  },
  {
    id: '3',
    title: 'Nutrition Basics',
    summary: 'A guide to balanced nutrition for optimal health.',
    date: '2025-12-02',
    category: 'Nutrition',
  },
];

export const dummyAwards: Award[] = [
  {
    id: '1',
    name: '7-Day Streak',
    description: 'Logged health data for 7 consecutive days',
    type: 'gold',
    earned: true,
    earnedDate: '2025-12-01',
  },
  {
    id: '2',
    name: 'Medication Master',
    description: 'Took all medications on time for a week',
    type: 'silver',
    earned: true,
    earnedDate: '2025-11-28',
  },
  {
    id: '3',
    name: 'Step Champion',
    description: 'Reached 10,000 steps in a day',
    type: 'bronze',
    earned: true,
    earnedDate: '2025-11-25',
  },
  {
    id: '4',
    name: 'Health Hero',
    description: 'Complete all health goals for a month',
    type: 'special',
    earned: false,
  },
];

export const dummyTrackingReminders: TrackingReminder[] = [
  {
    id: '1',
    title: 'Morning Medication',
    description: 'Take your morning vitamins',
    time: '8:00 AM',
    completed: true,
    type: 'medication',
  },
  {
    id: '2',
    title: 'Log Symptoms',
    description: 'Record any symptoms you experienced today',
    time: '6:00 PM',
    completed: false,
    type: 'symptom',
  },
  {
    id: '3',
    title: 'Evening Medication',
    description: 'Take your evening supplements',
    time: '9:00 PM',
    completed: false,
    type: 'medication',
  },
  {
    id: '4',
    title: 'Upcoming Appointment',
    description: 'Annual checkup with Dr. Johnson',
    time: '10:00 AM',
    completed: false,
    type: 'appointment',
  },
];
