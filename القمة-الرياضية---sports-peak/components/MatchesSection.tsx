
import React from 'react';
import { Match } from '../types';

const TEAM_LOGOS: Record<string, string> = {
  "ريال مدريد": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png",
  "برشلونة": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_logo.svg/150px-FC_Barcelona_logo.svg.png",
  "الهلال": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Al-Hilal_Saudi_FC_logo.svg/150px-Al-Hilal_Saudi_FC_logo.svg.png",
  "النصر": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Al_Nassr_FC_logo.svg/150px-Al_Nassr_FC_logo.svg.png",
  "ليفربول": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/150px-Liverpool_FC.svg.png",
  "مانشستر سيتي": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/150px-Manchester_City_FC_badge.svg.png",
  "الأهلي": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Al_Ahly_SC_logo.svg/150px-Al_Ahly_SC_logo.svg.png",
  "الزمالك": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/ZamalekSC.png/150px-ZamalekSC.png"
};

// أيقونة كرة قدم مرسومة بالكود (SVG) تظهر في حال فشل أي صورة
const FallbackBall = () => (
  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200">
    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
    </svg>
  </div>
);

interface Props {
  matches: Match[];
  isPreview?: boolean;
  onNotify: (match: string) => void;
  onBack?: () => void;
}

const TeamIcon = ({ name }: { name: string }) => {
  const [error, setError] = React.useState(false);
  const logoUrl = TEAM_LOGOS[name];

  if (error || !logoUrl) return <FallbackBall />;

  return (
    <div className="w-12 h-12 flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
      <img 
        src={logoUrl} 
        className="max-w-full max-h-full object-contain" 
        alt={name}
        onError={() => setError(true)}
      />
    </div>
  );
};

const MatchesSection: React.FC<Props> = ({ matches, isPreview, onNotify, onBack }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {!isPreview && onBack && (
        <button onClick={onBack} className="mb-8 font-bold text-[#0B1221] hover:text-[#FF4D00] flex items-center gap-2 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-gray-100 transition-all active:scale-95">
          <span>←</span> العودة للرئيسية
        </button>
      )}
      <h2 className="text-3xl font-bold mb-8 border-r-4 border-[#FF4D00] pr-4">جدول المباريات</h2>
      <div className="grid gap-6">
        {matches.map((match) => (
          <div key={match.id} className="group bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between hover:shadow-xl transition-all duration-300">
            <div className="flex-1 flex items-center gap-6 w-full md:w-auto">
               <span className="font-black text-lg text-[#0B1221] order-2 md:order-1">{match.homeTeam}</span>
               <div className="order-1 md:order-2">
                 <TeamIcon name={match.homeTeam} />
               </div>
            </div>
            
            <div className="my-4 md:my-0 bg-gray-50 px-8 py-3 rounded-2xl text-center min-w-[140px] border border-gray-100 shadow-inner">
               <span className="block text-3xl font-black text-[#0B1221] tracking-widest">{match.score}</span>
               <div className="flex items-center justify-center gap-2 mt-1">
                 {match.status === 'LIVE' && <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-ping"></span>}
                 <span className={`text-[10px] font-black uppercase tracking-widest ${match.status === 'LIVE' ? 'text-[#39FF14]' : 'text-gray-400'}`}>
                    {match.status === 'LIVE' ? 'مباشر ' + match.time : match.status}
                 </span>
               </div>
            </div>

            <div className="flex-1 flex items-center justify-end gap-6 w-full md:w-auto">
               <div className="text-left font-black text-lg text-[#0B1221] order-2 md:order-2">{match.awayTeam}</div>
               <div className="order-1 md:order-1">
                 <TeamIcon name={match.awayTeam} />
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchesSection;
