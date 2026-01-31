
import React from 'react';

interface Props {
  onWatchLive: () => void;
  onReadMore: () => void;
}

const Hero: React.FC<Props> = ({ onWatchLive, onReadMore }) => {
  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-[#0B1221]">
      <img 
        src="https://images.unsplash.com/photo-1556476272-b52367be5946?auto=format&fit=crop&q=80&w=1920" 
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen scale-105 group-hover:scale-110 transition-transform duration-[10s]"
        alt="Main Event"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent"></div>
      
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B1221] to-transparent"></div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl space-y-8 animate-in slide-in-from-right duration-700">
          <div className="flex items-center gap-4">
             <span className="bg-[#FF4D00] text-white px-5 py-2 rounded-xl text-sm font-black uppercase tracking-wider shadow-xl shadow-[#FF4D00]/40 flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                مباشر الآن
             </span>
             <span className="text-white/80 font-black text-sm flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
                أكثر من 250,000 يتابعون الآن
             </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            ليلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-orange-400">المجد</span><br />في السانتياغو
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 max-w-3xl leading-relaxed font-bold">
            تغطية حصرية وبث حي ومباشر لكلاسيكو الأرض. تابع التحليلات والنتائج وتشكيلات الفرق أولاً بأول من قلب الحدث.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-6">
            <button 
              onClick={onWatchLive}
              className="bg-[#FF4D00] text-white px-14 py-6 rounded-[2rem] font-black text-2xl hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-[#FF4D00]/40 flex items-center gap-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              مشاهدة البث المباشر
            </button>
            <button 
              onClick={onReadMore}
              className="bg-white/10 backdrop-blur-2xl text-white border-2 border-white/20 px-14 py-6 rounded-[2rem] font-black text-2xl hover:bg-white/20 transition-all active:scale-95"
            >
              تفاصيل القمة
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Trending Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-xl border-t border-white/10 py-5">
         <div className="container mx-auto px-4 flex items-center gap-8 overflow-x-auto no-scrollbar">
            <span className="text-[#39FF14] font-black text-sm uppercase whitespace-nowrap bg-[#39FF14]/10 px-3 py-1 rounded-lg">عاجل الآن:</span>
            <div className="flex items-center gap-10 text-white text-lg font-black whitespace-nowrap">
               <span className="hover:text-[#FF4D00] cursor-pointer transition-colors">• صلاح يقود ليفربول للفوز على السيتي</span>
               <span className="hover:text-[#FF4D00] cursor-pointer transition-colors">• ميسي يعلن عن موعد اعتزاله الدولي</span>
               <span className="hover:text-[#FF4D00] cursor-pointer transition-colors">• الهلال يقترب من حسم لقب دوري روشن</span>
               <span className="hover:text-[#FF4D00] cursor-pointer transition-colors">• مبابي يوقع رسمياً لريال مدريد</span>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
