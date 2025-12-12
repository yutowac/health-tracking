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
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1.5">
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <h1 className="text-2xl font-bold text-primary-dark">News</h1>
        </div>
      </header>

      {/* News list */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <div className="space-y-5">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => onNewsClick(item.id)}
              className="rounded-[24px] hover:shadow-lg transition-shadow cursor-pointer"
              padding="xl"
            >
              <h3 className="text-lg font-bold text-primary-dark mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-dark leading-relaxed">{item.summary}</p>
              <button
                type="button"
                className="mt-5 text-sm font-semibold text-primary hover:underline"
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
