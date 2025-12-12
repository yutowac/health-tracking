import React from 'react';
import { ArrowLeft, Search, Clock } from 'lucide-react';

interface SearchScreenProps {
  onBackClick: () => void;
  onSearch?: (query: string) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  onBackClick,
  onSearch = () => {},
}) => {
  const recentSearches = [
    'Aspirin',
    'Dr. Schmitz',
    'Headache',
    'Blood pressure',
  ];

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button and search bar */}
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <div className="flex-1 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-card">
            <Search size={20} className="text-text-muted" />
            <input
              type="text"
              placeholder="Search your records"
              className="flex-1 bg-transparent text-primary-dark focus:outline-none text-sm"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Recent searches */}
      <main className="max-w-md mx-auto px-6 pb-[100px]">
        <h2 className="text-base font-semibold text-primary-dark mb-4">Recent Searches</h2>
        <div className="space-y-3">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              type="button"
              className="w-full flex items-center gap-3 px-4 py-3.5 bg-white rounded-2xl hover:bg-primary-light transition-colors shadow-card"
              onClick={() => onSearch(search)}
            >
              <Clock size={18} className="text-text-muted" />
              <span className="text-primary-dark text-sm">{search}</span>
            </button>
          ))}
        </div>

        {/* Search categories */}
        <h2 className="text-base font-semibold text-primary-dark mt-8 mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {['Medications', 'Symptoms', 'Appointments', 'News'].map((category) => (
            <button
              key={category}
              type="button"
              className="px-4 py-4 bg-white rounded-2xl text-primary-dark font-medium hover:bg-primary-light transition-colors shadow-card text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchScreen;
