import React, { useEffect } from 'react';
import { Bell, Search } from 'lucide-react';
import { useHealthStore } from './store/healthStore';
import {
  dummyUser,
  dummyAppointments,
  dummyMedications,
  dummySymptoms,
  dummyHealthMetrics,
  dummyAwards,
  dummyTrackingReminders,
  dummyNewsItems,
  dummyWeekProgress,
  dummyMedicalInfo,
} from './data/dummyData';
import {
  Header,
  BottomNavigation,
  PlusMenu,
  AppointmentSection,
  MedicationSection,
  TimelineSection,
  AwardSection,
  CalendarView,
  DashboardOverview,
  MedicalInfoCard,
} from './components/organisms';

const App: React.FC = () => {
  const {
    user,
    appointments,
    medications,
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
        return 'Your Timeline';
      case 'calendar':
        return 'Calendar';
      case 'medical':
        return 'Medical Info';
      case 'rewards':
        return 'Your Badges';
      default:
        return 'Health Tracking';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* Search bar with notification bell - matching Figma */}
            <div className="px-4 py-3 flex gap-3">
              <div className="flex-1 bg-white rounded-[20px] px-4 py-3 flex items-center gap-2 shadow-sm">
                <Search size={20} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Search your records</span>
              </div>
              <button
                type="button"
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-blue relative"
              >
                <Bell size={20} className="text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-white" />
              </button>
            </div>
            
            {/* Dashboard Overview - Your week, coins, news */}
            <DashboardOverview
              symptomsTracked={dummyWeekProgress.symptomsTracked}
              symptomsTotal={dummyWeekProgress.symptomsTotal}
              medicationsTaken={dummyWeekProgress.medicationsTaken}
              medicationsTotal={dummyWeekProgress.medicationsTotal}
              newsItems={dummyNewsItems}
              onEditClick={() => {}}
              onNewsClick={() => {}}
              onCoinsClick={() => setActiveTab('rewards')}
            />
            
            {/* Appointment section */}
            <AppointmentSection
              appointments={appointments}
              onAppointmentClick={() => {}}
              onViewAll={() => {}}
            />
            
            {/* Medication section */}
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
          </div>
        );
      case 'medical':
        return (
          <MedicalInfoCard
            medicalInfo={dummyMedicalInfo}
            onEmailClick={() => {}}
            onEditClick={() => {}}
          />
        );
      case 'rewards':
        return (
          <AwardSection
            awards={awards}
            onShareClick={() => {}}
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
