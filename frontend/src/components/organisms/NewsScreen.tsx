import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '../atoms';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
}

interface NewsScreenProps {
  newsItems: NewsItem[];
  onBackClick: () => void;
  onNewsClick?: (id: string) => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({
  newsItems,
  onBackClick,
  onNewsClick = () => {},
}) => {
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <h1 className="text-3xl font-extrabold text-primary-dark">News</h1>
        </div>
      </header>

      {/* News list */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <div className="space-y-4">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => onNewsClick(item.id)}
              className="rounded-[24px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
              <button
                type="button"
                className="mt-3 text-sm font-semibold text-primary hover:underline"
              >
                Read more
              </button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsScreen;
