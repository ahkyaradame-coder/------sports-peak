
import React from 'react';
import { PlayerStats } from '../types';

const TOP_SCORERS: PlayerStats[] = [
  { id: 1, name: "روبرت ليفاندوفسكي", team: "برشلونة", goals: 18, assists: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Robert_Lewandowski_2021.jpg/300px-Robert_Lewandowski_2021.jpg" },
  { id: 2, name: "جود بيلينجهام", team: "ريال مدريد", goals: 16, assists: 8, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Jude_Bellingham_2023.jpg/300px-Jude_Bellingham_2023.jpg" },
  { id: 3, name: "ألفارو موراتا", team: "أتلتيكو مدريد", goals: 15, assists: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Alvaro_Morata_2018.jpg/300px-Alvaro_Morata_2018.jpg" },
];

interface Props {
  isPreview?: boolean;
  onPlayerAction: (name: string) => void;
  onBack?: () => void;
}

const StatsSection: React.FC<Props> = ({ isPreview, onPlayerAction, onBack }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {!isPreview && onBack && (
        <button 
          onClick={onBack}
          className="mb-8 group flex items-center gap-2 text-[#0B1221] font-bold hover:text-[#FF4D00] transition-all bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          العودة للرئيسية
        </button>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold border-r-4 border-[#FF4D00] pr-4">إحصائيات اللاعبين</h2>
        {!isPreview && (
           <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 font-bold outline-none">
             <option>هدافي الدوري الإسباني</option>
             <option>صناع الأهداف</option>
           </select>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scorers Table */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
             <span className="font-black text-[#0B1221] text-lg">ترتيب الهدافين</span>
             <span className="text-xs text-gray-400 font-bold bg-white px-3 py-1 rounded-full shadow-sm">موسم 2024/2025</span>
          </div>
          <table className="w-full text-right">
            <thead>
              <tr className="text-gray-400 text-xs uppercase">
                <th className="p-6">#</th>
                <th className="p-6 text-right">اللاعب</th>
                <th className="p-6 text-center">الفريق</th>
                <th className="p-6 text-center">الأهداف</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {TOP_SCORERS.map((player, idx) => (
                <tr key={player.id} className="hover:bg-gray-50 transition-colors cursor-pointer group" onClick={() => onPlayerAction(player.name)}>
                  <td className="p-6 font-bold text-gray-300">{idx + 1}</td>
                  <td className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group-hover:scale-110 transition-transform">
                       <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[#0B1221] group-hover:text-[#FF4D00] transition-colors">{player.name}</span>
                  </td>
                  <td className="p-6 text-center text-sm text-gray-500 font-bold">{player.team}</td>
                  <td className="p-6 text-center font-black text-2xl text-[#FF4D00]">{player.goals}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 text-center border-t border-gray-50 bg-gray-50/20">
             <button className="text-sm font-black text-[#0B1221] hover:text-[#FF4D00] transition-colors uppercase tracking-widest">عرض القائمة الكاملة</button>
          </div>
        </div>

        {/* Feature Player Card */}
        <div className="relative rounded-[3rem] overflow-hidden group min-h-[550px] shadow-2xl border-4 border-white">
           <img 
             src="https://www.realmadrid.com/img/vertical_380px/vinicius_550x650_20230621060410.jpg" 
             className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-[2000ms]" 
             alt="Vinicius Junior" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/20 to-transparent"></div>
           
           {/* Glassmorphism Decorative Elements */}
           <div className="absolute top-8 left-8 flex flex-col gap-2">
              <span className="bg-[#39FF14] text-[#0B1221] px-5 py-2 rounded-2xl text-xs font-black shadow-xl animate-pulse inline-block self-start">لاعب الشهر</span>
              <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-[10px] font-black border border-white/20">REAL MADRID CF</span>
           </div>

           <div className="relative h-full flex flex-col justify-end p-10 text-white">
              <div className="mb-2 flex items-baseline gap-2">
                 <span className="text-6xl font-black text-[#FF4D00] drop-shadow-2xl">07</span>
                 <h3 className="text-5xl md:text-6xl font-black tracking-tighter drop-shadow-lg">فينيسيوس</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-300 mb-4 drop-shadow-md">الساحر البرازيلي</h4>
              <p className="text-gray-200 mb-8 font-bold max-w-sm leading-relaxed text-lg">
                عشق الشعار، مهارة فطرية، وسرعة لا تصد. فينيسيوس جونيور يثبت يوماً بعد يوم أنه الوريث الشرعي لأمجاد البرنابيو.
              </p>
              
              <div className="flex gap-4">
                 <div className="flex-1 bg-white/10 backdrop-blur-xl p-5 rounded-[2rem] text-center border border-white/20 shadow-xl group-hover:border-[#FF4D00]/50 transition-all group-hover:-translate-y-2">
                    <span className="block text-4xl font-black text-[#FF4D00]">12</span>
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">مساهمة تهديفية</span>
                 </div>
                 <div className="flex-1 bg-white/10 backdrop-blur-xl p-5 rounded-[2rem] text-center border border-white/20 shadow-xl group-hover:border-[#39FF14]/50 transition-all group-hover:-translate-y-2 delay-75">
                    <span className="block text-4xl font-black text-[#39FF14]">88%</span>
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">نجاح المراوغة</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
