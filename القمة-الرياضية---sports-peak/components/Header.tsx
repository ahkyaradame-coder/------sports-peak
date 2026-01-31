
import React, { useState } from 'react';
import { ViewType, Notification } from '../types';
import NotificationPanel from './NotificationPanel';

interface Props {
  onViewChange: (view: ViewType) => void;
  currentView: ViewType;
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  userName: string | null;
  userImage?: string | null;
  onSearch: (query: string) => void;
  onOpenProfile: () => void;
  notifications: Notification[];
  onMarkNotifRead: (id: number) => void;
}

const Header: React.FC<Props> = ({ 
  onViewChange, 
  currentView, 
  onOpenLogin, 
  isLoggedIn, 
  userName, 
  userImage,
  onSearch, 
  onOpenProfile,
  notifications,
  onMarkNotifRead
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    }
  };

  const navItems = [
    { id: 'HOME', label: 'الرئيسية' },
    { id: 'NEWS', label: 'الأخبار' },
    { id: 'MATCHES', label: 'المباريات' },
    { id: 'VIDEOS', label: 'الفيديوهات' },
    { id: 'STANDINGS', label: 'الترتيب' },
    { id: 'STATS', label: 'إحصائيات اللاعبين' },
    { id: 'ABOUT', label: 'من نحن' },
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="sticky top-0 z-50 bg-[#0B1221] text-white shadow-2xl">
      <div className="bg-black/30 text-[10px] font-bold py-1 text-center text-gray-400">
         تغطية حية لأكثر من 15 دوري عالمي ومسابقات قارية • تحديثات لحظة بلحظة
      </div>

      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onViewChange('HOME')}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF4D00] rounded-xl flex items-center justify-center font-black text-2xl md:text-3xl transform -rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-[#FF4D00]/20">P</div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none">القمة<span className="text-[#FF4D00]">الرياضية</span></span>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Sports Peak Global</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-6 font-bold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`transition-all pb-1 text-sm whitespace-nowrap ${
                currentView === item.id 
                ? 'text-[#FF4D00] border-b-2 border-[#FF4D00]' 
                : 'hover:text-[#FF4D00] text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 flex-grow md:flex-grow-0 justify-end relative">
          <form onSubmit={handleSearchSubmit} className="relative group hidden sm:block">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث..."
              className="bg-white/10 border border-white/20 rounded-xl py-2 pr-10 pl-4 text-sm font-medium w-[120px] md:w-[200px] focus:w-[150px] md:focus:w-[280px] focus:bg-white focus:text-[#0B1221] outline-none transition-all duration-300 placeholder:text-gray-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#FF4D00] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          <div className="relative">
            <button onClick={() => setIsNotifOpen(!isNotifOpen)} className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all relative active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF4D00] rounded-full flex items-center justify-center text-[10px] font-black border-2 border-[#0B1221]">{unreadCount}</span>}
            </button>
            {isNotifOpen && <NotificationPanel notifications={notifications} onClose={() => setIsNotifOpen(false)} onMarkRead={onMarkNotifRead} />}
          </div>

          {isLoggedIn ? (
            <button onClick={onOpenProfile} className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 transition-all active:scale-95">
              <div className="w-7 h-7 bg-gradient-to-tr from-[#39FF14] to-green-400 rounded-full flex items-center justify-center text-[#0B1221] font-black text-xs shadow-lg overflow-hidden border border-white/20">
                {userImage ? (
                  <img src={userImage} className="w-full h-full object-cover" alt="avatar" />
                ) : (
                  userName?.charAt(0)
                )}
              </div>
              <div className="flex flex-col items-start">
                 <span className="hidden sm:block font-black text-xs truncate max-w-[80px] leading-none">{userName}</span>
                 <span className="hidden sm:block text-[8px] text-[#FF4D00] font-black uppercase">تعديل الملف</span>
              </div>
            </button>
          ) : (
            <button onClick={onOpenLogin} className="px-4 py-2 rounded-xl font-black text-xs hover:bg-white/10 transition-all border border-white/20">دخول</button>
          )}

          <button onClick={() => onViewChange('SUBSCRIPTION')} className={`px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-black text-xs md:text-sm transition-all active:scale-95 shadow-lg whitespace-nowrap ${currentView === 'SUBSCRIPTION' ? 'bg-[#FF4D00] text-white' : 'bg-[#39FF14] text-[#0B1221] hover:bg-[#32e012]'}`}>VIP</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
