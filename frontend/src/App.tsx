import React, { useEffect, useState } from 'react';
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
import {
  Header,
  BottomNavigation,
  PlusMenu,
} from './components/organisms';
import {
  SCREEN_REGISTRY,
  MAIN_TABS,
  SCREEN_TITLES,
  BACK_NAVIGATION,
} from './navigation';
import type { ScreenType, ScreenContext, ScreenData } from './navigation';
import type { Symptom, Medication, Appointment } from './types';

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

  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | undefined>(undefined);
  const [selectedMedication, setSelectedMedication] = useState<Medication | undefined>(undefined);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setUser(dummyUser);
    setAppointments(dummyAppointments);
    setMedications(dummyMedications);
    setSymptoms(dummySymptoms);
    setHealthMetrics(dummyHealthMetrics);
    setAwards(dummyAwards);
    setTrackingReminders(dummyTrackingReminders);
  }, [setUser, setAppointments, setMedications, setSymptoms, setHealthMetrics, setAwards, setTrackingReminders]);

  useEffect(() => {
    setCurrentScreen(activeTab as ScreenType);
  }, [activeTab]);

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (MAIN_TABS.includes(currentScreen)) {
      return;
    }
    const backScreen = BACK_NAVIGATION[currentScreen];
    setCurrentScreen(backScreen);
  };

  const isMainTab = () => MAIN_TABS.includes(currentScreen);

  const getPageTitle = () => SCREEN_TITLES[currentScreen] || 'Health Tracking';

  const screenContext: ScreenContext = {
    navigateTo,
    goBack,
    selectedSymptom,
    setSelectedSymptom,
    selectedMedication,
    setSelectedMedication,
    selectedAppointment,
    setSelectedAppointment,
    searchQuery,
    setSearchQuery,
  };

  const screenData: ScreenData = {
    user,
    appointments,
    medications,
    awards,
    trackingReminders,
    selectedDate,
    setSelectedDate,
    setActiveTab,
    toggleMedicationTaken,
    toggleReminderCompleted,
  };

  const renderContent = () => {
    const renderer = SCREEN_REGISTRY[currentScreen];
    return renderer ? renderer(screenContext, screenData) : null;
  };

  const showMainLayout = isMainTab();

  return (
    <div className={`min-h-screen bg-neutral-background ${showMainLayout ? 'pb-24' : ''}`}>
      {showMainLayout && (
        <Header
          title={getPageTitle()}
          userName={user?.name}
          avatarUrl={user?.avatarUrl}
          notificationCount={3}
          onMenuClick={() => navigateTo('settings')}
          onNotificationClick={() => {}}
          onAvatarClick={() => navigateTo('settings')}
        />
      )}
      
      <main className={showMainLayout ? 'max-w-md mx-auto' : ''}>
        {renderContent()}
      </main>
      
      {showMainLayout && (
        <>
          <PlusMenu
            isOpen={isPlusMenuOpen}
            onToggle={togglePlusMenu}
            onAddMedication={() => {
              setSelectedMedication(undefined);
              navigateTo('medication-edit');
              togglePlusMenu();
            }}
            onAddSymptom={() => {
              setSelectedSymptom(undefined);
              navigateTo('symptom-edit');
              togglePlusMenu();
            }}
            onAddAppointment={() => {
              setSelectedAppointment(undefined);
              navigateTo('appointment-edit');
              togglePlusMenu();
            }}
            onUpload={() => {
              navigateTo('upload');
              togglePlusMenu();
            }}
          />
          
          <BottomNavigation
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setCurrentScreen(tab as ScreenType);
            }}
          />
        </>
      )}
    </div>
  );
};

export default App;
