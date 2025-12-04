import React, { useEffect } from 'react';
import { useHealthStore } from './store/healthStore';
import {
  dummyUser,
  dummyAppointments,
  dummyMedications,
  dummySymptoms,
  dummyHealthMetrics,
  dummyAwards,
  dummyTrackingReminders,
} from './data/dummyData';
import { SearchBar } from './components/molecules';
import {
  Header,
  BottomNavigation,
  PlusMenu,
  AppointmentSection,
  MedicationSection,
  SymptomSection,
  HealthOverview,
  TimelineSection,
  AwardSection,
  CalendarView,
} from './components/organisms';

const App: React.FC = () => {
  const {
    user,
    appointments,
    medications,
    symptoms,
    healthMetrics,
    awards,
    trackingReminders,
    selectedDate,
    isPlusMenuOpen,
    activeTab,
    setUser,
    setAppointments,
    setMedications,
    setSymptoms,
    setHealthMetrics,
    setAwards,
    setTrackingReminders,
    setSelectedDate,
    togglePlusMenu,
    setActiveTab,
    toggleMedicationTaken,
    toggleReminderCompleted,
  } = useHealthStore();

  useEffect(() => {
    setUser(dummyUser);
    setAppointments(dummyAppointments);
    setMedications(dummyMedications);
    setSymptoms(dummySymptoms);
    setHealthMetrics(dummyHealthMetrics);
    setAwards(dummyAwards);
    setTrackingReminders(dummyTrackingReminders);
  }, [setUser, setAppointments, setMedications, setSymptoms, setHealthMetrics, setAwards, setTrackingReminders]);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard';
      case 'timeline':
        return 'Timeline';
      case 'calendar':
        return 'Calendar';
      case 'medical':
        return 'Medical Info';
      case 'rewards':
        return 'Rewards';
      default:
        return 'Health Tracking';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <div className="px-4 py-3">
              <SearchBar placeholder="Search health records..." />
            </div>
            <HealthOverview metrics={healthMetrics} />
            <AppointmentSection
              appointments={appointments}
              onAppointmentClick={() => {}}
              onViewAll={() => {}}
            />
            <MedicationSection
              medications={medications}
              onMedicationClick={() => {}}
              onMedicationToggle={(med) => toggleMedicationTaken(med.id)}
              onViewAll={() => {}}
            />
          </>
        );
      case 'timeline':
        return (
          <TimelineSection
            reminders={trackingReminders}
            onReminderToggle={(reminder) => toggleReminderCompleted(reminder.id)}
            onReminderClick={() => {}}
          />
        );
      case 'calendar':
        return (
          <div className="py-4">
            <CalendarView
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              onMonthChange={(direction) => {
                const newDate = new Date(selectedDate);
                if (direction === 'prev') {
                  newDate.setMonth(newDate.getMonth() - 1);
                } else {
                  newDate.setMonth(newDate.getMonth() + 1);
                }
                setSelectedDate(newDate);
              }}
            />
            <div className="mt-4">
              <AppointmentSection
                appointments={appointments}
                title="Appointments this month"
                onAppointmentClick={() => {}}
                onViewAll={() => {}}
              />
            </div>
          </div>
        );
      case 'medical':
        return (
          <>
            <MedicationSection
              medications={medications}
              title="All Medications"
              onMedicationClick={() => {}}
              onMedicationToggle={(med) => toggleMedicationTaken(med.id)}
              onViewAll={() => {}}
              maxItems={10}
            />
            <SymptomSection
              symptoms={symptoms}
              title="Symptom History"
              onSymptomClick={() => {}}
              onViewAll={() => {}}
              maxItems={10}
            />
          </>
        );
      case 'rewards':
        return (
          <AwardSection
            awards={awards}
            onAwardClick={() => {}}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-background pb-24">
      <Header
        title={getPageTitle()}
        userName={user?.name}
        avatarUrl={user?.avatarUrl}
        notificationCount={3}
        onMenuClick={() => {}}
        onNotificationClick={() => {}}
        onAvatarClick={() => {}}
      />
      
      <main className="max-w-md mx-auto">
        {renderContent()}
      </main>
      
      <PlusMenu
        isOpen={isPlusMenuOpen}
        onToggle={togglePlusMenu}
        onAddMedication={() => {}}
        onAddSymptom={() => {}}
        onAddAppointment={() => {}}
        onUpload={() => {}}
      />
      
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default App;
