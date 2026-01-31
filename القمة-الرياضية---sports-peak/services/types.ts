
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  category: string;
  imageUrl: string;
  date: string;
}

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: 'LIVE' | 'FINISHED' | 'UPCOMING';
  time: string;
  league: string;
  imageUrl?: string; // حقل جديد لصور المباريات الحقيقية
}

export interface PlayerStats {
  id: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
  image: string;
}

export interface StandingTeam {
  rank: number;
  name: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Notification {
  id: number;
  title: string;
  time: string;
  isRead: boolean;
  type: 'MATCH' | 'NEWS' | 'SYSTEM';
}

export type ViewType = 'HOME' | 'NEWS' | 'MATCHES' | 'VIDEOS' | 'STANDINGS' | 'SUBSCRIPTION' | 'STATS' | 'ABOUT' | 'SEARCH_RESULTS';
