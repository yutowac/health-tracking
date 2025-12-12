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
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1.5">
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <div className="flex-1 bg-white rounded-[20px] px-5 py-4 flex items-center gap-4 shadow-card">
            <Search size={22} className="text-text-muted" />
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
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <h2 className="text-lg font-semibold text-primary-dark mb-5">Recent Searches</h2>
        <div className="space-y-4">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              type="button"
              className="w-full flex items-center gap-4 px-5 py-4 bg-white rounded-[20px] hover:bg-primary-light transition-colors shadow-card"
              onClick={() => onSearch(search)}
            >
              <Clock size={20} className="text-text-muted" />
              <span className="text-primary-dark text-sm">{search}</span>
            </button>
          ))}
        </div>

        {/* Search categories */}
        <h2 className="text-lg font-semibold text-primary-dark mt-10 mb-5">Categories</h2>
        <div className="grid grid-cols-2 gap-5">
          {['Medications', 'Symptoms', 'Appointments', 'News'].map((category) => (
            <button
              key={category}
              type="button"
              className="px-5 py-5 bg-white rounded-[20px] text-primary-dark font-medium hover:bg-primary-light transition-colors shadow-card text-sm"
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
