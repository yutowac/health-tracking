import React from 'react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';

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
    <ScreenContainer>
      <ScreenHeader title="News" onBackClick={onBackClick} />

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
    </ScreenContainer>
  );
};

export default NewsScreen;
