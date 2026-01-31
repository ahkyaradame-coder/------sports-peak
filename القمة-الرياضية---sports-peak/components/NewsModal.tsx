
import React from 'react';
import { NewsItem } from '../types';

interface Props {
  item: NewsItem | null;
  onClose: () => void;
  onAction: (action: string) => void;
}

const NewsModal: React.FC<Props> = ({ item, onClose, onAction }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0B1221]/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-96 w-full flex-shrink-0">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <button onClick={onClose} className="absolute top-6 left-6 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="absolute bottom-8 right-8 left-8">
            <span className="bg-[#FF4D00] text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block shadow-lg">{item.category}</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">{item.title}</h2>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-8 sm:p-12 custom-scrollbar">
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 border-b border-gray-100 pb-4">
            <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{item.date}</span>
          </div>

          <div className="space-y-6 text-gray-700 leading-loose text-lg sm:text-xl font-medium">
            <p className="first-letter:text-4xl first-letter:font-black first-letter:text-[#FF4D00]">{item.content || item.summary}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-gray-100">
            <button 
              onClick={() => onAction("تم نسخ رابط الخبر للمشاركة")}
              className="flex-grow sm:flex-none bg-[#FF4D00] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-[#FF4D00]/20 active:scale-95"
            >
              مشاركة الخبر
            </button>
            <button 
              onClick={() => onAction("تم حفظ الخبر في مكتبتك")}
              className="flex-grow sm:flex-none bg-gray-100 text-[#0B1221] px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors active:scale-95"
            >
              حفظ لوقت لاحق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
