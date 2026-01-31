
import React from 'react';
import { Match } from '../types.ts';

const TEAM_LOGOS_MINI: Record<string, string> = {
  "ريال مدريد": "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/30px-Real_Madrid_CF.svg.png",
  "برشلونة": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_logo.svg/30px-FC_Barcelona_logo.svg.png",
  "الهلال": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Al-Hilal_Saudi_FC_logo.svg/30px-Al-Hilal_Saudi_FC_logo.svg.png",
  "النصر": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Al_Nassr_FC_logo.svg/30px-Al_Nassr_FC_logo.svg.png",
  "ليفربول": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/30px-Liverpool_FC.svg.png",
  "مانشستر سيتي": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/30px-Manchester_City_FC_badge.svg.png",
  "الأهلي": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Al_Ahly_SC_logo.svg/30px-Al_Ahly_SC_logo.svg.png",
  "الزمالك": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/ZamalekSC.png/30px-ZamalekSC.png"
};

interface Props {
  matches: Match[];
}

const TickerIcon = ({ name }: { name: string }) => {
  const [error, setError] = React.useState(false);
  const src = TEAM_LOGOS_MINI[name];
  
  if (error || !src) return <div className="w-4 h-4 bg-white/20 rounded-full"></div>;
  
  return (
    <img 
      src={src} 
      className="w-5 h-5 object-contain" 
      alt="" 
      onError={() => setError(true)}
    />
  );
};

const LiveScoreTicker: React.FC<Props> = ({ matches }) => {
  return (
    <div className="bg-[#FF4D00] text-white py-2 overflow-hidden whitespace-nowrap border-b border-black/10">
      <div className="animate-ticker flex items-center">
        {matches.concat(matches).map((match, idx) => (
          <div key={`${match.id}-${idx}`} className="inline-flex items-center gap-4 px-8 border-l border-white/20 last:border-0">
            {match.status === 'LIVE' && (
              <span className="flex h-2 w-2 rounded-full bg-[#39FF14] animate-pulse"></span>
            )}
            <div className="flex items-center gap-2 font-bold text-sm">
              <TickerIcon name={match.homeTeam} />
              <span>{match.homeTeam}</span>
              <span className="bg-black/20 px-2 rounded mx-1 font-black">{match.score}</span>
              <span>{match.awayTeam}</span>
              <TickerIcon name={match.awayTeam} />
            </div>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-black ${match.status === 'LIVE' ? 'bg-black text-[#39FF14]' : 'bg-white/20'}`}>
              {match.status === 'LIVE' ? match.time : match.status === 'FINISHED' ? 'انتهت' : match.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScoreTicker;
