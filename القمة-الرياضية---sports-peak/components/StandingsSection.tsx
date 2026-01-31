
import React from 'react';
import { StandingTeam } from '../types';

const MOCK_STANDINGS: StandingTeam[] = [
  { rank: 1, name: "ريال مدريد", played: 25, won: 19, draw: 4, lost: 2, points: 61 },
  { rank: 2, name: "جيرونا", played: 25, won: 17, draw: 5, lost: 3, points: 56 },
  { rank: 3, name: "برشلونة", played: 25, won: 16, draw: 6, lost: 3, points: 54 },
  { rank: 4, name: "أتلتيكو مدريد", played: 25, won: 15, draw: 3, lost: 7, points: 48 },
  { rank: 5, name: "أتلتيك بلباو", played: 25, won: 14, draw: 7, lost: 4, points: 49 },
];

const TEAM_LOGOS_TABLE: Record<string, string> = {
  "ريال مدريد": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/60px-Real_Madrid_CF.svg.png",
  "برشلونة": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_logo.svg/60px-FC_Barcelona_logo.svg.png",
  "جيرونا": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Girona_FC_logo.svg/60px-Girona_FC_logo.svg.png",
  "أتلتيكو مدريد": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/60px-Atletico_Madrid_2017_logo.svg.png",
  "أتلتيك بلباو": "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/60px-Club_Athletic_Bilbao_logo.svg.png",
  "الهلال": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Al-Hilal_Saudi_FC_logo.svg/60px-Al-Hilal_Saudi_FC_logo.svg.png",
  "النصر": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Al_Nassr_FC_logo.svg/60px-Al_Nassr_FC_logo.svg.png",
};

interface Props {
  onBack: () => void;
}

const TableLogo = ({ name }: { name: string }) => {
  const [error, setError] = React.useState(false);
  const src = TEAM_LOGOS_TABLE[name];
  
  if (error || !src) return <div className="w-6 h-6 bg-gray-100 rounded-full animate-pulse"></div>;

  return (
    <img 
      src={src} 
      alt={name} 
      className="w-8 h-8 object-contain"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const StandingsSection: React.FC<Props> = ({ onBack }) => {
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

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-black border-r-4 border-[#FF4D00] pr-4">ترتيب الدوري الإسباني</h2>
        <div className="flex gap-2">
           <span className="bg-[#39FF14] text-[#0B1221] px-4 py-1 rounded-full text-xs font-black">موسم 2024/25</span>
        </div>
      </div>
      
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[700px]">
          <thead className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-[0.2em]">
            <tr>
              <th className="p-8">#</th>
              <th className="p-8">النادي</th>
              <th className="p-8 text-center">لعب</th>
              <th className="p-8 text-center">فوز</th>
              <th className="p-8 text-center">تعادل</th>
              <th className="p-8 text-center">خسارة</th>
              <th className="p-8 text-center font-black text-[#FF4D00]">نقاط</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 font-bold">
            {MOCK_STANDINGS.map((team) => (
              <tr key={team.rank} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                <td className="p-8 text-gray-300">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${team.rank <= 3 ? 'bg-[#FF4D00]/10 text-[#FF4D00]' : 'text-gray-300'}`}>
                    {team.rank}
                  </span>
                </td>
                <td className="p-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 border border-gray-100 shadow-sm group-hover:rotate-6 transition-transform">
                    <TableLogo name={team.name} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0B1221] text-lg group-hover:text-[#FF4D00] transition-colors">{team.name}</span>
                    <span className="text-[10px] text-gray-400 uppercase">La Liga EA Sports</span>
                  </div>
                </td>
                <td className="p-8 text-center text-gray-500 font-black">{team.played}</td>
                <td className="p-8 text-center text-green-600">{team.won}</td>
                <td className="p-8 text-center text-blue-400">{team.draw}</td>
                <td className="p-8 text-center text-red-300">{team.lost}</td>
                <td className="p-8 text-center text-3xl font-black text-[#0B1221]">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StandingsSection;
