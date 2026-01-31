
import React, { useState, useEffect } from 'react';
import Header from './Header.tsx';
import LiveScoreTicker from './LiveScoreTicker.tsx';
import Hero from './Hero.tsx';
import NewsGrid from './NewsGrid.tsx';
import SportsAssistant from './SportsAssistant.tsx';
import Footer from './Footer.tsx';
import NewsModal from './NewsModal.tsx';
import MatchesSection from './MatchesSection.tsx';
import VideosSection from './VideosSection.tsx';
import StandingsSection from './StandingsSection.tsx';
import SubscriptionSection from './SubscriptionSection.tsx';
import StatsSection from './StatsSection.tsx';
import AboutSection from './AboutSection.tsx';
import LoginModal from './LoginModal.tsx';
import SearchResults from './SearchResults.tsx';
import ProfileModal from './ProfileModal.tsx';
import { NewsItem, Match, ViewType, Notification } from '../services/types.ts';
import { getSportsAdvice } from '../services/geminiService.ts';

const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "ميركاتو الصيف: تفاصيل عرض الهلال لضم نجم الدوري الإنجليزي",
    summary: "مفاوضات متقدمة تجري الآن في لندن لحسم الصفقة الأغلى في تاريخ النادي.",
    category: "سوق الانتقالات",
    imageUrl: "", // نتركها فارغة بناءً على طلبك لعدم إظهار صور في الانتقالات
    date: "منذ ساعتين"
  },
  {
    id: 2,
    title: "تحليل فني: كيف تطور أسلوب لعب المنتخب الوطني تحت قيادة المدرب الجديد؟",
    summary: "دراسة شاملة للتحولات التكتيكية والاعتماد على الأطراف في بناء الهجمات.",
    category: "تحليلات",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000",
    date: "منذ 4 ساعات"
  },
  {
    id: 3,
    title: "دوري أبطال أوروبا: قمة نارية منتظرة في ربع النهائي",
    summary: "أسفرت القرعة عن مواجهات كسر عظم بين كبار القارة العجوز.",
    category: "أوروبا",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000",
    date: "منذ 6 ساعات"
  },
  {
    id: 4,
    title: "تحليل تكتيكي: نقاط ضعف الخصم في ركلات الجزاء",
    summary: "كيف يستغل المهاجمون زوايا المرمى بذكاء في المباريات الكبرى.",
    category: "تحليلات",
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=1000",
    date: "منذ 8 ساعات"
  }
];

const MOCK_MATCHES: Match[] = [
  { id: 1, homeTeam: "ريال مدريد", awayTeam: "برشلونة", score: "2 - 1", status: "LIVE", time: "75'", league: "الدوري الإسباني" },
  { id: 2, homeTeam: "الهلال", awayTeam: "النصر", score: "0 - 0", status: "UPCOMING", time: "21:00", league: "دوري روشن" },
  { id: 3, homeTeam: "ليفربول", awayTeam: "مانشستر سيتي", score: "3 - 3", status: "FINISHED", time: "FT", league: "الدوري الإنجليزي" },
];

const INITIAL_NOTIFS: Notification[] = [
  { id: 1, title: "مباراة الكلاسيكو تبدأ بعد قليل!", time: "منذ 5 دقائق", isRead: false, type: 'MATCH' },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('HOME');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; profileImage?: string } | null>(null);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFS);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiInsight, setAiInsight] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setCurrentView('SEARCH_RESULTS');
    setIsLoadingAi(true);
    const insight = await getSportsAdvice(`أعطني تحليلاً سريعاً لـ: ${query}`);
    setAiInsight(insight);
    setIsLoadingAi(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'ABOUT': return <AboutSection onBack={() => setCurrentView('HOME')} />;
      case 'MATCHES': return <MatchesSection matches={MOCK_MATCHES} onNotify={(m) => showToast(`تنبيه لـ ${m}`)} onBack={() => setCurrentView('HOME')} />;
      case 'NEWS': return <section className="p-8"><NewsGrid news={MOCK_NEWS} onReadMore={setSelectedNews} onReminder={(t) => showToast(t)} /></section>;
      case 'VIDEOS': return <VideosSection onVideoSelect={(v) => showToast(v)} onBack={() => setCurrentView('HOME')} />;
      case 'STANDINGS': return <StandingsSection onBack={() => setCurrentView('HOME')} />;
      case 'STATS': return <StatsSection onPlayerAction={(p) => showToast(p)} onBack={() => setCurrentView('HOME')} />;
      case 'SUBSCRIPTION': return <SubscriptionSection onSubscribe={(p) => showToast(p)} onBack={() => setCurrentView('HOME')} />;
      case 'SEARCH_RESULTS': 
        return (
          <SearchResults 
            query={searchQuery} 
            newsResults={MOCK_NEWS.filter(n => n.title.includes(searchQuery))} 
            matchResults={MOCK_MATCHES.filter(m => m.homeTeam.includes(searchQuery))}
            aiInsight={aiInsight}
            isLoadingAi={isLoadingAi}
            onReadMore={setSelectedNews}
            onReminder={(t) => showToast(t)}
            onNotify={(m) => showToast(m)}
            onBackToHome={() => setCurrentView('HOME')}
          />
        );
      default:
        return (
          <>
            <Hero onWatchLive={() => setCurrentView('MATCHES')} onReadMore={() => setSelectedNews(MOCK_NEWS[0])} />
            <section className="container mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold mb-8 border-r-4 border-[#FF4D00] pr-4">أحدث الأخبار</h2>
              <NewsGrid news={MOCK_NEWS} onReadMore={setSelectedNews} onReminder={(t) => showToast(t)} />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LiveScoreTicker matches={MOCK_MATCHES} />
      <Header 
        onViewChange={setCurrentView} 
        currentView={currentView} 
        onOpenLogin={() => setIsLoginOpen(true)}
        isLoggedIn={!!user}
        userName={user?.name || null}
        onSearch={handleSearch}
        onOpenProfile={() => setIsProfileOpen(true)}
        notifications={notifications}
        onMarkNotifRead={(id) => setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n))}
      />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNav={setCurrentView} onSocial={(s) => showToast(s)} />
      <SportsAssistant />
      <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} onAction={showToast} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLoginSuccess={(m, n) => { setUser({name: n}); setIsLoginOpen(false); }} />
      {user && <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} currentName={user.name} onUpdate={(n) => setUser({name: n})} />}
      {toast.visible && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[120] bg-[#0B1221] text-[#39FF14] px-8 py-4 rounded-2xl shadow-2xl border border-[#39FF14]/30 font-bold">
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default App;
