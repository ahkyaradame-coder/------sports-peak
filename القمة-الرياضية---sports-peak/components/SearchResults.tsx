
import React from 'react';
import { NewsItem, Match } from '../types';
import NewsGrid from './NewsGrid';
import MatchesSection from './MatchesSection';

interface Props {
  query: string;
  newsResults: NewsItem[];
  matchResults: Match[];
  aiInsight: string;
  isLoadingAi: boolean;
  onReadMore: (item: NewsItem) => void;
  onReminder: (title: string) => void;
  onNotify: (match: string) => void;
  onBackToHome: () => void;
}

const SearchResults: React.FC<Props> = ({ 
  query, 
  newsResults, 
  matchResults, 
  aiInsight, 
  isLoadingAi, 
  onReadMore, 
  onReminder, 
  onNotify,
  onBackToHome
}) => {
  const hasLocalResults = newsResults.length > 0 || matchResults.length > 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* زر الرجوع للرئيسية */}
      <div className="mb-8">
        <button 
          onClick={onBackToHome}
          className="group flex items-center gap-2 text-[#0B1221] font-bold hover:text-[#FF4D00] transition-all bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          العودة للرئيسية
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-black text-[#FF4D00] uppercase tracking-widest mb-2">نتائج البحث عن</h2>
        <h1 className="text-4xl md:text-5xl font-black text-[#0B1221]">"{query}"</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left/Main Column: Local Results */}
        <div className="lg:col-span-2 space-y-16">
          {newsResults.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#FF4D00] rounded-full"></span>
                أخبار متعلقة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NewsGrid news={newsResults} onReadMore={onReadMore} onReminder={onReminder} />
              </div>
            </section>
          )}

          {matchResults.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#39FF14] rounded-full"></span>
                مباريات متعلقة
              </h3>
              <MatchesSection matches={matchResults} onNotify={onNotify} />
            </section>
          )}

          {!hasLocalResults && !isLoadingAi && (
            <div className="bg-white rounded-[2rem] p-12 text-center border-2 border-dashed border-gray-100">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-400">لم نجد نتائج مباشرة في أرشيفنا..</h3>
               <p className="text-gray-400 mt-2">لكن لا تقلق، ذكاء "القمة" يبحث لك الآن!</p>
            </div>
          )}
        </div>

        {/* Right Column: AI Insight */}
        <div className="space-y-8">
          <div className="sticky top-32">
            <div className="bg-[#0B1221] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4D00]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
               
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#FF4D00] rounded-xl flex items-center justify-center font-black">AI</div>
                  <h3 className="text-xl font-bold">تحليل القمة الذكي</h3>
               </div>

               {isLoadingAi ? (
                 <div className="space-y-4 py-8">
                    <div className="h-4 bg-white/10 rounded-full w-full animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded-full w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded-full w-full animate-pulse"></div>
                    <p className="text-xs text-center text-gray-500 font-bold animate-pulse mt-4">جاري تحليل البيانات العالمية حول "{query}"...</p>
                 </div>
               ) : (
                 <div className="prose prose-invert prose-sm">
                    <p className="text-gray-300 leading-relaxed font-medium">
                      {aiInsight || "أهلاً بك! ابحث عن أي شيء وسأقوم بتحليله لك فوراً."}
                    </p>
                    {aiInsight && (
                      <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-400">
                        هذه المعلومات مولدة بواسطة الذكاء الاصطناعي الخاص بموقع القمة الرياضية.
                      </div>
                    )}
                 </div>
               )}
            </div>

            {/* Suggestions */}
            <div className="mt-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
               <h4 className="text-sm font-black text-[#0B1221] mb-4">عمليات بحث شائعة</h4>
               <div className="flex flex-wrap gap-2">
                  {['ترتيب الدوري السعودي', 'انتقالات ريال مدريد', 'أهداف صلاح اليوم', 'موعد الكلاسيكو'].map(s => (
                    <button key={s} className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-xs font-bold transition-colors">
                      {s}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
