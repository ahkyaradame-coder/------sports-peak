
import React from 'react';
import { VideoItem } from '../types';

const MOCK_VIDEOS: VideoItem[] = [
  { id: 1, title: "ملخص مباراة ليفربول ومانشستر سيتي (3-3) - جنون البريميرليج", thumbnail: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800", duration: "12:45", views: "1.2M" },
  { id: 2, title: "أجمل 10 أهداف في الدوري الإسباني لشهر فبراير", thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800", duration: "08:20", views: "850K" },
  { id: 3, title: "مقابلة حصرية مع نجم الهلال بعد الفوز في ديربي الرياض", thumbnail: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800", duration: "15:10", views: "500K" },
];

interface Props {
  onVideoSelect: (title: string) => void;
  onBack: () => void;
}

const VideosSection: React.FC<Props> = ({ onVideoSelect, onBack }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="mb-8 group flex items-center gap-2 text-[#0B1221] font-bold hover:text-[#FF4D00] transition-all bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        العودة للرئيسية
      </button>

      <h2 className="text-3xl font-bold mb-8 border-r-4 border-[#FF4D00] pr-4">أحدث الفيديوهات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_VIDEOS.map((video) => (
          <div key={video.id} className="group cursor-pointer" onClick={() => onVideoSelect(video.title)}>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-4">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <div className="w-16 h-16 bg-[#FF4D00] rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-4 left-4 bg-[#0B1221]/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-black">{video.duration}</span>
            </div>
            <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-[#FF4D00] transition-colors leading-snug">{video.title}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              {video.views} مشاهدة
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideosSection;
