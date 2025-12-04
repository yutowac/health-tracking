import React, { useEffect, useState } from 'react';
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
} from './components/organisms';
import type { Symptom, Medication, Appointment } from './types';

type ScreenType = 
  | 'dashboard' | 'timeline' | 'calendar' | 'medical' | 'rewards'
  | 'news' | 'symptoms-list' | 'medication-list' | 'appointment-list'
  | 'medical-edit' | 'symptom-edit' | 'medication-edit' | 'appointment-edit'
  | 'search' | 'search-results' | 'settings' | 'upload' | 'your-week';

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
    const mainTabs: ScreenType[] = ['dashboard', 'timeline', 'calendar', 'medical', 'rewards'];
    if (mainTabs.includes(currentScreen)) {
      return;
    }
    if (currentScreen === 'news' || currentScreen === 'your-week' || currentScreen === 'search') {
      setCurrentScreen('dashboard');
    } else if (currentScreen === 'symptoms-list' || currentScreen === 'symptom-edit') {
      setCurrentScreen('dashboard');
    } else if (currentScreen === 'medication-list' || currentScreen === 'medication-edit') {
      setCurrentScreen('dashboard');
    } else if (currentScreen === 'appointment-list' || currentScreen === 'appointment-edit') {
      setCurrentScreen('dashboard');
    } else if (currentScreen === 'medical-edit') {
      setCurrentScreen('medical');
    } else if (currentScreen === 'search-results') {
      setCurrentScreen('search');
    } else if (currentScreen === 'settings' || currentScreen === 'upload') {
      setCurrentScreen('dashboard');
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const isMainTab = () => {
    const mainTabs: ScreenType[] = ['dashboard', 'timeline', 'calendar', 'medical', 'rewards'];
    return mainTabs.includes(currentScreen);
  };

  const getPageTitle = () => {
    switch (currentScreen) {
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
    switch (currentScreen) {
      case 'dashboard':
        return (
          <>
            {/* Search bar with notification bell - matching Figma */}
            <div className="px-4 py-3 flex gap-3">
              <button
                type="button"
                onClick={() => navigateTo('search')}
                className="flex-1 bg-white rounded-[20px] px-4 py-3 flex items-center gap-2 shadow-sm text-left"
              >
                <Search size={20} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Search your records</span>
              </button>
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
              onEditClick={() => navigateTo('your-week')}
              onNewsClick={() => navigateTo('news')}
              onCoinsClick={() => setActiveTab('rewards')}
            />
            
            {/* Appointment section */}
            <AppointmentSection
              appointments={appointments}
              onAppointmentClick={(apt) => {
                setSelectedAppointment(apt);
                navigateTo('appointment-edit');
              }}
              onViewAll={() => navigateTo('appointment-list')}
            />
            
            {/* Medication section */}
            <MedicationSection
              medications={medications}
              onMedicationClick={(med) => {
                setSelectedMedication(med);
                navigateTo('medication-edit');
              }}
              onMedicationToggle={(med) => toggleMedicationTaken(med.id)}
              onViewAll={() => navigateTo('medication-list')}
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
            onEditClick={() => navigateTo('medical-edit')}
          />
        );
      case 'rewards':
        return (
          <AwardSection
            awards={awards}
            onShareClick={() => {}}
          />
        );
      case 'news':
        return (
          <NewsScreen
            newsItems={dummyNewsItems}
            onBackClick={goBack}
            onNewsClick={() => {}}
          />
        );
      case 'symptoms-list':
        return (
          <SymptomsListScreen
            symptoms={dummySymptoms}
            onBackClick={goBack}
            onSymptomClick={(symptom) => {
              setSelectedSymptom(symptom);
              navigateTo('symptom-edit');
            }}
            onAddClick={() => {
              setSelectedSymptom(undefined);
              navigateTo('symptom-edit');
            }}
          />
        );
      case 'medication-list':
        return (
          <MedicationListScreen
            medications={medications}
            onBackClick={goBack}
            onMedicationClick={(med) => {
              setSelectedMedication(med);
              navigateTo('medication-edit');
            }}
            onAddClick={() => {
              setSelectedMedication(undefined);
              navigateTo('medication-edit');
            }}
          />
        );
      case 'appointment-list':
        return (
          <AppointmentListScreen
            appointments={appointments}
            onBackClick={goBack}
            onAppointmentClick={(apt) => {
              setSelectedAppointment(apt);
              navigateTo('appointment-edit');
            }}
            onAddClick={() => {
              setSelectedAppointment(undefined);
              navigateTo('appointment-edit');
            }}
          />
        );
      case 'medical-edit':
        return (
          <MedicalInfoEditScreen
            medicalInfo={dummyMedicalInfo}
            onBackClick={goBack}
            onSaveClick={goBack}
          />
        );
      case 'symptom-edit':
        return (
          <SymptomEditScreen
            symptom={selectedSymptom}
            onBackClick={goBack}
            onSaveClick={goBack}
          />
        );
      case 'medication-edit':
        return (
          <MedicationEditScreen
            medication={selectedMedication}
            onBackClick={goBack}
            onSaveClick={goBack}
          />
        );
      case 'appointment-edit':
        return (
          <AppointmentEditScreen
            appointment={selectedAppointment}
            onBackClick={goBack}
            onSaveClick={goBack}
          />
        );
      case 'search':
        return (
          <SearchScreen
            onBackClick={goBack}
            onSearch={(query) => {
              setSearchQuery(query);
              if (query.length > 0) {
                navigateTo('search-results');
              }
            }}
          />
        );
      case 'search-results':
        return (
          <SearchResultsScreen
            query={searchQuery}
            appointments={appointments.filter(a => 
              a.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (a.specialty && a.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
            )}
            medications={medications.filter(m => 
              m.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            symptoms={dummySymptoms.filter(s => 
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            newsItems={dummyNewsItems.filter(n => 
              n.title.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            onBackClick={goBack}
            onAppointmentClick={(apt) => {
              setSelectedAppointment(apt);
              navigateTo('appointment-edit');
            }}
            onMedicationClick={(med) => {
              setSelectedMedication(med);
              navigateTo('medication-edit');
            }}
            onSymptomClick={(symptom) => {
              setSelectedSymptom(symptom);
              navigateTo('symptom-edit');
            }}
          />
        );
      case 'settings':
        return (
          <SettingsScreen
            userName={user?.name || 'User'}
            userEmail={user?.email}
            onBackClick={goBack}
            onSettingClick={() => {}}
            onLogoutClick={() => {}}
          />
        );
      case 'upload':
        return (
          <UploadScreen
            onBackClick={goBack}
            onUploadClick={() => {}}
          />
        );
      case 'your-week':
        return (
          <YourWeekScreen
            progress={Math.round((dummyWeekProgress.symptomsTracked / dummyWeekProgress.symptomsTotal) * 100)}
            coins={125}
            medications={medications}
            symptoms={dummySymptoms}
            onBackClick={goBack}
            onMedicationClick={(med) => {
              setSelectedMedication(med);
              navigateTo('medication-edit');
            }}
            onSymptomClick={(symptom) => {
              setSelectedSymptom(symptom);
              navigateTo('symptom-edit');
            }}
            onViewAllMedications={() => navigateTo('medication-list')}
            onViewAllSymptoms={() => navigateTo('symptoms-list')}
          />
        );
      default:
        return null;
    }
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
