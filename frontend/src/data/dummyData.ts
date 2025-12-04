import type { Appointment, Medication, Symptom, HealthMetric, NewsItem, Award, User, TrackingReminder, MedicalInfo } from '../types';

// User data matching Figma design
export const dummyUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@example.com',
  avatarUrl: undefined,
};

// Medical Info matching Figma design
export const dummyMedicalInfo: MedicalInfo = {
  name: 'John Smith',
  gender: 'Male',
  birthday: '03.08.1980',
  height: '180cm',
  weight: '88kg',
  bloodGroup: 'A+',
  vaccinations: [
    { name: 'Covid-19', date: '21.09.2021' },
    { name: 'Tetanus', date: '03.08.2001' },
    { name: 'Typhus', date: '03.08.2001' },
    { name: 'Hepatitis', date: '03.08.2001' },
  ],
  priorSurgeries: [
    { name: 'Appendix', date: '21.09.2012' },
  ],
  allergies: ['Peanuts'],
  emergencyContacts: [
    {
      name: 'Pamela Smith',
      phone: '+49 600 500',
      address: 'Sunset Boulevard 4, 10119 Berlin',
      email: 'Pamela@smith.com',
    },
  ],
};

// Appointments matching Figma design (Dr. Schmitz)
export const dummyAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Neurologist Appointment',
    doctor: 'Dr. Schmitz',
    specialty: 'Neurologist',
    email: 'schmitz@aol.de',
    phone: '+49 989 232',
    date: '20.04.2023',
    time: '16:30',
    location: 'Winklergasse 45, 10117 Berlin',
    type: 'specialist',
  },
];

// Medications matching Figma design (Aspirin)
export const dummyMedications: Medication[] = [
  {
    id: '1',
    name: 'Aspirin',
    dosage: 'ASS, 500mg',
    manufacturer: 'BAYER, coated pills',
    frequency: '2x Daily',
    time: '6:00, 22:00',
    taken: false,
    notes: 'Take with food',
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

// News items matching Figma design (WHO Guidelines, Cancer Research UK)
export const dummyNewsItems: NewsItem[] = [
  {
    id: '1',
    title: 'WHO Guidelines',
    summary: 'For the first time WHO has released new Guidelines for their...',
    date: '2025-12-04',
    category: 'Health',
  },
  {
    id: '2',
    title: 'Cancer Research UK',
    summary: 'Cancer Research UK has 2 new drug entering their stage 2 tria...',
    date: '2025-12-03',
    category: 'Research',
  },
];

// Awards matching Figma design (1 month streak)
export const dummyAwards: Award[] = [
  {
    id: '1',
    name: '1 month streak',
    description: 'Congratulations! You were diligent and filled out your symptoms every day for a whole month! Be proud of yourself :)',
    type: 'gold',
    earned: true,
    earnedDate: '2025-12-01',
  },
  {
    id: '2',
    name: '2 week streak',
    description: 'You tracked your health for 2 weeks straight!',
    type: 'silver',
    earned: true,
    earnedDate: '2025-11-28',
  },
  {
    id: '3',
    name: '1 week streak',
    description: 'You tracked your health for 1 week straight!',
    type: 'bronze',
    earned: true,
    earnedDate: '2025-11-25',
  },
];

// Tracking reminders matching Figma Timeline design
export const dummyTrackingReminders: TrackingReminder[] = [
  {
    id: '1',
    title: 'Dr. Schmitz',
    description: 'Appointment',
    time: '16:30',
    completed: false,
    type: 'appointment',
    date: '20.04.2023',
  },
  {
    id: '2',
    title: 'Track your Symptoms',
    description: 'Reminder',
    time: '',
    completed: false,
    type: 'symptom',
  },
  {
    id: '3',
    title: 'Take your Medication',
    description: 'Reminder',
    time: '',
    completed: false,
    type: 'medication',
  },
];

// Week progress data matching Figma design
export const dummyWeekProgress = {
  symptomsTracked: 6,
  symptomsTotal: 7,
  medicationsTaken: 4,
  medicationsTotal: 7,
};
