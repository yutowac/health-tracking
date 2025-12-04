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
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <div className="flex-1 bg-white rounded-[20px] px-4 py-3 flex items-center gap-2 shadow-sm">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search your records"
              className="flex-1 bg-transparent text-primary-dark focus:outline-none"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Recent searches */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <h2 className="text-lg font-semibold text-primary-dark mb-4">Recent Searches</h2>
        <div className="space-y-2">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              type="button"
              className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => onSearch(search)}
            >
              <Clock size={18} className="text-gray-400" />
              <span className="text-primary-dark">{search}</span>
            </button>
          ))}
        </div>

        {/* Search categories */}
        <h2 className="text-lg font-semibold text-primary-dark mt-8 mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {['Medications', 'Symptoms', 'Appointments', 'News'].map((category) => (
            <button
              key={category}
              type="button"
              className="px-4 py-3 bg-white rounded-xl text-primary-dark font-medium hover:bg-gray-50 transition-colors"
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
