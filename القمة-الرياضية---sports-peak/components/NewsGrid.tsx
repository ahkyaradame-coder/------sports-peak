
import React from 'react';
import { NewsItem } from '../services/types';

interface Props {
  news: NewsItem[];
  onReadMore: (item: NewsItem) => void;
  onReminder: (title: string) => void;
}

const NewsGrid: React.FC<Props> = ({ news, onReadMore, onReminder }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {news.map((item) => (
        <article key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
          <div className="relative overflow-hidden aspect-video bg-gray-100">
            {item.category === "سوق الانتقالات" || !item.imageUrl ? (
              // تصميم خاص لسوق الانتقالات بدون صور
              <div className="w-full h-full bg-gradient-to-br from-[#0B1221] to-[#1e293b] flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-12 h-12 bg-[#FF4D00] rounded-full flex items-center justify-center mb-2 shadow-lg shadow-[#FF4D00]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                 </div>
                 <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">تحديثات الميركاتو الحصرية</span>
              </div>
            ) : (
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}
            <span className="absolute top-4 right-4 bg-[#FF4D00] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              {item.category}
            </span>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <time className="text-[10px] font-black text-gray-400 mb-2">{item.date}</time>
            <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-[#FF4D00] transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-medium">
              {item.summary}
            </p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
              <button 
                onClick={() => onReadMore(item)}
                className="text-[#0B1221] font-black text-sm flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
              >
                إقرأ المزيد
              </button>
              <button onClick={() => onReminder(`تم ضبط تذكير لـ: ${item.title}`)} className="p-2 text-gray-400 hover:text-[#FF4D00] transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsGrid;
