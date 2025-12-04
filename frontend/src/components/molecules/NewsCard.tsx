import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Card } from '../atoms';
import type { NewsItem } from '../../types';

interface NewsCardProps {
  news: NewsItem;
  onClick?: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  news,
  onClick = () => {},
}) => {
  return (
    <Card onClick={onClick} className="hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        {news.imageUrl && (
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
            <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {news.category}
          </span>
          <h3 className="font-semibold text-neutral-dark mt-2 mb-1 line-clamp-2">{news.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-2">{news.summary}</p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={12} />
            <span>{news.date}</span>
          </div>
        </div>
        <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
      </div>
    </Card>
  );
};
